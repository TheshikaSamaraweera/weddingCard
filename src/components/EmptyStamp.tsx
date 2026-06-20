"use client";

import { ReactNode } from "react";

interface EmptyStampProps {
  children: ReactNode;
  showPostmark?: boolean;
  className?: string;
}

export default function EmptyStamp({
  children,
  showPostmark = false,
  className = "",
}: EmptyStampProps) {
  return (
    <div className={`relative w-full max-w-[410px] mx-auto min-h-[500px] flex flex-col items-center justify-start p-10 ${className}`}>
      {/* Background Image Template */}
      <img 
        src="/Empty_stamp.png" 
        alt="Stamp Background" 
        className="absolute inset-0 w-full h-full object-fill z-0 drop-shadow-xl" 
      />

      {/* Postmark Stamp (Optional, rendered on top if the image doesn't have it) */}
      {showPostmark && (
        <div className="absolute top-6 right-4 w-20 h-20 opacity-50 pointer-events-none select-none rotate-12 z-10">
          <svg viewBox="0 0 100 100" className="text-[var(--gold)]">
            <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" fill="none" />
            
            {/* Lotus icon in center */}
            <path d="M50,35 Q60,50 50,65 Q40,50 50,35 Z" fill="currentColor" />
            <path d="M50,65 Q35,55 30,45 Q40,50 50,65 Z" fill="currentColor" />
            <path d="M50,65 Q65,55 70,45 Q60,50 50,65 Z" fill="currentColor" />

            {/* Circular Text Path */}
            <defs>
              <path id="textPath" d="M 50, 50 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" />
            </defs>
            <text fontSize="7.5" fontWeight="bold" fill="currentColor" letterSpacing="1.5">
              <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                MUDITHA & MAHELI • 24.08.2025 •
              </textPath>
            </text>
          </svg>
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-20 w-full h-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
