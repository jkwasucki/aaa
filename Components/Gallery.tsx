import React, { useState } from 'react';
import Image from 'next/image';
import GImage from './GImage'; // Adjust the import path as needed
import separatorImage from '../public/Linia.png';
const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    '/buty5.jpg',
    '/buty15.jpg',
    '/buty11.jpg',
    '/buty12.jpg',
    '/buty17.jpg',
    '/buty8.jpg',
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className='lg:min-h-screen lg:max-h-screen flex flex-col items-center'>
       <Image src={separatorImage} alt="img" />
       <div className='flex flex-col items-center justify-center mb-6 text-center'>
          <h1 className='text-4xl mt-8 mb-4'>Galeria</h1>
          <p className='text-xl'>W pracowni szewskiej każdy szewc staje się architektem wygody, tworząc obuwie, które staje się domem dla stóp.</p>
       </div>
     
      <div className='grid lg:grid-cols-3 gap-5'>
        {images.map((image, index) => (
          <div key={index} className='relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]'>
            <Image 
              src={image}
              alt={`Gallery ${index}`}
              layout='fill'
              objectFit='cover'
              className='cursor-pointer'
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <GImage 
          imageUrl={images[selectedImageIndex]} 
          onClose={handleClose} 
          onNext={handleNext} 
          onPrev={handlePrev} 
        />
      )}
    </div>
  );
};

export default Gallery;