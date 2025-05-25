import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useBox } from "../context/boxContext";

export default function QuantitySelector() {
  const {addBoxQuantity, removeBoxQuantity, boxQuantity, boxList, boxSize} = useBox();
  const hasActive = boxList.length === boxSize

  const decrement = () => {
    if (boxQuantity > 1) removeBoxQuantity()
  }

  const increment = () => {
    addBoxQuantity()
  
  }

  return (
    <div className={`flex items-center gap-2 border rounded-full px-4 py-1 shadow-sm w-fit ${!hasActive && "cursor-not-allowed opacity-50"}`} aria-disabled={!hasActive}>
      <Button
        variant="ghost"
        size="icon"
        onClick={decrement}
        className="h-8 w-8 p-0"
        disabled={boxQuantity === 1 || !hasActive}
      >
        <Minus className="h-5 w-5" />
      </Button>
      <span className="text-md font-medium w-5 text-center">{boxQuantity}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={increment}
        className="h-8 w-8 p-0"
        disabled={!hasActive}
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  )
}
