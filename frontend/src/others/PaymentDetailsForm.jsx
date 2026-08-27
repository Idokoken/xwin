import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import React from "react";
import { useForm } from "react-hook-form";

function PaymentDetailsForm() {
  const formdata = useForm({
    resolver: "",
    defaultValues: {
      accountHolderName: "",
      ifsc: "",
      accountNumber: "",
      bankName: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="py-2 px-10">
      <Form {...form}>
        <form onSubmit={formdata.handleSubmit(onSubmit)} className="space-y-6">
        <FormField 
        control={form.control}
          name='accountHolderName'
          render=
          {({ field }) => (
            <FormItem>
              <FormLabel>Account Holder Name</FormLabel>
              <FormControl>
                <Input
                // name="accountHolderName"
                  className="border w-full border-gray-700 p-5"
                  placeholder="ND Tech" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField 
        control={form.control}
          name='ifsc'
          render=
          {({ field }) => (
            <FormItem>
              <FormLabel>IFSC Code</FormLabel>
              <FormControl>
                <Input
                // name="ifsc"
                  className="border w-full border-gray-700 p-5"
                  placeholder="ND Tech" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

          <FormField 
        control={form.control}
          name='accountNumber'
          render=
          {({ field }) => (
            <FormItem>
              <FormLabel>Account Number</FormLabel>
              <FormControl>
                <Input
                // name="ifsc"
                  className="border w-full border-gray-700 p-5"
                  placeholder="******5644" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

           <FormField 
        control={form.control}
          name='confirmAccountNumber'
          render=
          {({ field }) => (
            <FormItem>
              <FormLabel>Confirm Account Number</FormLabel>
              <FormControl>
                <Input
                // name="ifsc"
                  className="border w-full border-gray-700 p-5"
                  placeholder="confirm account number" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

            <FormField 
        control={form.control}
          name='bankName'
          render=
          {({ field }) => (
            <FormItem>
              <FormLabel>Bank Name</FormLabel>
              <FormControl>
                <Input
                // name="ifsc"
                  className="border w-full border-gray-700 p-5"
                  placeholder="Yes Bank" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

          <DialogClose>
            <Button type='submit' className='w-full py-5'>
            Submit
          </Button>
          </DialogClose>
          
        </form>
      </Form>
    </div>
  );
}

export default PaymentDetailsForm;
