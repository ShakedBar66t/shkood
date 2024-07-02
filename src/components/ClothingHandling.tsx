import React from "react";

interface ClothingHandlingProps {
  handlingText: string[];
  materialText: string;
  fittingText: string;
}

const ClothingHandling: React.FC<ClothingHandlingProps> = ({
  handlingText,
  materialText,
  fittingText,
}) => {
  return (
    <div className="p-4 mt-10">
      <div className="rounded-lg">
        <div className="flex flex-col text-center mx-auto justify-between md:flex-row px-4 gap-4">
          <div className="flex flex-col mb-4 md:mb-0 w-full max-w-md mx-auto">
            <div className="text-white text-xl mt-4 md:mt-10 p-5 mx-auto rounded-lg border border-black w-full bg-green-600">
              Material
            </div>
            <div className="text-black text-md mt-2 bg-white p-4 rounded-lg">
              <div className="text-left">{materialText}</div>
            </div>
          </div>
          <div className="flex flex-col mb-4 md:mb-0 w-full max-w-md mx-auto">
            <div className="text-white text-xl mt-4 md:mt-10 p-5 mx-auto rounded-lg border border-black w-full bg-green-600">
              Handling
            </div>
            <div className="text-black text-md bg-white p-4 rounded-lg">
              <div className="text-left">
                <div className="font-bold text-sm">
                *These tips are recommendations
                </div>
                <ul className="list-disc list-inside mt-2">
                  {handlingText.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4 md:mb-0 w-full max-w-md mx-auto">
            <div className="text-white text-xl mt-4 md:mt-10 p-5 mx-auto rounded-lg border border-black w-full bg-green-600">
              Fitting
            </div>
            <div className="text-black text-md bg-white p-4 rounded-lg">
                <div className="text-left mb-2 font-bold text-sm">
                *These tips are recommendations
                </div>
              <div className="text-left">{fittingText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingHandling;
