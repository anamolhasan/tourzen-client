import React, { useState } from "react";

import img1 from "../../assets/tour01.jpg";
import img2 from "../../assets/tour02.jpg";
import img3 from "../../assets/tour03.jpg";
import img4 from "../../assets/tour04.jpg";
import img5 from "../../assets/tour05.jpg";
import img6 from "../../assets/tour06.jpg";

const ImageGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">🏞 Tour Highlights</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                setCurrentIndex(idx);
                setIsOpen(true);
              }}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-gray-500/80 bg-opacity-20 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <button
              onClick={e => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-24 text-white text-4xl font-bold px-4 py-2 hover:text-gray-400 select-none border "
              aria-label="Previous Image"
            >
              ‹
            </button>

            <img
              src={images[currentIndex]}
              alt={`Large view ${currentIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              onClick={e => e.stopPropagation()}
            />

            <button
              onClick={e => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-24 text-white text-4xl font-bold px-4 py-2 hover:text-gray-400 select-none border"
              aria-label="Next Image"
            >
              ›
            </button>

            <button
              onClick={e => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-4 right-24 text-white text-3xl font-bold p-1 hover:text-gray-400"
              aria-label="Close Lightbox"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
