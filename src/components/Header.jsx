import React from "react";

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-red-600 bg-black px-8 text-white">
      <div className="flex items-center gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Wo-0C5DccZH84JE0VEmMBmhKctk070uHtWGX5-ce8w&s=10"
          alt="F1 Logo"
          className="h-10 w-auto object-contain"
        />
        <span className="text-xl font-bold tracking-wider">F1</span>
      </div>

      <nav>
        <ul className="flex cursor-pointer items-center gap-6 font-medium">
          <li className="transition-colors hover:text-red-500">Home</li>
          <li className="transition-colors hover:text-red-500">About</li>
          <li className="transition-colors hover:text-red-500">Search by Category</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
