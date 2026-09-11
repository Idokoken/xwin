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
import { useNavigate } from "react-router-dom";
import { CoinContext } from "@/context/coin/CoinContext";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function AssetTable({ coin, category }) {
  const navigate = useNavigate();
  const { getCoinList } = useContext(CoinContext);

  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <ScrollArea className={`${category == "all" ? "h-[77h]" : "h-[82vh]"}`}>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Coin</TableHead>
              <TableHead>SYMBOL</TableHead>
              <TableHead>VOLUME</TableHead>
              <TableHead>MARKET CAP</TableHead>
              <TableHead>24h</TableHead>
              <TableHead className="text-right">PRICE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coin.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell
                  className="font-medium flex items-center gap-2"
                  onClick={() => navigate(`/market/${item.id}`)}
                >
                  <Avatar className="">
                    <AvatarImage src={item.image} />
                    <AvatarFallback>BC</AvatarFallback>
                  </Avatar>
                  <span>{item.name}</span>
                </TableCell>
                <TableCell>{item.symbol}</TableCell>
                <TableCell>{item.total_volume}</TableCell>
                <TableCell>{item.market_cap}</TableCell>
                <TableCell>{item.price_change_percentage_24h}</TableCell>
                <TableCell className="text-right">
                  {item.current_price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ScrollArea>
      </Table>
    </>
  );
}

export default AssetTable;
