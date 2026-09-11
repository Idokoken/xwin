import React, { useContext, useEffect } from "react";
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
import { WithdrawalContext } from "@/context/withdrawal/WithdrawalContext";

function PaymentDetails() {
  const { paymentDetails, getPaymentDetails } = useContext(WithdrawalContext);

  useEffect(() => {
    getPaymentDetails({ jwt: localStorage.getItem("jwt") });
  }, []);

  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment details</h1>
      {paymentDetails ? (
        <Card>
          <CardHeader>
            <CardTitle>Yes Bank</CardTitle>
            <CardDescription>
              A/C NO : {paymentDetails?.accountNumber}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <p className="w-32">{paymentDetails?.accountHolderName}</p>
              <p className="text-gray-400"> : ND Tech</p>
            </div>
            <div className="flex items-center">
              <p className="w-32">IFSC</p>
              <p className="text-gray-400"> : YESB000007</p>
            </div>
          </CardContent>
        </Card>
      ) : (
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
        </Dialog>
      )}
    </div>
  );
}

export default PaymentDetails;
