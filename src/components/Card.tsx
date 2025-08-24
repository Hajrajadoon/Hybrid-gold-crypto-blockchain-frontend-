import React from 'react';

export const Card = ({ children, className }: any) => (
  <div className={`p-4 bg-white shadow rounded ${className}`}>{children}</div>
);

export const CardHeader = ({ children }: any) => <div className="mb-2">{children}</div>;
export const CardTitle = ({ children }: any) => <h2 className="font-bold">{children}</h2>;
export const CardContent = ({ children }: any) => <div>{children}</div>;
export const CardFooter = ({ children }: any) => <div className="mt-2">{children}</div>;
