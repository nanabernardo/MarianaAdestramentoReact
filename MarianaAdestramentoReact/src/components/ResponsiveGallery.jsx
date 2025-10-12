import React from "react";
import ResponsiveImage from "./ResponsiveImage";

const ResponsiveGallery = ({ images }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {images.map((image, index) => (
        <div key={index} className="w-full max-w-[250px]">
          <ResponsiveImage
            src={image.src}
            alt={image.alt}
            aspect="1/1"
            className="rounded-xl shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ResponsiveGallery;
