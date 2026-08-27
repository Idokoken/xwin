import React from "react";
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

function Activity() {
  const handleRemoveToWatchlist = (val) => {
    console.log(val);
  };
  return (
    <div className="p-5 lg:p-20">
      <h1 className="text-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Trading Pair</TableHead>
            <TableHead>BUY PRICE</TableHead>
            <TableHead>SELL PRICE</TableHead>
            <TableHead>ORDER TYPE</TableHead>
            <TableHead className="">PROFIT/LOSS</TableHead>
            <TableHead className="text-right">VALUE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>2026/05/11</p>
                <p className="text-gray-400">10:11:44</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={Bitcoin} />
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell className="">$250.00</TableCell>
              <TableCell>7789888888</TableCell>
              <TableCell>7789888888333</TableCell>
              <TableCell>-0.789</TableCell>
              <TableCell className="">$250.00</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  className="h-10 w-10"
                  size="icon"
                  onClick={handleRemoveToWatchlist(item.id)}
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

export default Activity;
