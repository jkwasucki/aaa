import React from 'react'
import { TfiMinus } from 'react-icons/tfi'

export default function Footer() {
  return (
    <div className='w-screen h-full bottom-0  inset-0 overflow-hidden lg:py-[100px] '>
        <div className='flex flex-col items-center gap-12'>
          
            <div className='lg:w-full lg:h-full lg:flex lg:justify-between justify-center items-center mx-auto text-center lg:items-start lg:px-[200px]'>
            <div className='text-center mr-auto'>
				<h1 className='text-[50px]'>Bronisław Kurkus</h1>
				<p className='text-3xl' style={{ fontFamily: "'Brush Script MT', cursive" }}>Artystyczna Pracownia Obuwia</p>
		    </div>
            <div className='flex mr-auto'>
            <div className='flex flex-col text-center items-center lg:items-start lg:mr-[200px] mt-12 lg:mt-0'>
                <p className='text-3xl pb-2'>Kontakt</p>
                <p className='text-xl'>
                   ul. Złota 73
                </p>
                <TfiMinus/>
                <p className='text-xl'>
                        00-819 Warszawa Wola
                </p>
                <TfiMinus/>
                <p className='text-xl'>
                    tel. 603 910 555
                </p>
                <TfiMinus/>
            </div>
            <div className='flex flex-col mt-12 lg:mt-0 mb-12 lg:mb-0 lg:text-start'>
                <h1 className='text-3xl pb-2'>Godziny otwarcia</h1>
                <div className='flex gap-12 justify-center text-start'>
                    <div className='flex flex-col text-xl'>
                        <p>Poniedziałek</p>
                        <p>Wtorek</p>
                        <p>Środa</p>
                        <p>Czwartek</p>
                        <p>Piątek</p>
                        <p>Sobota</p>
                        <p>Niedziela</p>
                    </div>
                    <div className='flex flex-col text-xl'>
                        <p>10:00 - 17:00</p>
                        <p>10:00 - 17:00</p>
                        <p>10:00 - 17:00</p>
                        <p>10:00 - 17:00</p>
                        <p>10:00 - 17:00</p>
                        <p>nieczynne</p>
                        <p>nieczynne</p>
                    </div>
            </div>
            </div>
            </div>
           
            
        </div>
        <p className='text-xl'>*Ze względu na różnego typu współprace z instytucjami artystycznymi godziny otwarcia nie zawsze są takie jak podane wyżej, dlatego najlepiej skontaktować się telefonicznie i umówić na konkretny termin.</p>
        </div>
        
    </div>
  )
}
