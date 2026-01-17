import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../UI/card-with-header";
import { getAllBank } from "@/app/services/bank.services";


const PaymentOptions = async () => {
    const banks = await getAllBank();

    return (
    <CardWithHeader title="Payment Options">
       {
        banks.map((payment, index) =>(
           <div className="flex gap-5 p-5 border-gray-100" key={index}>
            <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                <FiCreditCard size={22}/> 
            </div>
            <div className="self-center">
                <div className="font-bold">{payment.bankName}</div>
                <div className="text-sm">{payment.accountNumber}</div>
                <div className="text-sm opacity-70">{payment.accountName}</div>
            </div>
            <div className="ml-auto bg-blue-100 text-gray-800 text-xs h-fit self-center py-1 px-2.5">
            Bank Transfer
            </div>
           </div> 
        ))
       } 
    </CardWithHeader>
    )
}
export default PaymentOptions;