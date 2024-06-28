import React, { useRef } from 'react';

interface NavbarProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToRef }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
   
      <div className="flex w-full items-center justify-center px-12 py-6 ">
        <div className='text-center ml-auto pl-[400px]'>
				<h1 className='text-[50px]'>Bronisław Kurkus</h1>
				<p className='text-3xl' style={{ fontFamily: "'Brush Script MT', cursive" }}>Artystyczna Pracownia Obuwia</p>
		</div>
        <div className="flex ml-auto lg:flex-row  lg:justify-center lg:justify-start text-[30px] text-black gap-7 lg:items-center">
          <a href="#about" onClick={() => scrollToRef(aboutRef)} className="text-black hover:text-gray-900">O nas</a>
          <a href="#gallery" onClick={() => scrollToRef(galleryRef)} className="text-black hover:text-gray-900">Galeria</a>
          <a href="#contact" onClick={() => scrollToRef(contactRef)} className="text-black hover:text-gray-900">Kontakt</a>
        </div>
      </div>
    
  );
}

export default Navbar;