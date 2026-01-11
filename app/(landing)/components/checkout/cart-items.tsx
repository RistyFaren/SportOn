"use client";

import { cartList } from "../UI/cart-popup";
import Image from "next/image";
import Button from "../UI/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { totalPrice } from "../UI/cart-popup";
import CardWithHeader from "../UI/card-with-header";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const {push} = useRouter ();

  const payment = () => {

  }

  return (
    <CardWithHeader title="Card Items">
      <div className="overflow-auto max-h-75">
        {cartList.map((item, index) => (
        <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={`/images/products/${item.imgUrl}`}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="flex gap-3 font-medium text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">{priceFormatter(item.price)}</div>
            </div>
          </div>
          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 p-0! self-center ml-auto"
          >
            <FiTrash2 />
          </Button>
        </div>
      ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-sm text-primary">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button variant="dark" className="w-full mt-4" onClick={() => push ("/payment")}>
          <FiCreditCard /> Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
};
export default CartItems;
