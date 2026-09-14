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
import { WatchlistContext } from "@/context/watchlist/WatchlistContext";
import { existInWatchlist } from "@/utils/existInWatchlist";

function StockDetails() {
  const { id } = useParams();

  const { fetchCoinDetails, coinDetails } = useContext(CoinContext);
  const { items, getUserWatchlist, addItemToWatchlist } =
    useContext(WatchlistContext);

  // testing
  // const getData = async (coinId) => {
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}/coins/details/${coinId}`);
  //     console.log("Coin Details Successfully Fetched", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") });
    fetchCoinDetails(id);
    // getData(id);
    getUserWatchlist({ jwt: localStorage.getItem("jwt") });
  }, [id]);

  const handleAddToWatchlist = () => {
    addItemToWatchlist({
      coinId: coinDetails.id,
      jwt: localStorage.getItem("jwt"),
    });
  };

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
              <p>{coinDetails?.symbol.toUpperCase()}</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">{coinDetails.name}</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">
                ${coinDetails?.market_data.current_price.usd}
              </p>
              <p className="text-red-600">
                <span>-{coinDetails?.market_data.market_cap_change_24h}</span>
                <span>
                  (-{coinDetails?.market_data.market_cap_change_percentage_24h}
                  %)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleAddToWatchlist}>
            {existInWatchlist(items, coinDetails) ? (
              <BookmarkFilledIcon className="w-6 h-6" />
            ) : (
              <BookMarkedIcon className="w-6 h-6" />
            )}
          </Button>
          {}
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
        <StockChart coinId={id} />
      </div>
    </div>
  );
}

export default StockDetails;
