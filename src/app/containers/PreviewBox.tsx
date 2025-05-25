"use client";
import Image from "next/image";
import { useBox } from "../context/boxContext";
import OrderSummary from "./Summary";
import QuantitySelector from "../components/QuantitySelector";
import { useEffect, useState } from "react";

const PreviewBoxEmpty = () => {
  return (
    <div className="h-[500px] m-auto w-full max-w-md grid grid-cols-3 gap-4 border border-dashed border-[#371c06] rounded-2xl p-4">
      <div className="w-full col-span-3 py-2 border border-dashed border-[#371c06] rounded-xl flex items-center justify-center bg-white">
        <div className="h-full flex items-center justify-center text-center text-gray-500 px-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Start by selecting your box size
            </h3>
            <p className="text-sm">
              Please choose either 6 items or 12 items in Step 1 to begin
              customizing your box.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PreviewBox = () => {
  const { boxSize, boxList } = useBox();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (boxSize) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 500); // 500ms animation
      return () => clearTimeout(timeout);
    }
  }, [boxSize]);

  if (!boxSize) return <PreviewBoxEmpty />;

  const previewItems = [
    ...boxList,
    ...Array(boxSize - boxList.length).fill(null),
  ];

  return (
    <div className="fade-in-up">
      <div className="flex flex-col gap-3 items-center">
          <div
            aria-hidden="true"
            className={`w-full m-auto shadow-md max-w-md grid ${
              boxSize === 6 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"
            }  gap-4 border bg-[#371c06] border-[#371c06] rounded-2xl p-4 transition-transform duration-500 ${
              animate ? "scale-105" : ""
            }`}
          >
            {previewItems.map((item, index) => (
              <div
                key={index}
                className="py-2 border border-[#371c06] rounded-xl flex items-center justify-center bg-white"
              >
                <Image
                  src={item ? item.image : "/cupcake3.png"}
                  alt={item ? item.name : "Bakery Product"}
                  width={150}
                  height={220}
                  className="mb-2"
                />
              </div>
            ))}
          </div>
        <QuantitySelector />
        <OrderSummary />
      </div>
    </div>
  );
};

export default PreviewBox;
