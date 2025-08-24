import React from 'react';
export const Progress = ({ value }: { value: number }) => (
  <div className="w-full bg-gray-200 rounded h-3 mt-2">
    <div className="bg-blue-500 h-3 rounded" style={{ width: `${value}%` }}></div>
  </div>
);
