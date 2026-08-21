import { useState } from "react";
import { Button } from "@/components/ui/button";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Bitcoin from "../assets/Bitcoin-Logo.png";

function Home() {
  const [category, setCategory] = useState("all");

  const handleCategory = (val) => {
    setCategory(val);
  };

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              className="rounded-full"
              variant={category == "all" ? "default" : "outline"}
            >
              All
            </Button>

            <Button
              onClick={() => handleCategory("top50")}
              className="rounded-full"
              variant={category == "top50" ? "default" : "outline"}
            >
              Top 50
            </Button>

            <Button
              onClick={() => handleCategory("topGainers")}
              className="rounded-full"
              variant={category == "topGainers" ? "default" : "outline"}
            >
              Top Gainers
            </Button>

            <Button
              onClick={() => handleCategory("topLosers")}
              className="rounded-full"
              variant={category == "topLosers" ? "default" : "outline"}
            >
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div className="">
              <Avatar className="-z-50">
                <AvatarImage src={Bitcoin} />
                <AvatarFallback>BC</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-2">
              <p>ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
