import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  mediaSrc: string;
  dark?: boolean;
}

const Phone = ({ mediaSrc, className, dark = false, ...props }: PhoneProps) => {
  const isVideo = mediaSrc.endsWith('.mp4');
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
          />
        ) : (
          <img
            className="object-cover w-full h-full"
            src={mediaSrc}
            alt="overlaying media"
          />
        )}
      </div>
    </div>
  );
};

export default Phone;
