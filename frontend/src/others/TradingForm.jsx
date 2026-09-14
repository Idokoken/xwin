import React, { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookMarkedIcon, DotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoinContext } from "@/context/coin/CoinContext";
import { WalletContext } from "@/context/wallet/WalletContext";
import { AssetContext } from "@/context/asset/AssetContext";
import { OrderContext } from "@/context/order/OrderContext";

function TradingForm() {
  const [orderType, setOrderType] = useState("BUY");
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { coinDetails } = useContext(CoinContext);
  const { userWallet, getUserWallet } = useContext(WalletContext);
  const { assertDetails, getAssetDetails } = useContext(AssetContext);
  const { payOrder } = useContext(OrderContext);

  const handleChange = (e) => {
    const amount = e.target.value;
    setAmount(amount);
    const volume = calculateBuyCost(
      amount,
      coinDetails.market_data.current_price.usd,
    );
    setQuantity(volume);
  };

  const calculateBuyCost = (amount, price) => {
    const volume = amount / price;
    const decimalPlaces = Math.max(2, price.toString().split(".")[0].length);
    return volume.toFixed(decimalPlaces);
  };

  const handleBuyCrypto = () => {
    const orderData = { coinId: coinDetails?.id, quantity, orderType };
    payOrder({ jwt: localStorage.getItem("jwt"), orderData, amount });
  };

  useEffect(() => {
    getUserWallet(localStorage.getItem("jwt"));
    getAssetDetails({
      jwt: localStorage.getItem("jwt"),
      coinId: coinDetails.id,
    });
  }, []);

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
              {quantity}
            </p>
          </div>
        </div>
        {false && (
          <h1 className="text-red-600 text-center pt-4">
            Insufficent wallet balance to buy
          </h1>
        )}
      </div>
      <div className="flex gap-5 items-center">
        <div className="">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
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
            <p className="text-xl font-bold">
              {coinDetails?.market_data.current_price.usd}
            </p>
            <p className="text-red-600">
              <span>-1265343453.44</span>
              <span>(0.346363)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{orderType == "BUY" ? "Available Cash" : "Available Quantity"}</p>
        <p>
          {orderType == "BUY"
            ? `$ ${userWallet?.balance}`
            : assertDetails?.quantity || 0}
        </p>
      </div>
      <div className="">
        <Button
          onClick={handleBuyCrypto}
          className={`w-full py-6 ${orderType == "SELL" ? "bg-red-600 text-white" : ""}`}
        >
          {orderType}
        </Button>
        <Button
          variant="links"
          className="w-full mt-m text-xl"
          onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}
        >
          {orderType == "BUY" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>
    </div>
  );
}

export default TradingForm;
