"use client"
import { cn } from "@/lib/utils";
import { HTMLAttributes, useEffect, useRef } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  mediaSrc: string;
  dark?: boolean;
}

const Phone = ({ mediaSrc, className, dark = false, ...props }: PhoneProps) => {
  const isVideo = mediaSrc.endsWith('.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoElement?.play();
            } else {
              videoElement?.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      if (videoElement) {
        observer.observe(videoElement);
      }

      return () => {
        if (videoElement) {
          observer.unobserve(videoElement);
        }
      };
    } else {
      // Fallback for browsers that do not support IntersectionObserver
      videoElement?.play();
    }
  }, []);

  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="phone frame"
      />

      <div className="absolute -z-10 inset-0">
        {isVideo ? (
          <video
            className="object-cover w-full h-full"
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            ref={videoRef}
          />
        ) : (
          <img
            className="object-cover w-full h-full"
            src={mediaSrc}
            alt="overlaying media"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default Phone;
