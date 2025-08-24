import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/Tabs';
import { Card, CardHeader, CardTitle, CardContent } from './components/Card';
import { buyTokens, swapTokens, stakeTokens, Portfolio } from './components/SmartContracts';
import { Button } from './components/Button';
import NFTGallery from './components/NFTGallery';
import TransactionsTable from './components/TransactionsTable';
import InvestorTable from './components/InvestorTable';
import WalletConnect from './components/WalletConnect';
import { Chart } from './components/Chart';
import Liquidity from "./components/Liquidity";
import Notification from './components/Notification';
import { buyTokens, swapTokens, stakeTokens, Portfolio } from './components/SmartContracts';

// Tabs definition
const tabs = {
  dashboard: { title: 'Dashboard', content: 'dashboard' },
  transactions: { title: 'Transactions', content: 'transactions' },
  nfts: { title: 'NFTs', content: 'nfts' },
  investors: { title: 'Investors', content: 'investors' },
  liquidity: { title: 'Liquidity', content: 'liquidity' },
} as const;

type TabKey = keyof typeof tabs;

export default function Dashboard() {
  // Portfolio state
  const [portfolio, setPortfolio] = useState<Portfolio>({
    totalGoldTokens: 1000,
    portfolioValue: 50000,
    cryptoEquivalent: 10,
  });

  // Tab state
  const [activeTab, setActiveTab] = useState<TabKey>('dashboard');

  // Notifications state
  const [alerts, setAlerts] = useState<{id:number,message:string,type?:string}[]>([]);

  const addAlert = (msg: string, type?: 'success' | 'info' | 'error') => {
    const id = Math.random();
    setAlerts(prev => [...prev, { id, message: msg, type }]);
    setTimeout(() => setAlerts(prev => prev.filter(a => a.id !== id)), 5000);
  };

  // Handlers
  const handleBuyTokens = (amount: number) => {
    setPortfolio(prev => buyTokens(prev, amount));
    addAlert(`${amount} GDT bought successfully!`, 'success');
  };

  const handleSwapTokens = (amount: number) => {
    setPortfolio(prev => swapTokens(prev, amount));
    addAlert(`${amount} GDT swapped successfully!`, 'info');
  };

  const handleStakeTokens = (amount: number) => {
    setPortfolio(prev => stakeTokens(prev, amount));
    addAlert(`${amount} GDT staked successfully!`, 'info');
  };

  // Input state for swap
  const [swapAmount, setSwapAmount] = useState<number>(0);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img src="/logo.png" alt="Hybrid Gold Logo" className="h-10 w-10 mr-2"/>
          <h1 className="text-2xl font-bold">Hybrid Gold Dashboard</h1>
        </div>
        <WalletConnect />
      </header>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {alerts.map(alert => (
          <Notification key={alert.id} message={alert.message} type={alert.type} />
        ))}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {(Object.keys(tabs) as TabKey[]).map(tabKey => (
            <TabsTrigger key={tabKey} value={tabKey}>
              {tabs[tabKey].title}
            </TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(tabs) as TabKey[]).map(tabKey => (
          <TabsContent key={tabKey} value={tabKey}>
            {/* Dashboard Tab */}
            {tabKey === 'dashboard' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="hover:shadow-lg transition duration-300">
                    <CardHeader><CardTitle>Total Gold Tokens</CardTitle></CardHeader>
                    <CardContent>
                      {portfolio.totalGoldTokens} GDT
                      <div className="mt-2 flex gap-2">
                        <Button onClick={() => handleBuyTokens(100)}>Buy 100 GDT</Button>
                        <Button onClick={() => handleStakeTokens(50)}>Stake 50 GDT</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition duration-300">
                    <CardHeader><CardTitle>Portfolio Value</CardTitle></CardHeader>
                    <CardContent>${portfolio.portfolioValue}</CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition duration-300">
                    <CardHeader><CardTitle>Crypto Equivalent</CardTitle></CardHeader>
                    <CardContent>{portfolio.cryptoEquivalent} ETH</CardContent>
                  </Card>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Chart title="Gold Price (USD)" />
                  <Chart title="Portfolio Growth" />
                </div>
              </>
            )}

            {/* Transactions Tab */}
            {tabKey === 'transactions' && <TransactionsTable />}

            {/* NFTs Tab */}
            {tabKey === 'nfts' && <NFTGallery />}

            {/* Investors Tab */}
            {tabKey === 'investors' && <InvestorTable />}

            {/* Liquidity Tab */}
            {tabKey === 'liquidity' && (
              <Card className="mt-4">
                <CardHeader><CardTitle>Liquidity / Swap</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-col md:flex-row">
                    <input
                      type="number"
                      className="border p-2 rounded w-full"
                      placeholder="Amount to swap"
                      value={swapAmount}
                      onChange={e => setSwapAmount(Number(e.target.value))}
                    />
                    <Button onClick={() => handleSwapTokens(swapAmount)}>Swap</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
