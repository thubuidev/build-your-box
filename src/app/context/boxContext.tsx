"use client";

import { createContext, useContext, useState } from "react";
import { BoxItemListType } from "../components/BakeryList";
import { ProductType } from "../dataSources/bakeryProducts";

type BoxContextType = {
  chooseBoxSize: (size: number) => void;
  boxSize: number;
  addBoxItemList: (item: BoxItemListType) => void;
  removeBoxItemList: (key: string, type: ProductType) => void;
  boxList: BoxItemListType[];
  addBoxQuantity: () => void;
  removeBoxQuantity: () => void;
  boxQuantity: number;
  resetBox: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
};

const BoxContext = createContext<BoxContextType | undefined>(undefined);

export function BoxProvider({ children }: { children: React.ReactNode }) {
 
  const [boxSize, setBoxSize] = useState<number>(0);
  const [boxList, setBoxList] = useState<BoxItemListType[]>([]);
  const [boxQuantity, setBoxQuantity] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const chooseBoxSize = (size: number) => {
    setBoxSize(size);
  };

  const addBoxItemList = (item: BoxItemListType) => {
    setBoxList((prev) => [...prev, item]);
  };

  const removeBoxItemList = (key: string, type: ProductType) => {
    if (boxList.some((item) => item.id === key)) {
      console.log("Removing item with exact key:", key);
      setBoxList((prev) => prev.filter((item) => item.id !== key));
    } else {
      if (type === ProductType.COOKIES) {
        setBoxList((prev) => {
          // Remove only the first matching item
          const indexToRemove = prev.findIndex((item) =>
            item.id?.includes(key)
          );
          if (indexToRemove === -1) return prev;
          return [
            ...prev.slice(0, indexToRemove),
            ...prev.slice(indexToRemove + 1),
          ];
        });
      } else {
        setBoxList((prev) => prev.filter((item) => !item.id?.includes(key)));
      }
    }
  };

  const addBoxQuantity = () => {
    setBoxQuantity((prev) => prev + 1);
  };

  const removeBoxQuantity = () => {
    setBoxQuantity((prev) => prev - 1);
  };

  const resetBox = () => {
    setBoxSize(0);
    setBoxList([]);
    setBoxQuantity(1);
    setCurrentStep(1);
  };



  return (
    <BoxContext.Provider
      value={{
        chooseBoxSize,
        boxSize,
        addBoxItemList,
        boxList,
        removeBoxItemList,
        addBoxQuantity, 
        removeBoxQuantity,
        boxQuantity,
        resetBox,
        setCurrentStep, 
        currentStep
      }}
    >
      {children}
    </BoxContext.Provider>
  );
}

export function useBox() {
  const context = useContext(BoxContext);
  if (!context) throw new Error("useBox must be used within a BoxProvider");
  return context;
}
