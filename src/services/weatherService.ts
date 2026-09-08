export const KAINCHI_COORDS = { lat: 29.4219, lon: 79.5167 };

export interface KainchiWeather {
  fetchedAt: string;
  timezone: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windKmh: number;
  precipitation: number;
  weatherCode: number;
  weatherLabel: string;
  rainChanceMax: number;
  todayHigh: number;
  todayLow: number;
  sunrise: string;
  sunset: string;
  daily: {
    date: string;
    max: number;
    min: number;
    rainChance: number;
    code: number;
    label: string;
  }[];
}

const CACHE_KEY = 'kainchi-weather-v1';
const CACHE_MS = 30 * 60 * 1000;

const WMO_LABELS: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Dense drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Rain showers',
  82: 'Violent showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Severe hail storm',
};

export function weatherLabel(code: number): string {
  return WMO_LABELS[code] ?? 'Mountain weather';
}

function parseIsoTime(iso: string): string {
  try {
    return new Date(iso).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    });
  } catch {
    return iso;
  }
}

export async function fetchKainchiWeather(): Promise<KainchiWeather> {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as KainchiWeather;
      if (Date.now() - new Date(parsed.fetchedAt).getTime() < CACHE_MS) {
        return parsed;
      }
    }
  } catch {
    // ignore cache
  }

  const params = new URLSearchParams({
    latitude: String(KAINCHI_COORDS.lat),
    longitude: String(KAINCHI_COORDS.lon),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset',
    timezone: 'Asia/Kolkata',
    forecast_days: '5',
  });

  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!res.ok) throw new Error('Weather unavailable');
  const data = await res.json();

  const weather: KainchiWeather = {
    fetchedAt: new Date().toISOString(),
    timezone: data.timezone,
    temperature: Math.round(data.current.temperature_2m),
    feelsLike: Math.round(data.current.apparent_temperature),
    humidity: data.current.relative_humidity_2m,
    windKmh: Math.round(data.current.wind_speed_10m),
    precipitation: data.current.precipitation,
    weatherCode: data.current.weather_code,
    weatherLabel: weatherLabel(data.current.weather_code),
    rainChanceMax: data.daily.precipitation_probability_max?.[0] ?? 0,
    todayHigh: Math.round(data.daily.temperature_2m_max[0]),
    todayLow: Math.round(data.daily.temperature_2m_min[0]),
    sunrise: parseIsoTime(data.daily.sunrise[0]),
    sunset: parseIsoTime(data.daily.sunset[0]),
    daily: data.daily.time.map((date: string, i: number) => ({
      date,
      max: Math.round(data.daily.temperature_2m_max[i]),
      min: Math.round(data.daily.temperature_2m_min[i]),
      rainChance: data.daily.precipitation_probability_max[i] ?? 0,
      code: data.daily.weather_code[i],
      label: weatherLabel(data.daily.weather_code[i]),
    })),
  };

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(weather));
  } catch {
    // ignore
  }

  return weather;
}

export function roadAdvisory(weather: KainchiWeather, month: number): {
  level: 'clear' | 'caution' | 'avoid';
  title: string;
  detail: string;
} {
  const rain = weather.precipitation;
  const chance = weather.rainChanceMax;
  const monsoon = month >= 6 && month <= 8;

  if (weather.weatherCode >= 95 || rain >= 8) {
    return {
      level: 'avoid',
      title: 'Heavy rain / storm likely on the ghat',
      detail:
        'NH-109 between Kathgodam, Bhowali and Kainchi can see standing water and slow traffic. Delay night driving. Confirm with your chauffeur before leaving the plains.',
    };
  }
  if (monsoon && chance >= 50) {
    return {
      level: 'caution',
      title: 'Monsoon moisture on Jeolikote–Bhowali',
      detail:
        'Expect wet tarmac, mist, and occasional debris on hairpins. Keep 30 extra minutes from Kathgodam. Landslide risk is localized — ask locally before a Mukteshwar extension.',
    };
  }
  if (chance >= 40 || rain > 0.2) {
    return {
      level: 'caution',
      title: 'Showers possible in the valley',
      detail:
        'Carry a light rain layer for darshan. Roads usually stay open; visibility can drop after 4 PM.',
    };
  }
  if (month === 12 || month === 1) {
    return {
      level: 'caution',
      title: 'Cold, clear — fog possible at dawn in the plains',
      detail:
        'Hill road is typically dry. Delhi–Haldwani fog can delay morning arrivals. Temple courtyards are cold for 7 AM aarti.',
    };
  }
  return {
    level: 'clear',
    title: 'Hill road looking workable',
    detail:
      'No heavy rain in the latest forecast for the Kainchi valley. Still drive the ghat in daylight if you are not using a hill chauffeur.',
  };
}
