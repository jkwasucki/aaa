import React from 'react';
import Image from 'next/image';
import heroImage from '../public/1.jpg'; // Path to your image in the public directory

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh]">
      <div className="absolute inset-0 w-full overflow-hidden">
        <Image
          src={heroImage} // Path to your image in the public directory
          alt="Hero Image"
          layout="fill" // Fill the entire parent container
          objectFit="cover" // Cover the container while maintaining aspect ratio
          quality={100} // Image quality (1-100)
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="lg:text-[80px] text-[50px] text-white">{"„Od dzisiaj buty są zwierciadłem duszy”"}</h1>
        <p className="text-2xl text-white"></p>
      </div>
    </div>
  );
}