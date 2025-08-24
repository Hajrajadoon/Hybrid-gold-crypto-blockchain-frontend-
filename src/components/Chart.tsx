import React from 'react';
export const Chart = ({ title }: { title: string }) => (
  <Card className="mt-4">
    <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
    <CardContent>
      <div className="h-48 bg-gray-100 flex items-center justify-center">Chart Placeholder</div>
    </CardContent>
  </Card>
);
