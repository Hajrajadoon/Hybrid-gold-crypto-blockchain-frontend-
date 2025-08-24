import React from 'react';

const TransactionsTable = () => (
  <table className="w-full text-left border-collapse border">
    <thead>
      <tr>
        <th className="border px-2 py-1">ID</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Amount</th>
        <th className="border px-2 py-1">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">1</td>
        <td className="border px-2 py-1">Buy</td>
        <td className="border px-2 py-1">100 GDT</td>
        <td className="border px-2 py-1">2025-08-24</td>
      </tr>
    </tbody>
  </table>
);

export default TransactionsTable;
