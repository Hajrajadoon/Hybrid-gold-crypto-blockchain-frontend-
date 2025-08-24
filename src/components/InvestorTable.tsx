import React from 'react';
export default function InvestorTable() {
  const investors = [
    { name: 'Alice', holdings: 100, share: '10%' },
    { name: 'Bob', holdings: 200, share: '20%' },
  ];
  return (
    <Card className="mt-4">
      <CardHeader><CardTitle>Investors</CardTitle></CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="border-b"><th>Name</th><th>Holdings</th><th>% Share</th></tr>
            </thead>
            <tbody>
              {investors.map((inv, i) => (
                <tr key={i} className="text-center border-b">
                  <td>{inv.name}</td><td>{inv.holdings} GDT</td><td>{inv.share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
