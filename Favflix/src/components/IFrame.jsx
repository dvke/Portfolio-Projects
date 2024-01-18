import React from "react";
import { useIFrame } from "../context/IFrameContext";

const IFrame = () => {
  const { iFrameVisible, iFrameid, hideIFrame } = useIFrame();
  return (
    <>
      {iFrameVisible && (
        <div className="fixed z-[999] top-0 left-0 w-full h-full bg-black/60 flex flex-col gap-8 items-center justify-center">
          <button
            onClick={hideIFrame}
            className="border text-white border-gray-300 py-4 px-6 ml-4"
          >
            Close Trailer
          </button>
          <iframe
            allow="fullscreen;"
            className="lg:w-[800px] aspect-video md:w-[700px] sm:w-[550px] w-[475px]"
            src={`https://www.youtube.com/embed/${iFrameid}`}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default IFrame;
