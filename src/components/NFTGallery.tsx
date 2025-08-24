import React from 'react';
export default function NFTGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {[1,2,3].map((n) => (
        <Card key={n}>
          <CardHeader><CardTitle>NFT #{n}</CardTitle></CardHeader>
          <CardContent>
            <div className="h-32 bg-yellow-200 flex items-center justify-center">NFT Image</div>
            <p className="mt-2">Gold: {n*10}g</p>
            <p>Value: ${n*500}</p>
          </CardContent>
          <CardFooter><Button>Transfer</Button></CardFooter>
        </Card>
      ))}
    </div>
  );
}
