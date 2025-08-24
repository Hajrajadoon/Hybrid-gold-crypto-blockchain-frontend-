import React from 'react';
import { Button } from './Button';

const Liquidity = () => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="font-bold mb-2">Liquidity / Swap</h2>
    <div className="flex gap-2 flex-col md:flex-row">
      <input className="border p-2 rounded w-full" placeholder="Amount to swap" />
      <Button>Swap</Button>
    </div>
  </div>
);

export default Liquidity;
