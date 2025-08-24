import React from 'react';
export default function TransactionsTable() {
  const transactions = [
    { date: '2025-08-24', type: 'Buy', amount: 10, value: 500, status: 'Completed' },
    { date: '2025-08-23', type: 'Sell', amount: 5, value: 250, status: 'Completed' },
  ];
  return (
    <Card className="mt-4">
      <CardHeader><CardTitle>Transactions</CardTitle></CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="border-b">
                <th>Date</th><th>Type</th><th>Amount</th><th>USD Value</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr key={i} className="text-center border-b">
                  <td>{t.date}</td><td>{t.type}</td><td>{t.amount} GDT</td><td>${t.value}</td><td>{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
