import React from 'react'
import Image from 'next/image'
import heroImage from '../public/1.jpg'; // Path to your image in the public directory
import separatorImage from '../public/Linia.png';
export default function Hero2() {
  return (
    
        <div className="lg:min-h-screen flex lg:max-h-screen  flex-col lg:gap-12 lg:py-12">
            <div className='flex flex-col items-center justify-center text-center max-w-[70vw]  gap-5 mx-auto py-12 lg:py-0'>
                  <Image src={separatorImage} alt="img" />
                        <h1 className='text-[30px]'>Kim jesteśmy i co robimy?</h1>
                        <p className='text-[17px] lg:text-[20px]'>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                        </p>
                  </div>
                  <div className="lg:flex px-12 w-full lg:h-[85vh] overflow-hidden grid grid-rows-2 gap-5">
                        <div className="relative flex-1">
                              <Image
                                    src={heroImage} // Path to your first image in the public directory
                                    alt="Hero Image 1"
                                    layout="responsive" // Fill the entire parent container
                                    objectFit="cover" // Cover the container while maintaining aspect ratio
                                    quality={100} // Image quality (1-100)
                              />
                        </div>
                        <div className="relative flex-1">
                              <Image
                                    src={heroImage} // Path to your second image in the public directory
                                    alt="Hero Image 2"
                                    layout="responsive" // Fill the entire parent container
                                    objectFit="cover" // Cover the container while maintaining aspect ratio
                                    quality={100} // Image quality (1-100)
                              />
                        </div>
                  </div>
            </div>
      )
}
