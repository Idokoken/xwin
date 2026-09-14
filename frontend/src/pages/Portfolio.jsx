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
import { AssetContext } from "@/context/asset/AssetContext";

function Portfolio() {
  const { userAssets, getUserAssets } = useContext(AssetContext);

  useEffect(() => {
    getUserAssets({ jwt: localStorage.getItem("jwt") });
  }, []);

  return (
    <div className="p-5 lg:p-20">
      <h1 className="text-bold text-3xl pb-5">Portfolio</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Asset</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>UNIT</TableHead>
            <TableHead>CHANGE</TableHead>
            <TableHead>Change%</TableHead>
            <TableHead className="text-right">VOLUME</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userAssets.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.coin.image} />
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <span>{item.coin.name}</span>
              </TableCell>
              <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.coin.price_change_24h}</TableCell>
              <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">
                {item.coin.total_volume}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Portfolio;
