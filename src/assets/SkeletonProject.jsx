// Components/SkeletonProjectCard.jsx

import React from 'react';

const SkeletonProjectCard = () => {
  return (
    // Match the outer card structure
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 transition-all duration-500 animate-pulse"
    >
      {/* Skeleton for the Image Area */}
      <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-300 dark:bg-gray-700">
      </div>

      {/* Skeleton for the Text Area */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-5">
        <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-500 rounded mb-2"></div> {/* Title */}
        <div className="w-full h-4 bg-gray-200 dark:bg-gray-500 rounded"></div> {/* Description */}
      </div>
    </div>
  );
};

export default SkeletonProjectCard;
