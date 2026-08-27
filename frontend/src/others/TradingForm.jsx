import { Input } from "@/components/ui/input";
import React from "react";

function TradingForm() {
  const handleChange = () => {};
  return (
    <div className="space-y-10 p-5">
      <div className="">
        <div className="flex gap-4 items-center justify-center">
          <Input
            className="py-7 focus:outline-none"
            placeholder="Enter Amount..."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div className="">
            <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              5463
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingForm;
