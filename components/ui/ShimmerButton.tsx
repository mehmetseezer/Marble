import React from "react";

const ShimmerButton = ({ content }: { content: string }) => {
  return (
    <a>
      <button className="h-12 text-sm p-2 lg:p-10 flex rounded animate-shimmer md:text-2xl lg:text-3xl text-stone-700 mt-4 items-center justify-center shadow-lg border-slate-100 bg-[linear-gradient(110deg,#ffffff,45%,#CED2D7,55%,#ffffff)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {content}
      </button>
    </a>
    // Button code
  );
};

export default ShimmerButton;
