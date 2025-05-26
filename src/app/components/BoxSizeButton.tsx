"use client";
import { Button } from "@/components/ui/button";
import { useBox } from "../context/boxContext";
import Image from "next/image";

type BoxSizeProps = {
  size: 6 | 12;
};

const BoxSizeButton = ({ size }: BoxSizeProps) => {
  const { chooseBoxSize, boxList, boxSize, setCurrentStep } = useBox();
  const isDisabled = boxList?.filter((item) => item.quantity_of_set > 0).length > size;
  const hasActive = size === boxSize;

  const handleChooseBoxSize = () => {
    chooseBoxSize(size);
    setCurrentStep(2);
  };
  
  return (
    <Button
      variant="outline"
      className={`w-full lg:w-[200px] h-[60px] ${hasActive && "bg-blue"} hover:bg-blue`}
      onClick={handleChooseBoxSize}
      disabled={isDisabled}
    
    >
      <Image src="/cupcake3.png" alt="Bakery Product" width={20} height={20} />
      {size} items
    </Button>
  );
};

export default BoxSizeButton;
