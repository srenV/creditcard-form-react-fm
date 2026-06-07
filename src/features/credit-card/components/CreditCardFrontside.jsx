import { useState, useRef } from "react";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { useCreditCard } from "../context/creditCardContext";

const CreditCardFrontside = () => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const { formData, isSubmitted } = useCreditCard();

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
      className="tilt-card rounded-2xl shadow-sm hover:shadow-lg  bg-gray-300 z-10   sm:w-[60%] w-[80%] aspect-video transition-transform duration-100 ease-out select-none
      p-6 text-white flex-col flex justify-between absolute lg:relative -translate-x-5 lg:translate-0
      bg-[radial-gradient(at_top_left,#bf5af2_0%,transparent_60%),radial-gradient(at_top_right,#ff453a_0%,transparent_50%),radial-gradient(at_bottom_left,#5e5ce6_0%,transparent_70%),radial-gradient(at_bottom_right,#ff9f0a_0%,transparent_60%),linear-gradient(to_bottom_right,#a855f7,#ec4899)]
       text-shadow-sm text-shadow-gray-900 font-mono"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      aria-label="Credit card preview"
    >
      <div className="flex gap-4  items-center">
        <div className="rounded-full bg-white h-12 w-12  text-black flex items-center justify-center">
          {isSubmitted && (
            <a
              href="https://srenv.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse italic font-bold"
              aria-label="Open Sören Timo Voigt website"
            >
              stv<span>.</span>
            </a>
          )}
        </div>
        <div className="rounded-full border-white border h-6 w-6 flex items-center justify-center hover:animate-spin">
          {isSubmitted && (
            <a
              href="https://github.com/srenV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
            >
              <GithubLogoIcon />
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col 2xl:gap-10 gap-5">
        <div className="text-white 2xl:text-5xl sm:text-2xl text-xl justify-center tracking-wider flex">
          {formData?.cardNumber || "0000 0000 0000 0000"}
        </div>
        <div className="flex flex-row justify-between">
          <span className="uppercase">
            {formData?.cardName || "Jane Appleseed"}
          </span>
          <span className="">
            {`${formData?.cardExpMonth || "00"}/${formData?.cardExpYear || "00"}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardFrontside;
