"use client"

import { Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaSrc: string;
  dark?: boolean;
}

const Phone: React.FC<PhoneProps> = ({ mediaSrc, className, dark = false, ...props }) => {
  const isVideo = mediaSrc.endsWith(".mp4");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mediaElement = document.createElement(isVideo ? "video" : "img") as HTMLVideoElement | HTMLImageElement;
    mediaElement.src = mediaSrc;

    const handleLoad = () => setIsLoading(false);
    const handleError = () => setIsLoading(false);

    if (isVideo) {
      mediaElement.addEventListener("loadeddata", handleLoad);
      mediaElement.addEventListener("error", handleError);
      const videoElement = mediaElement as HTMLVideoElement;
      videoElement.preload = "auto";
      videoElement.muted = true;
      videoElement.loop = true;
      videoElement.autoplay = true;
    } else {
      mediaElement.addEventListener("load", handleLoad);
      mediaElement.addEventListener("error", handleError);
    }

    return () => {
      if (isVideo) {
        mediaElement.removeEventListener("loadeddata", handleLoad);
        mediaElement.removeEventListener("error", handleError);
      } else {
        mediaElement.removeEventListener("load", handleLoad);
        mediaElement.removeEventListener("error", handleError);
      }
    };
  }, [mediaSrc, isVideo]);

  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
      <img
        src="/front-iphone.png"
        className="pointer-events-none z-50 select-none w-full h-full"
        alt="phone frame"
      />

      <div className="absolute inset-0 flex items-center -z-10 justify-center">
        {isLoading ? (
          <Loader2 className="animate-spin h-12 w-12 text-gray-500" />
        ) : isVideo ? (
          <video className="object-fill w-full h-full " src={mediaSrc} autoPlay loop muted />
        ) : (
          <img className="object-cover w-full h-full" src={mediaSrc} alt="overlaying media" />
        )}
      </div>
    </div>
  );
};

export default Phone;
