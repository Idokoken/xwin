import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import Razorpay from "../assets/razorpay_logo.png";
import Stripe from "../assets/stripe_logo.png";
import { Button } from "@/components/ui/button";

function TopUpForm() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };
  const handleSubmit = () => {
    console.log(amount, paymentMethod);
  };

  return (
    <div className="pt-10 space-y-5">
      <div className="">
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          className="py-7 text-lg"
          placeholder="$999"
          value={amount}
          onChange={handleChange}
        />
      </div>

      <div className="">
        <h1 className="pb-1 ">Select Payment Method</h1>
        <RadioGroup
          defaultValue="RAZORPAY"
          className="flex"
          onValueChange={(value) => handlePaymentMethodChange(value)}
        >
          <div className="flex items-center gap-3 space-x-2 border p-3 px-3 rounded-md w-42">
            <RadioGroupItem
              value="RAZORPAY"
              id="r1"
              icon={DotFilledIcon}
              className="h-9 w-9"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded px-5 py-2 w-20">
                <img src={Razorpay} alt="Razorpay" className="object-cover" />
              </div>
            </Label>
          </div>
          <div className="flex items-center gap-3 space-x-2 border p-3 px-3 rounded-md w-42">
            <RadioGroupItem
              value="STRIPE"
              id="r1"
              icon={DotFilledIcon}
              className="h-9 w-9"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded px-5 py-2 w-20">
                <img src={Stripe} alt="Stripe" className="object-cover h-7" />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7">
        Submit
      </Button>
    </div>
  );
}

export default TopUpForm;
