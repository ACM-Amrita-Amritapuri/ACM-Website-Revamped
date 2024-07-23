import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const BusinessCard = () => {
  return (
    <div className="relative w-full max-w-[500px] h-auto p-6 rounded-lg shadow-lg bg-white overflow-hidden">
      {/* Background Slice */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-pink-500 transform -rotate-12 -translate-x-10 -translate-y-10 z-0"></div>
      
      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Section with Logo and Heading */}
        <div className="flex items-center mb-4">
          <img src="/acm-alone.png" alt="Amrita Logo" className="h-8 md:h-10 mr-4" /> {/* Adjust size as needed */}
          <div className="text-xl md:text-3xl font-bold">ACM Students Chapter</div>
        </div>

        {/* Email Section with Divider */}
        <div className="flex flex-col mb-4">
          <a
            href="mailto:acmchapter@am.amrita.edu"
            className="text-sm md:text-lg text-gray-800 mt-1"
          >
            acmchapter@am.amrita.edu
          </a>
          <div className="border-t border-gray-300 my-2"></div> {/* Divider Line */}
        </div>

        {/* Social Handles */}
        <div className="flex flex-wrap gap-4 mt-auto text-sm md:text-lg">
          <a
            href="https://www.linkedin.com/company/76237943/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition duration-300 flex items-center space-x-2"
          >
            <BsLinkedin className="text-xl md:text-2xl" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/ACM-Amrita-Amritapuri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-800 transition duration-300 flex items-center space-x-2"
          >
            <BsGithub className="text-xl md:text-2xl" />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/acm.amrita/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 transition duration-300 flex items-center space-x-2"
          >
            <BsInstagram className="text-xl md:text-2xl" />
            <span className="hidden md:inline">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
