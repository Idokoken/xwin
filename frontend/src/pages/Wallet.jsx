import React, { useContext, useEffect } from "react";
import {
  CopyIcon,
  DollarSign,
  ShuffleIcon,
  UploadIcon,
  WalletIcon,
} from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TopUpForm from "@/others/TopUpForm";
import WithdrawalForm from "@/others/WithdrawalForm";
import TransferForm from "@/others/TransferForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { WalletContext } from "@/context/wallet/WalletContext";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Wallet() {
  const {
    userWallet,
    transactions,
    getUserWallet,
    depositMoney,
    getWalletTransactions,
  } = useContext(WalletContext);
  const query = useQuery();
  const orderId = query.get("order_id");
  const paymentId = query.get("payment_id");
  const razorpaypaymentId = query.get("razorpay_payment_id");
  const navigate = useNavigate();

  const handleFetchUserWallet = () => {
    getUserWallet(localStorage.getItem("jwt"));
  };

  const handleFetchWalletTransactions = () => {
    getWalletTransactions({ jwt: localStorage.getItem("jwt") });
  };

  useEffect(() => {
    handleFetchUserWallet();
    handleFetchWalletTransactions();
  }, []);
  useEffect(() => {
    if (orderId) {
      depositMoney({
        jwt: localStorage.getItem("jwt"),
        orderId,
        paymentId: razorpaypaymentId || paymentId,
        navigate,
      });
    }
  }, [orderId, paymentId, razorpaypaymentId]);

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
                    <p className="text-gray-200 text-sm">#{userWallet?.id}</p>
                    <CopyIcon
                      className="cursor-pointer hover:text-slate-300"
                      size={15}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <ReloadIcon
                  onClick={handleFetchUserWallet}
                  className="w-6 h-6 cursor-pointer hover:text-gray-400"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign />
              <span className="text-2xl font-semibold">
                {userWallet.balance}
              </span>
            </div>
            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div
                    className="w-24 h-24 hover:text-gray-400 flex flex-col items-center justify-center 
                  rounded-md shadow-slate-800 shadow-md"
                  >
                    <UploadIcon />
                    <span className="mt-2 text-sm">Add money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top Up your Wallet</DialogTitle>
                  </DialogHeader>
                  <TopUpForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div
                    className="w-24 h-24 hover:text-gray-400 flex flex-col items-center justify-center 
                  rounded-md shadow-slate-800 shadow-md"
                  >
                    <UploadIcon />
                    <span className="mt-2 text-sm">Withdrawal</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Withdrawal</DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div
                    className="w-24 h-24 hover:text-gray-400 flex flex-col items-center justify-center 
                  rounded-md shadow-slate-800 shadow-md"
                  >
                    <ShuffleIcon />
                    <span className="mt-2 text-sm">Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                      Transfer to Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <div className="py-5 pt-10">
          <div className="flex items-center pb-5">
            <h1 className="text-2xl font-semibold">History</h1>
            <UpdateIcon className="h-7 w-7 cursor-pointer hover:text-gray-400" />
          </div>
          <div className="space-y-5">
            {transactions.map((item, index) => (
              <div className="" key={index}>
                <Card className="px-5 flex flex-row justify-between items-center p-2">
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon className="" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h1>Buy Asset</h1>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  <div className="">
                    <p className={`text-green-800`}>{item.amount} USD</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
