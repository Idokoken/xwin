import { WalletIcon } from "lucide-react";
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

function Wallet() {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} />
                <div className="">
                  <CardTitle className="text-2xl">My Wallet</CardTitle>
                  <div className="flex items-center gap-2">
                    <p>#A475E</p>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Wallet;
