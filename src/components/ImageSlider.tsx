import React from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="slider">
      <div className="slide-track">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full slide-img mt-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
