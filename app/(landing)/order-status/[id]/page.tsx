"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
    const [isconfirm, setConfirm] = useState (false);

    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto">
                <h1 className="font-bold text-5xl text-center mb-10">Order Status</h1>
            </div>
            {
                isconfirm ? <OrderConfirmed /> : <OrderSubmitted />   
            }    
        </main>
    );
};
export default OrderStatus;