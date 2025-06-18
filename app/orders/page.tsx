"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import Link from "next/link";
import { RedIndicator, GreenIndicator } from "@/components/OrdersComponents";

import {orders} from "@/utils/db";


export default function Orders() {
  return (
    <div className="w-full h-[calc(100vh-52px)] overflow-y-auto p-4">
      <div className="flex flex-col items-center w-full space-y-4">
        
        <div className="flex justify-between w-[326px] items-center mb-2.5">
          <Link href="/" className="flex items-center">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.99997 1.00001C8.39047 0.609493 9.02367 0.609493 9.41417 1.00001C9.80467 1.39054 9.80467 2.0237 9.41417 2.41423L3.53547 8.2929C3.14497 8.6834 3.14497 9.3166 3.53547 9.7071L9.41417 15.5858C9.80467 15.9763 9.80467 16.6095 9.41417 17C9.02367 17.3905 8.39047 17.3905 7.99997 17L0.707082 9.7071C0.316552 9.3166 0.316552 8.6834 0.707082 8.2929L7.99997 1.00001Z" fill="white"></path>
            </svg>
            <div className="text-[25px] ml-2 font-bold">Orders</div>
          </Link>
        </div>


        {orders.map((order) => (

          <Link 
            key={order.transactionId}
            href={`/orders/${order.transactionId.replace("#", "")}`}
            className="block no-underline"
          >
          <Card className="rounded-xl w-[326px] h-[120px] bg-[#232831] border-none">
            <CardContent className="px-2 pt-1 pb-2 relative">

              <div className="ml-2 mr-2 absolute top-1/2 left-0 right-0 h-[1px] bg-gray-600 -translate-y-1/2"></div>

              <div className="grid grid-cols-3 gap-0 text-left">
                <div className="flex flex-col">
                  <div>
                    <CardDescription className="text-xs text-gray-400 text-[10px]">Transition ID</CardDescription>
                    <CardTitle className="text-sm font-medium text-[12px]">{order.transactionId}</CardTitle>
                  </div>
                  <div className="mt-2">
                    <CardDescription className="text-xs text-gray-400 text-[10px]">Game Name</CardDescription>
                    <CardTitle className="text-sm font-medium text-[12px]">{order.gameName}</CardTitle>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div>
                    <CardDescription className="text-xs text-gray-400 text-[10px]">Date</CardDescription>
                    <CardTitle className="text-sm font-medium text-[12px]">{order.date}</CardTitle>
                  </div>
                  <div className="mt-2">
                    <CardDescription className="text-xs text-gray-400 text-[10px]">Game ID</CardDescription>
                    <CardTitle className="text-sm font-medium text-[12px]">{order.gameId}</CardTitle>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div>
                    <CardDescription className="text-xs text-gray-400 text-[10px]">Status</CardDescription>
                    <CardTitle className="text-sm font-medium text-[12px] flex items-center">
                      {order.status === "success" ? <GreenIndicator /> : <RedIndicator />}
                      <span className="ml-1">{order.status}</span>
                    </CardTitle>
                  </div>
                  <div className="mt-2">
                    <CardDescription className="text-xs text-gray-400 text-[10px]">Amount</CardDescription>
                    <CardTitle className="text-sm font-medium text-[12px]">{order.amount}</CardTitle>
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>
          </Link>

        ))}

      </div>
    </div>
  );
}