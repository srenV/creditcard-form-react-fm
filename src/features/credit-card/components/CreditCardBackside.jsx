import { useState, useRef } from "react";
import { useCreditCard } from "../context/creditCardContext";

const CreditCardBackside = () => {
  const { formData } = useCreditCard();
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.screen.width > 1000) {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      const rX = -(mouseY / (height / 2)) * 5;
      const rY = (mouseX / (width / 2)) * 5;

      setRotate({ x: rX, y: rY });
    }
  };

  const handleMouseLeave = () => {
    if (window.screen.width > 1000) {
      setRotate({ x: 0, y: 0 });
    }
  };

  return (
    <div
      className="rounded-lg shadow-2xl  bg-gray-300   sm:w-[60%] w-[80%]  aspect-video transition-transform duration-300 ease-out select-none lg:translate-x-30 translate-x-5 -translate-y-25 sm:-translate-y-35 xl:translate-y-0
      pt-5 gap-5 flex flex-col text-shadow-sm text-shadow-gray-900 font-mono"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="bg-gray-700 h-1/5"></div>
      <div className="w-8/10 h-1/6 bg-gray-500  self-center rounded-md text-white tracking-widest flex flex-row justify-between items-center px-5">
        <span className="font-just-another-hand text-2xl">
          {formData?.cardName || ""}
        </span>{" "}
        <span>{formData?.cardCvc || "000"}</span>
      </div>
      <div className="lg:flex flex-col gap-1 items-center mt-5 hidden">
        <div className="flex flex-row gap-1">
          <div className="bg-gray-500 w-15 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-13 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-12 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-11 h-1 rounded-md"></div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="bg-gray-500 w-13 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-9 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-5 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-16 h-1 rounded-md"></div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="bg-gray-500 w-15 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-11 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-16 h-1 rounded-md"></div>
          <div className="bg-gray-500 w-12 h-1 rounded-md"> </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardBackside;
