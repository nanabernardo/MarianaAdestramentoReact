import React from "react";

const ResponsiveImage = ({ src, alt, aspect = "16/9", className = "" }) => {
  return (
    <div
      className={`${className} overflow-hidden`}
      style={{ aspectRatio: aspect }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover block"
      />
    </div>
  );
};

export default ResponsiveImage;
