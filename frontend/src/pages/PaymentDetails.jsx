import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PaymentDetailsForm from "@/others/PaymentDetailsForm";

function PaymentDetails() {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment details</h1>
      {true ? <Card>
        <CardHeader>
          <CardTitle>Yes Bank</CardTitle>
          <CardDescription>A/C NO : **********1633</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <p className="w-32">A/C Holder</p>
            <p className="text-gray-400"> : ND Tech</p>
          </div>
          <div className="flex items-center">
            <p className="w-32">IFSC</p>
            <p className="text-gray-400"> : YESB000007</p>
          </div>
        </CardContent>
      </Card> : 
      <Dialog>
        <DialogTrigger>
          <Button className="py-6">Add Payment Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          {/* <PaymentDetailsForm /> */}
        </DialogContent>
      </Dialog>}

      
    </div>
  );
}

export default PaymentDetails;
