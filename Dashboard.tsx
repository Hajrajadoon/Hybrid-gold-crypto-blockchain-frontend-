import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/Tabs';
import { Card, CardHeader, CardTitle, CardContent } from './components/Card';
import { Button } from './components/Button';
import NFTGallery from './components/NFTGallery';
import TransactionsTable from './components/TransactionsTable';
import InvestorTable from './components/InvestorTable';
import WalletConnect from './components/WalletConnect';
import { Chart } from './components/Chart';

const tabs = {
  dashboard: { title: 'Dashboard', content: 'dashboard' },
  transactions: { title: 'Transactions', content: 'transactions' },
  nfts: { title: 'NFTs', content: 'nfts' },
  investors: { title: 'Investors', content: 'investors' },
  liquidity: { title: 'Liquidity', content: 'liquidity' },
} as const;

type TabKey = keyof typeof tabs;

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>('dashboard');

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Hybrid Gold Dashboard</h1>
        <WalletConnect />
      </header>

      <Tabs>
        <TabsList>
          {(Object.keys(tabs) as TabKey[]).map((tabKey) => (
            <TabsTrigger key={tabKey} onClick={() => setActiveTab(tabKey)}>
              {tabs[tabKey].title}
            </TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(tabs) as TabKey[]).map((tabKey) => (
          <TabsContent key={tabKey}>
            {tabKey === 'dashboard' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card><CardHeader><CardTitle>Total Gold Tokens</CardTitle></CardHeader><CardContent>1000 GDT</CardContent></Card>
                  <Card><CardHeader><CardTitle>Portfolio Value</CardTitle></CardHeader><CardContent>$50,000</CardContent></Card>
                  <Card><CardHeader><CardTitle>Crypto Equivalent</CardTitle></CardHeader><CardContent>10 ETH</CardContent></Card>
                </div>
                <div className="mt-6">
                  <Chart title="Gold Price (USD)" />
                  <Chart title="Portfolio Growth" />
                </div>
              </>
            )}

            {tabKey === 'transactions' && <TransactionsTable />}
            {tabKey === 'nfts' && <NFTGallery />}
            {tabKey === 'investors' && <InvestorTable />}
            {tabKey === 'liquidity' && (
              <Card className="mt-4">
                <CardHeader><CardTitle>Liquidity / Swap</CardTitle></CardHeader>
               
