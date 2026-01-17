import { getTransactionById } from "@/app/services/transaction.services";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";
import { TpageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected";

const OrderStatus = async ({params}: TpageProps)  => {
    const {id} = await params;

    const transaction = await getTransactionById(id);
    console.log("transaction", transaction);

    return (
        <main className="bg-gray-100 min-h-[80vh] p-40">
            <div className="max-w-5xl mx-auto">
                <h1 className="font-bold text-5xl text-center mb-10">Order Status</h1>
            </div>
            {transaction.status === "pending" && <OrderSubmitted />}
            {transaction.status === "paid" && <OrderConfirmed />}
            {transaction.status === "rejected" && <OrderRejected />}   
        </main>
    );
};
export default OrderStatus;