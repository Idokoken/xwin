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
import { WithdrawalContext } from "@/context/withdrawal/WithdrawalContext";

function Withdrawal() {
  const { history, getWithdrawalHistory } = useContext(WithdrawalContext);

  useEffect(() => {
    getWithdrawalHistory({ jwt: localStorage.getItem("jwt") });
  }, []);

  return (
    <div className="p-5 lg:p-20">
      <h1 className="text-bold text-3xl pb-5">Withdrawal</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date.toString()}</TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>${item.amount}</TableCell>
              <TableCell className="text-right">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Withdrawal;
