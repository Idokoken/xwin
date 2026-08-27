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


function Withdrawal() {
  return <div className="p-5 lg:p-20">
        <h1 className="text-bold text-3xl pb-5">Withdrawal</h1>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="py-5">Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className='text-right'>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <TableRow key={index}>
                
                <TableCell>July, 12, 2026</TableCell>
                <TableCell>Bank</TableCell>
                <TableCell>$999</TableCell>
                <TableCell className="text-right">Succes</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
}

export default Withdrawal;
