import React from 'react'
import Image from 'next/image';
import { Solanapay, Decaf, Claynosaurz, Bladerite,Growline3,Growline4 } from '@/image';

function build() {
  return (
    <>
      <div>

            {/* build in growth */}
             <div className='pt-8 p-8 flex justify-between bg-black'>
                    <div className='text-white'>
                        <b className='text-start pl-4' style={{ fontSize: "2.5rem" }}>Build for growth.</b>
                      </div>
                       <div>
                        <ul className="flex items-center gap-4 mt-4 ">
                        
                        <a href="#" className='text-white bg-gray-700 p-2 rounded-lg border border-purple-900 hover:bg-gray-500'><li><b>Payments</b></li> </a>
                        <a href="#" className='text-white bg-gray-700 p-2 rounded-lg border border-purple-900 hover:bg-gray-500'><li><b>Gaming</b></li> </a>
                        <a href="#" className='text-white bg-gray-700 p-2 rounded-lg border border-purple-900 hover:bg-gray-500'><li><b>NFTs</b></li> </a>
                        <a href="#" className='text-white bg-gray-700 p-2 rounded-lg border border-purple-900 hover:bg-gray-500'><li><b>DeFi</b></li> </a>
                        <a href="#" className='text-white bg-gray-700 p-2 rounded-lg border border-purple-900 hover:bg-gray-500'><li><b>DAOs</b></li> </a>
                        
                        </ul>   
                 </div>
           </div>


            <div className=" mx-auto text-start p-8 bg-black">
                <div className="flex flex-wrap  bg-gray-600 rounded-lg">
                    <div className="w-full md:w-1/2 bg-gray-400">
                    <Image src={Solanapay} alt="company logo" width={600} height={500} />
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-600 m-auto">
                      <div className='p-8 text-white'>
                        <p>Solana Pay is now available to millions of businesses as an approved 
                            app integration on Shopify. Solana Pay is built for immediate USDC transactions,
                             fees that are fractions of a penny, and a net-zero environmental impact.</p>
                     
                      <div className='mt-6 text-2xl '> <a href="#" className='text-purple-900  hover:text-blue-600'> <b>Learn more about Payments on Solana </b></a> </div>
                      </div>
                    </div>
                </div>
                </div>


                  <div className="pl-8 pr-8 pb-4 mx-auto text-center bg-black">
                        <div className="flex flex-wrap rounded-lg bg-gray-600 p-4">
                            <div className="w-full md:w-1/4 ">
                            <Image src={Decaf} alt="company logo" className=' m-auto ' width={100} height={50} />
                   
                            </div>
                            <div className="w-full md:w-1/4">
                            <Image src={Claynosaurz} alt="company logo" className=' m-auto ' width={100} height={50} />
                   
                            </div>
                            <div className="w-full md:w-1/4">
                            <Image src={Bladerite} alt="company logo" className=' m-auto ' width={100} height={50} />
                   
                            </div>
                            <div className="w-full md:w-1/4">
                            <Image src={Decaf} alt="company logo" className=' m-auto ' width={100} height={50} />
                   
                            </div>

                        </div>
                        </div>


              {/* Join a thriving community */}
       
        <div className="relative flex flex-shrink-0 text-center items-center">
          <Image src={Growline4} alt="company logo" width={1600} height={500} style={{height:"500px"}} />

          <div className=" p-60 absolute top-1/2 left-0 transform -translate-y-1/2">
            <b className='text-white' style={{fontSize:"2rem"}}>It's time to join the thousands of creators, artists, and developers using Solana.</b>
         
           <div className='mt-12'>
           <a href="#" className="btn p-3 rounded-full hover:text-black hover:bg-white transition-transform transform hover:-translate-y-2">START BUILDING</a>
           </div>
          </div>         
        </div>



      </div>
    </>
  )
}

export default build;
