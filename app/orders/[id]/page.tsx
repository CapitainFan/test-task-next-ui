"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RedIndicator, GreenIndicator } from "@/components/OrdersComponents";
import Link from "next/link";

import orders from "@/utils/db";
import { CancelButtonAuth } from "@/components/AuthComponents"
import { Button } from "@/components/ui/button"


export default function OrderDetailPage({ params }: { 
  params: { id: string } 
}) {

  const transactionId = `#${params.id}`;

  const order = orders.find(order => 
    order.transactionId === transactionId
  );

  return (
    <div className="w-full h-[calc(100vh-52px)] overflow-y-auto p-4">
      <div className="flex flex-col items-center w-full  space-y-4">
        
        <div className="flex justify-between w-[326px] items-center">
          <div className="flex items-center">
            <Link href="/orders"><CancelButtonAuth/></Link>
            <div className="text-[20px] ml-2 font-bold">{order.transactionId}</div>
          </div>
        </div>


        <Card key={order.transactionId} className="rounded-xl w-[326px] h-[120px] bg-[#232831] border-none mt-1">
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


        <div className="flex justify-between w-[326px] items-center mb-1">
          <div className="text-[18px] font-medium mr-2">Your Goods:</div>
          <div className="text-[18px] font-bold ml-2 flex items-center">
            <span>1</span>
            <span className="mx-[0.375rem]">-</span>
            <span>279,99$</span>
          </div>
        </div>


        <Card key={order.transactionId} className="rounded-xl w-[326px] h-[120px] bg-[#232831] border-none">
          <CardContent className="flex flex-col items-center">
            
            <div className="flex flex-row space-x-2">
              <div className="mt-3 font-semibold text-[16px]">40,500</div>
              
              <div className="mt-2.5 w-[59px] bg-[#393e45] h-[28px] rounded-full flex items-center font-bold">
                <div className="ml-[6px] text-[12px]">+1,500</div>
              </div>
            </div>

            <div className="flex flex-row space-x-1 mt-2 mr-3">
              <div className="font-semibold text-[14px]">279,99$</div>
              <div className="relative mt-0.5">
                <div className="absolute top-1/2 left-0 right-0 h-[0.8px] bg-[#909195]  -translate-y-1/2"></div>
                <div className="text-[#909195] font-bold text-[12px]">749.99$</div>
              </div>
            </div>
          
          </CardContent>
        </Card>


        <Button
          className="w-[326] h-[50px] flex items-center justify-center text-xs leading-[12px] font-medium
          text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-100"
        >
          <div className="text-[15px] ml-2 font-normal">Ask ?</div>   
        </Button>

          
      </div>
    </div>
  );
}