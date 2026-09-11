import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { WalletContext } from "@/context/wallet/WalletContext";

function TransferForm() {
  const [formData, setFormData] = useState({
    amount: "",
    walletId: "",
    purpose: "",
  });

  const { transferMoney } = useContext(WalletContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const reqData = {
      amount: formData.amount,
      purpose: formData.purpose,
    };
    transferMoney({
      jwt: localStorage.getItem("jwt"),
      walletId: formData.walletId,
      reqData,
    });
    console.log(formData);
  };

  return (
    <div className="pt-10 space-y-5">
      <div className="">
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={FormData.amount}
          className="py-7"
          placeholder="$9999"
          name="amount"
        />
      </div>

      <div className="">
        <h1 className="pb-1">Wallet Id</h1>
        <Input
          onChange={handleChange}
          value={FormData.walletId}
          className="py-7"
          placeholder="#AD299GF"
          name="walletId"
        />
      </div>

      <div className="">
        <h1 className="pb-1">Purpose</h1>
        <Input
          onChange={handleChange}
          value={FormData.purpose}
          className="py-7"
          placeholder="Gift for your freind..."
          name="purpose"
        />
      </div>
      <DialogClose className="w-full">
        <Button className="w-full py-7" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogClose>
    </div>
  );
}

export default TransferForm;
