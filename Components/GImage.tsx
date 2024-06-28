import React, { useEffect, useState, ChangeEvent } from 'react';
import Image from 'next/image';

interface GImageProps {
  imageUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GImage: React.FC<GImageProps> = ({ imageUrl, onClose, onNext, onPrev }) => {

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75'>
      <div className='relative w-1/2 h-3/4 max-w-screen max-h-screen bg-white p-4 rounded shadow-lg'>
        <button onClick={onClose} className='absolute z-10 top-2 right-2 text-white bg-black rounded-full px-2'>
          &times;
        </button>
        <button onClick={onPrev} className='absolute z-10 top-1/2 left-2 transform -translate-y-1/2 text-white bg-black rounded-full px-2'>
          &#8249;
        </button>
        <button onClick={onNext} className='absolute z-10 top-1/2 right-2 transform -translate-y-1/2 text-white bg-black rounded-full px-2'>
          &#8250;
        </button>
        <Image 
          src={imageUrl} 
          alt="Gallery" 
          layout="fill"
          objectFit="cover"
          className='rounded shadow-lg'
        />
        <div className='mt-4'>
          <h3 className='text-xl font-semibold'>Comments</h3>
        </div>
      </div>
    </div>
  );
};

export default GImage;