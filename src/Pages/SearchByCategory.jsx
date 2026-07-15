import React from 'react';

const drivers = [
  {
    id: 1,
    category: 'Red Bull',
    name: 'Max Verstappen',
    team: 'Oracle Red Bull Racing',
    number: 1,
    country: 'Netherlands',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/verstappen',
    description: 'Four-time Formula 1 World Champion known for his fearless racing style.',
  },
  {
    id: 2,
    category: 'Red Bull',
    name: 'Yuki Tsunoda',
    team: 'Oracle Red Bull Racing',
    number: 22,
    country: 'Japan',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/tsunoda',
    description: 'Fast and aggressive Japanese driver representing Red Bull Racing.',
  },
  {
    id: 3,
    category: 'Mercedes',
    name: 'George Russell',
    team: 'Mercedes AMG Petronas',
    number: 63,
    country: 'United Kingdom',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/russell',
    description: 'Mercedes team leader with multiple Grand Prix victories.',
  },
  {
    id: 4,
    category: 'Mercedes',
    name: 'Kimi Antonelli',
    team: 'Mercedes AMG Petronas',
    number: 12,
    country: 'Italy',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/antonelli',
    description: "One of Formula 1's brightest young talents.",
  },
  {
    id: 5,
    category: 'Ferrari',
    name: 'Lewis Hamilton',
    team: 'Scuderia Ferrari',
    number: 44,
    country: 'United Kingdom',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/hamilton',
    description: 'Seven-time World Champion racing for Ferrari.',
  },
  {
    id: 6,
    category: 'Ferrari',
    name: 'Charles Leclerc',
    team: 'Scuderia Ferrari',
    number: 16,
    country: 'Monaco',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/leclerc',
    description: "Ferrari's star driver famous for exceptional qualifying pace.",
  },
  {
    id: 7,
    category: 'McLaren',
    name: 'Lando Norris',
    team: 'McLaren',
    number: 4,
    country: 'United Kingdom',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/norris',
    description: 'McLaren race winner known for speed and consistency.',
  },
  {
    id: 8,
    category: 'McLaren',
    name: 'Oscar Piastri',
    team: 'McLaren',
    number: 81,
    country: 'Australia',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/piastri',
    description: 'Young Australian driver with outstanding racecraft.',
  },
  {
    id: 9,
    category: 'Aston Martin',
    name: 'Fernando Alonso',
    team: 'Aston Martin',
    number: 14,
    country: 'Spain',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/alonso',
    description: 'Two-time World Champion with decades of Formula 1 experience.',
  },
  {
    id: 10,
    category: 'Aston Martin',
    name: 'Lance Stroll',
    team: 'Aston Martin',
    number: 18,
    country: 'Canada',
    image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_600/content/dam/fom-website/drivers/2025Drivers/stroll',
    description: 'Canadian Formula 1 driver representing Aston Martin.',
  },
];

const SearchByCategory = () => {
  return (
    <section className="min-h-screen bg-black px-6 py-10 text-white">
      <h1 className="mb-10 text-center text-5xl font-bold text-amber-800 underline decoration-amber-800">
        Search-By-Category
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {drivers.map((driver) => (
          <article key={driver.id} className="w-72 overflow-hidden rounded-xl bg-white shadow-lg">
            <img src={driver.image} alt={driver.name} className="h-72 w-full object-cover" />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-black">{driver.name}</h2>
              <p className="font-semibold text-red-600">{driver.team}</p>
              <p className="text-gray-700">🌍 {driver.country}</p>
              <p className="text-gray-700">🔢 #{driver.number}</p>
              <p className="mt-3 text-gray-600">{driver.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SearchByCategory;