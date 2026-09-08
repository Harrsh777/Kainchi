import { STAYS_DATA } from '../data/stays';
import { FROM_CITIES } from '../data/fromCities';
import type { Stay } from '../types';

export type BudgetBand = 'under-15k' | '15-30k' | '30-50k' | '50k-plus';
export type HotelPref = 'budget' | 'boutique' | 'luxury' | 'walkable';

export interface TripInputs {
  startCity: string;
  startDate: string;
  endDate: string;
  people: number;
  budget: BudgetBand;
  hotelPref: HotelPref;
  carRequired: boolean;
  extras: { nainital: boolean; bhimtal: boolean; mukteshwar: boolean };
  days: number;
}

export interface DayPlan {
  day: number;
  title: string;
  route: string;
  items: string[];
}

export interface GeneratedTrip {
  title: string;
  days: DayPlan[];
  stay: Stay;
  nights: number;
  vehicleLabel: string;
  estimate: {
    hotel: number;
    car: number;
    food: number;
    total: number;
    perPerson: number;
  };
  budgetCap: number;
  budgetFit: boolean;
  notes: string[];
  arrivalHub: string;
}

const BUDGET_CAPS: Record<BudgetBand, number> = {
  'under-15k': 15000,
  '15-30k': 30000,
  '30-50k': 50000,
  '50k-plus': 120000,
};

function pickStay(pref: HotelPref, budget: BudgetBand): Stay {
  const sorted = [...STAYS_DATA];
  if (pref === 'walkable') {
    return [...sorted].sort((a, b) => a.distanceKm - b.distanceKm)[0];
  }
  if (pref === 'budget' || budget === 'under-15k') {
    return [...sorted].sort((a, b) => a.pricePerNight - b.pricePerNight)[0];
  }
  if (pref === 'luxury' || budget === '50k-plus') {
    return [...sorted].sort((a, b) => b.pricePerNight - a.pricePerNight)[0];
  }
  const mid = sorted.filter((s) => s.pricePerNight >= 2800 && s.pricePerNight <= 4300);
  return mid[0] ?? sorted[0];
}

function vehicleForPeople(people: number): { label: string; transfer: number; dayHire: number } {
  if (people >= 9) return { label: 'Tempo Traveller (12–16 seater)', transfer: 5499, dayHire: 7500 };
  if (people >= 5) return { label: 'Innova Crysta', transfer: 2999, dayHire: 5500 };
  if (people >= 3) return { label: 'Ertiga SUV', transfer: 2199, dayHire: 4200 };
  return { label: 'Dzire / Etios sedan', transfer: 1499, dayHire: 3500 };
}

function arrivalLine(city: string): { hub: string; day1Route: string; day1Items: string[] } {
  const known = FROM_CITIES.find((c) => c.name.toLowerCase() === city.toLowerCase());
  const farAir = ['Mumbai', 'Bangalore', 'Ahmedabad'];
  if (city === 'Kathgodam' || city === 'Haldwani') {
    return {
      hub: 'Kathgodam',
      day1Route: `${city} → Kainchi Dham → Hotel`,
      day1Items: [
        'Pickup at Kathgodam / Haldwani',
        '37 km ghat drive via Jeolikote and Bhowali (~1 hr 15 min)',
        'Check-in, rest, evening aarti at Kainchi Dham',
      ],
    };
  }
  if (farAir.includes(city) || city === 'Dehradun') {
    return {
      hub: city === 'Dehradun' ? 'Dehradun / Kathgodam' : 'Flight + Kathgodam',
      day1Route: `${city} → Kathgodam → Kainchi Dham → Hotel`,
      day1Items: [
        known?.flights ?? 'Fly to Delhi or Pantnagar, then connect to the hills.',
        'Pre-booked taxi from Kathgodam or Pantnagar to the ashram valley',
        'Evening aarti if you arrive before 6:30 PM; otherwise rest and go at dawn',
      ],
    };
  }
  return {
    hub: 'Kathgodam',
    day1Route: `${city} → Kathgodam → Kainchi Dham → Hotel`,
    day1Items: [
      known
        ? `${known.bestMode}. ${known.distanceKm} km from ${known.name}.`
        : 'Reach Kathgodam by train or highway, then the 37 km hill taxi.',
      'Station or hotel pickup with a hill chauffeur',
      'Check-in near the ashram, evening darshan and prasad',
    ],
  };
}

function extraStops(extras: TripInputs['extras']): { name: string; line: string }[] {
  const out: { name: string; line: string }[] = [];
  if (extras.nainital) out.push({ name: 'Nainital', line: 'Kainchi Dham → Nainital (18 km, ~45 min) — lake, Naina Devi, Mall Road' });
  if (extras.bhimtal) out.push({ name: 'Bhimtal', line: 'Bhimtal island lake (20 km, quieter than Nainital)' });
  if (extras.mukteshwar) out.push({ name: 'Mukteshwar', line: 'Mukteshwar Mahadev & Himalayan ridge (38 km, ~1.5 hr)' });
  return out;
}

export function generateTrip(inputs: TripInputs): GeneratedTrip {
  const days = Math.min(7, Math.max(2, inputs.days || 3));
  const nights = Math.max(1, days - 1);
  const stay = pickStay(inputs.hotelPref, inputs.budget);
  const rooms = Math.max(1, Math.ceil(inputs.people / 2));
  const vehicle = vehicleForPeople(inputs.people);
  const extras = extraStops(inputs.extras);
  const arrival = arrivalLine(inputs.startCity);

  const dayPlans: DayPlan[] = [];

  dayPlans.push({
    day: 1,
    title: 'Arrival & evening darshan',
    route: arrival.day1Route,
    items: arrival.day1Items,
  });

  if (days === 2) {
    const lastBits = extras.length
      ? extras.map((e) => e.line)
      : ['Morning aarti and Hanuman Chalisa', 'Quiet time at the ashram', 'Drive back to Kathgodam for departure'];
    dayPlans.push({
      day: 2,
      title: 'Darshan & departure',
      route: extras.length
        ? `Kainchi Dham → ${extras.map((e) => e.name).join(' / ')} → Departure`
        : 'Kainchi Dham → Departure',
      items: lastBits,
    });
  } else {
    const midDays = days - 2;
    for (let i = 0; i < midDays; i++) {
      const dayNum = i + 2;
      if (i === 0 && extras.length) {
        const focus = extras[0];
        const rest = extras.slice(1);
        dayPlans.push({
          day: dayNum,
          title: `Kainchi Dham & ${focus.name}`,
          route: `Kainchi Dham → ${focus.name}${rest.length ? '' : ''}`,
          items: [
            'Morning aarti at Kainchi Dham (gates ~6:30 AM)',
            'Breakfast at the stay, then the hill circuit',
            focus.line,
            ...(rest.length === 0 ? ['Return to hotel before evening aarti if energy allows'] : []),
          ],
        });
      } else if (extras[i]) {
        const focus = extras[i];
        dayPlans.push({
          day: dayNum,
          title: focus.name,
          route: `Hotel → ${focus.name} → Hotel`,
          items: [focus.line, 'Unhurried lunch stop', 'Back to Kainchi valley by evening'],
        });
      } else {
        dayPlans.push({
          day: dayNum,
          title: 'Temple time',
          route: 'Kainchi Dham (full day)',
          items: [
            'Morning and evening aarti',
            'Walk the Niglat / river paths',
            'Optional Golu Devta (Ghorakhal, 11 km)',
          ],
        });
      }
    }

    const leftover = extras.filter((_, idx) => days > 3 && idx >= midDays - 0);
    const departExtras = extras.slice(midDays);
    const departNames = departExtras.map((e) => e.name);
    dayPlans.push({
      day: days,
      title: 'Last circuit & departure',
      route: departNames.length
        ? `${departNames.join(' → ')} → Departure`
        : leftover.length
          ? `${leftover[leftover.length - 1]?.name ?? 'Kainchi'} → Departure`
          : 'Kainchi Dham → Departure',
      items: [
        ...(departExtras.length ? departExtras.map((e) => e.line) : ['Final darshan if time before checkout']),
        'Checkout and chauffeur to Kathgodam / Pantnagar / highway',
      ],
    });
  }

  // If user asked for all three extras on a 3-day trip, put nainital on day 2 and bhimtal on day 3
  if (days === 3 && extras.length >= 2) {
    dayPlans[1] = {
      day: 2,
      title: extras[0].name === 'Nainital' ? 'Kainchi Dham → Nainital' : `Kainchi Dham → ${extras[0].name}`,
      route: `Kainchi Dham → ${extras[0].name}`,
      items: ['Morning darshan at Kainchi Dham', extras[0].line, 'Return to valley stay'],
    };
    const rest = extras.slice(1);
    dayPlans[2] = {
      day: 3,
      title: `${rest.map((e) => e.name).join(' & ')} → Departure`,
      route: `${rest.map((e) => e.name).join(' → ')} → Departure`,
      items: [...rest.map((e) => e.line), 'Transfer to Kathgodam / airport / highway'],
    };
  }

  const hotel = rooms * stay.pricePerNight * nights;
  let car = 0;
  if (inputs.carRequired) {
    const longHaul = ['Mumbai', 'Bangalore', 'Ahmedabad', 'Jaipur', 'Chandigarh', 'Delhi', 'Noida', 'Gurgaon', 'Lucknow', 'Kanpur'].includes(
      inputs.startCity
    );
    const fromPlains = longHaul && !['Mumbai', 'Bangalore', 'Ahmedabad'].includes(inputs.startCity);
    car = vehicle.transfer * 2;
    if (fromPlains && (inputs.startCity === 'Delhi' || inputs.startCity === 'Noida' || inputs.startCity === 'Gurgaon')) {
      car = Math.max(car, 6499 + vehicle.transfer);
    }
    const sightDays = Math.max(0, days - 1);
    car += vehicle.dayHire * Math.min(sightDays, extras.length ? extras.length : 1);
  }
  const food = inputs.people * 650 * days;
  const total = hotel + car + food;
  const cap = BUDGET_CAPS[inputs.budget];

  const notes: string[] = [
    `${nights} night${nights > 1 ? 's' : ''} at ${stay.name} (${stay.distanceKm} km from the ashram).`,
    inputs.carRequired
      ? `Vehicle held: ${vehicle.label}. Fares are typical hill-taxi quotes, not surge festival rates.`
      : 'No car in this plan — add a Kathgodam taxi if you are not self-driving.',
    'Temple darshan is free. Quotes cover stay, local food, and transport only.',
  ];
  if (!inputs.carRequired && extras.length) {
    notes.push('Lake / Mukteshwar days are awkward without a cab. Consider adding a car in the quote.');
  }
  if (total > cap && inputs.budget !== '50k-plus') {
    notes.push(`This outline sits above your ${inputs.budget.replace('-', '–')} band. We will suggest a tighter stay or shared vehicle.`);
  }

  return {
    title: `Your ${days}-Day Kainchi Dham Trip`,
    days: dayPlans,
    stay,
    nights,
    vehicleLabel: inputs.carRequired ? vehicle.label : 'No car requested',
    estimate: {
      hotel,
      car,
      food,
      total,
      perPerson: Math.round(total / Math.max(1, inputs.people)),
    },
    budgetCap: cap,
    budgetFit: total <= cap,
    notes,
    arrivalHub: arrival.hub,
  };
}

export function daysFromDates(start: string, end: string, fallback: number): number {
  if (!start || !end) return fallback;
  const a = new Date(start);
  const b = new Date(end);
  const diff = Math.round((b.getTime() - a.getTime()) / 86400000) + 1;
  if (Number.isNaN(diff) || diff < 2) return fallback;
  return Math.min(7, diff);
}
