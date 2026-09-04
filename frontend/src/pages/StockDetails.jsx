import React, { useContext, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookMarkedIcon, DotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TradingForm from "../others/TradingForm";
import StockChart from "./StockChart";
import { useParams } from "react-router-dom";
import { CoinContext } from "@/context/coin/CoinContext";
import axios from "axios";
import { BASE_URL } from "@/config/API";

function StockDetails() {
  const { id } = useParams();

  const { fetchCoinDetails, coinDetails } = useContext(CoinContext);

  const getData = async (coinId) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/coins/details/${coinId}`);
      console.log("Coin Details Successfully Fetched", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") });
    // fetchCoinDetails(id);
    getData(id);
  }, [id]);

  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div className="">
            <Avatar>
              <AvatarImage src={coinDetails?.image.large} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">Bitcoin</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">$6554</p>
              <p className="text-red-600">
                <span>-1265343453.44</span>
                <span>(0.346363)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button>
            {true ? (
              <BookmarkFilledIcon className="w-6 h-6" />
            ) : (
              <BookMarkedIcon className="w-6 h-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">Tread</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do want to spend</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-20">
        <StockChart />
      </div>
    </div>
  );
}

export default StockDetails;
