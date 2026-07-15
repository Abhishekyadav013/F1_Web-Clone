import React from "react";
import bgVideo from "../assets/f1-bg.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="select-none text-[100px] font-black uppercase tracking-[12px] text-red-600/10 [text-shadow:8px_8px_15px_rgba(0,0,0,0.9)] md:text-[140px]">
          FORMULA 1
        </h1>
      </div>

      <div className="relative z-10 flex h-full">
        <div className="flex w-1/2 flex-col justify-center px-16">
          <p className="text-sm font-bold uppercase tracking-[6px] text-red-500">
            World's Fastest Motorsport
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight text-white md:text-6xl">
            Welcome To The World Of
            <span className="text-red-500"> RACING</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            Experience the thrill of Formula 1 where every lap is a battle, every pit stop matters,
            and every second decides history. Discover legendary drivers, iconic teams,
            unforgettable races, and the fastest cars on Earth.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-full bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700">
              Explore Drivers
            </button>
            <button className="rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black">
              Watch Highlights
            </button>
          </div>
        </div>

        <div className="flex w-1/2 items-center justify-center">
          <img
            src="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_900/content/dam/fom-website/drivers/2025Drivers/verstappen"
            alt="Max Verstappen"
            className="h-[600px] object-contain drop-shadow-[0_30px_50px_rgba(255,0,0,0.5)] transition hover:scale-105 lg:h-[680px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;