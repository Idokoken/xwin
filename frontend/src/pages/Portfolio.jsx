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

function Portfolio() {
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
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Portfolio;
