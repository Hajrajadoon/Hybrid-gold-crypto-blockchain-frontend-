import React from 'react';
export const Tabs = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const TabsList = ({ children }: { children: React.ReactNode }) => <div className="flex gap-2 mb-4">{children}</div>;
export const TabsTrigger = ({ children, onClick }: any) => <button onClick={onClick} className="px-3 py-1 bg-blue-500 text-white rounded">{children}</button>;
export const TabsContent = ({ children }: any) => <div>{children}</div>;
