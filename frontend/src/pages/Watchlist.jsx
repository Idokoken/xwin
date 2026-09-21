import React, { useContext, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Bitcoin from "../assets//Bitcoin-Logo.png";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { WatchlistContext } from "@/context/watchlist/WatchlistContext";
import { existInWatchlist } from "@/utils/existInWatchlist";
import { CoinContext } from "@/context/coin/CoinContext";

function Watchlist() {
  const { items, getUserWatchlist } = useContext(WatchlistContext);
  const { coinDetails } = useContext(CoinContext);

  const hamdleRemoveToWatchlist = (value) => {
    addItemToWatchlist({
      coinId: value,
      jwt: localStorage.getItem("jwt"),
    });
    console.log(value);
  };

  useEffect(() => {
    getUserWatchlist({ jwt: localStorage.getItem("jwt") });
  }, []);

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
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.image} />
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell className="">$2{item.current_price}</TableCell>
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
