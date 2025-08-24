import React from 'react';
export const Button = ({ children, className, onClick }: any) => (
  <button onClick={onClick} className={`px-4 py-2 bg-green-500 text-white rounded ${className}`}>{children}</button>
);
