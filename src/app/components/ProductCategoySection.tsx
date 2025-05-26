"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen: boolean;
};

export default function ProductCategorySection({ title, children, defaultOpen }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="mb-6 border rounded-xl shadow-sm">
      <div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 px-4 py-3 cursor-pointer bg-secondary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-base sm:text-lg font-bold">{title}</h2>
        <Button variant="ghost" size="icon" className="self-end sm:self-auto h-fit">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </Button>
      </div>
    
      <div
        className={cn(
          "transition-all duration-500 overflow-scroll",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {children}
        </div>
      </div>
    </div>
  
  );
}
