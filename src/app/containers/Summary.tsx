"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  ShoppingBasket } from "lucide-react";
import { useBox } from "../context/boxContext";
import { ProductType } from "../dataSources/bakeryProducts";
import { useState } from "react";
import Toast from "../components/Toast";

type ProductOrderInfoProps = {
  name: string;
  quantity: number;
  totalPrice: number;
}
const ProductOrderInfo = ({name ,quantity, totalPrice}: ProductOrderInfoProps) => {
  if (quantity === 0) return;

  return (
    <div className="flex justify-between text-sm">
      <span>{name} x{quantity}</span>
      <span className="text-muted-foreground">${totalPrice}</span>
    </div>
  )
};


export default function OrderSummary() {
  const [showToast, setShowToast] = useState(false)
  const { boxList, boxQuantity, resetBox, boxSize } = useBox();

  const cookies = boxList.filter((item) => item.type === ProductType.COOKIES);
  const cookieQuantity = cookies.length;
  const cookiePrice = cookies.reduce((total, item) => total + item.price, 0);

  const cake = boxList.filter((item) => item.type === ProductType.CAKES);
  const cakeQuantity = cake.length;
  const cakePrice = cake.reduce((total, item) => total + item.price, 0);

  const bibingka = boxList.filter((item) => item.type === ProductType.BIBINGKA);
  const bibingkaQuantity = bibingka.length;
  const bibingkaPrice = bibingka.reduce((total, item) => total + item.price, 0);

  const breads = boxList.filter((item) => item.type === ProductType.BREADS);
  const breadsQuantity = breads.length;
  const breadsPrice = breads.reduce((total, item) => total + item.price, 0);

  const totalPrice = cakePrice + cookiePrice + breadsPrice + bibingkaPrice;
  const disableAddToCart = boxList?.filter((item) => item?.quantity_of_set > 0).length < boxSize;

  const onClose = () => {
    setShowToast(false);
    resetBox();
  };
 

  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold ">Summary</h3>

        <ProductOrderInfo name="Cookies" quantity={cookieQuantity} totalPrice={cookiePrice} />
        <ProductOrderInfo name="Breads" quantity={breadsQuantity} totalPrice={breadsPrice} />
        <ProductOrderInfo name="Cake Rings" quantity={cakeQuantity} totalPrice={cakePrice} />
        <ProductOrderInfo name="Bibingka" quantity={bibingkaQuantity} totalPrice={bibingkaPrice} />
          <div className="border-t pt-2 flex justify-between font-semibold text-[17px]">
            <span>Total x{boxQuantity} (boxes)</span>
            <span>${totalPrice * boxQuantity}</span>
          </div>
          <Button
            className="w-full bg-primary hover:bg-primary-700 text-white mt-20 text-md hover:opacity-80 disabled:opacity-30"
            disabled={disableAddToCart}
            onClick={() => setShowToast(true)}
          >
            <ShoppingBasket className="w-4 h-4 mr-2" />
              Add to Cart
          </Button>
        
      </CardContent>

      <Toast show={showToast} message="Added to cart" onClose={onClose} />
    </Card>
  );
}


