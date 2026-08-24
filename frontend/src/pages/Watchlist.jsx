import React from "react";

function Watchlist() {
  const hamdleRemoveToWatchlist = (value) => {
    console.log(value);
  };

  return (
    <div className="p-5 lg:p-20">
      <h1 className="text-bold text-3xl pb-5">Watchlist</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">COIN</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="">PRICE</TableHead>
            <TableHead className="text-right text-red-600">REMOVE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={Bitcoin} />
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>7789888888</TableCell>
              <TableCell>7789888888333</TableCell>
              <TableCell>-0.789</TableCell>
              <TableCell className="">$250.00</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  className="h-10 w-10"
                  size="icon"
                  onClick={hamdleRemoveToWatchlist(item.id)}
                >
                  <BookmarkFilledIcon className="w-6 h-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Watchlist;
