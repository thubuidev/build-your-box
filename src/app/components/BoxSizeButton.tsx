"use client";
import { Button } from "@/components/ui/button";
import { useBox } from "../context/boxContext";
import Image from "next/image";

type BoxSizeProps = {
  size: 6 | 12;
};

const BoxSizeButton = ({ size }: BoxSizeProps) => {
  const { chooseBoxSize, boxList, boxSize } = useBox();
  const isDisabled = boxList?.filter((item) => item.quantity_of_set > 0).length > size;
  const hasActive = size === boxSize;
  
  return (
    <Button
      variant="outline"
      className={`w-34 h-[50px] ${hasActive && "bg-blue"} hover:bg-blue`}
      onClick={() => chooseBoxSize(size)}
      size={"lg"}
      disabled={isDisabled}
    
    >
      <Image src="/cupcake3.png" alt="Bakery Product" width={20} height={20} />
      {size} items
    </Button>
  );
};

export default BoxSizeButton;
