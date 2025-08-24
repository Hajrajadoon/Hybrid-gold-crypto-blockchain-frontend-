import React from 'react';

const InvestorTable = () => (
  <table className="w-full text-left border-collapse border">
    <thead>
      <tr>
        <th className="border px-2 py-1">Name</th>
        <th className="border px-2 py-1">Invested</th>
        <th className="border px-2 py-1">Portfolio %</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 py-1">Alice</td>
        <td className="border px-2 py-1">1000 GDT</td>
        <td className="border px-2 py-1">10%</td>
      </tr>
    </tbody>
  </table>
);

export default InvestorTable;
