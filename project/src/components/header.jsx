"use client";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        <div className="text-3xl font-bold text-black ml-6">
          <h2>Create</h2>
        </div>

        <nav className="flex gap-6 mr-6">
          <a href="/" className="text-[#32DBC6] transition">Home</a>
          <a href="/services" className="text-black hover:text-[#32DBC6] transition">Work</a>
          <a href="/projects" className="text-black hover:text-[#32DBC6] transition">Services</a>
          <a href="/about" className="text-black hover:text-[#32DBC6] transition">About</a>
          <a href="/blog" className="text-black hover:text-[#32DBC6] transition">Blog</a>
          <a href="/contact" className="text-black hover:text-[#32DBC6] transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
