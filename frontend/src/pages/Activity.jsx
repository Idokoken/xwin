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
import { OrderContext } from "@/context/order/OrderContext";
import { calculateProfit } from "@/utils/calculateProfit";

function Activity() {
  const { orders, getAllOrdersForUsers } = useContext(OrderContext);

  const handleRemoveToWatchlist = (val) => {
    console.log(val);
  };

  useEffect(() => {
    getAllOrdersForUsers({
      jwt: localStorage.getItem("jwt"),
    });
  }, []);

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
          {orders.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>2026/05/11</p>
                <p className="text-gray-400">10:11:44</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.orderItem.coin.image} />
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <span>{item.orderItem.coin.name}</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell className="">
                ${item.orderItem.coin.buyPrice}
              </TableCell>
              <TableCell>{item.orderItem.coin.sellPrice}</TableCell>
              <TableCell>{item.orderType}</TableCell>
              <TableCell>${item.orderItem.coin.total_volume}</TableCell>
              <TableCell>{calculateProfit(item)}</TableCell>
              <TableCell className="text-right">
                {item.price}
                {/* <Button
                  variant="ghost"
                  className="h-10 w-10"
                  size="icon"
                  onClick={handleRemoveToWatchlist(item.id)}
                >
                  <BookmarkFilledIcon className="w-6 h-6" />
                </Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Activity;
