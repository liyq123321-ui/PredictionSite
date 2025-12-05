import React from 'react';

interface ProbabilityBarProps {
  probability: number; // 0-100
  className?: string;
}

export const ProbabilityBar: React.FC<ProbabilityBarProps> = ({ 
  probability, 
  className = '' 
}) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300"
        style={{ width: `${probability}%` }}
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>0%</span>
        <span className="font-medium">{probability}%</span>
        <span>100%</span>
      </div>
    </div>
  );
};