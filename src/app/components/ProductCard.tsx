"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BoxItemListType } from "./BakeryList";
import { useBox } from "../context/boxContext";

export default function ProductCard(product: BoxItemListType) {
  const { name, price, quantity_of_set, image, id, type } = product;
  const { addBoxItemList, boxList, boxSize, removeBoxItemList } = useBox();
  const [quantityToBox, setQuantity] = useState(0);

  const remainQuantity =
    boxSize - boxList.reduce((total, item) => total + item.quantity_of_set, 0);
  const hasSelected = quantityToBox > 0;
  const isDisableAddButton = quantity_of_set > remainQuantity;
  const isDisableRemoveButton = quantityToBox <= 0;
  const isDisableCard = isDisableAddButton && !hasSelected;

  const handleAddToBox = () => {
    const productExist = boxList.filter((item) => item.id?.includes(id));

    if (productExist.length >= quantity_of_set) {
      const newKey = `${id}-${Math.random().toString(36).substr(2, 3)}`;
      for (let i = 0; i < quantity_of_set; i++) {
        addBoxItemList({
          ...product,
          id: newKey,
          quantity_of_set: 1,
        });
      }
    } else {
      for (let i = 0; i < product.quantity_of_set; i++) {
        addBoxItemList({
          ...product,
          quantity_of_set: 1,
        });
      }
    }
  };

  const handleIncrement = () => {
    handleAddToBox();
    setQuantity((q) => q + 1);
  };

  const handleDecrement = () => {
    removeBoxItemList(id, type);
    setQuantity((q) => (q > 0 ? q - 1 : 0));
  };

  useEffect(() => {
    if (boxSize === 0) setQuantity(0);
  }, [boxSize]);

  return (
    <Card
      className={`w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] rounded-2xl shadow-md transition-all ${
        isDisableCard && "opacity-50  cursor-not-allowed"
      } ${hasSelected ? "border-[#caf1ff] border-[3px]" : "bg-white"}`}
      aria-disabled={isDisableCard}
    >
      <CardContent className="pt-4 sm:pt-6 px-2 sm:px-4 pb-4">
        <div className="relative">
          <Image
            src={image}
            alt="Morning Set"
            width={300}
            height={180}
            className="rounded-xl transition-all duration-500 hover:scale-105"
          />
        </div>

        <h2 className="text-sm sm:text-base font-bold mt-3 sm:mt-4 leading-snug">
          {name}
          <br />({quantity_of_set} pcs)
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-tight">
          Set of {quantity_of_set} items
        </p>

        <div className="flex items-center justify-between flex-wrap gap-y-1">
          <span className="text-sm sm:text-base font-bold">${price}</span>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecrement}
              disabled={isDisableRemoveButton}
            >
              -
            </Button>
            <span className="text-sm font-medium w-5 text-center">
              {quantityToBox}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleIncrement}
              disabled={isDisableAddButton}
            >
              +
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
