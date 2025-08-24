import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType>({ activeTab: '', setActiveTab: () => {} });

export const Tabs = ({ children, value, onValueChange }: any) => {
  const [activeTab, setActiveTab] = useState(value || '');
  const handleChange = (val: string) => {
    setActiveTab(val);
    if (onValueChange) onValueChange(val);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleChange }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children }: any) => <div className="flex space-x-2">{children}</div>;

export const TabsTrigger = ({ value, children, onClick }: any) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;
  return (
    <button
      className={`px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      onClick={() => {
        setActiveTab(value);
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }: any) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;
  return <div className="mt-4">{children}</div>;
};
