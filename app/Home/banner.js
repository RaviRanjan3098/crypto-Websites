'use client'
import React from 'react'
import Image from 'next/image';
import { Growline1 ,Growline2, hyperdrive1 , Helium, Helium1, Hivemapper1, Gainforest,Asics} from '@/image';

function banner2() {
  return (
      <>
        <div className="relative flex flex-shrink-0 items-center ">
          <Image src={Growline2} alt="company logo" width={1215} height={1200} />

          {/* First div */}
          <div className="absolute inset-0 mx-auto pt-8">
            <div className="flex h-full">
              <div className="w-1/2 flex text-start p-12 ">
                <b className='text-white' style={{ fontSize: "3rem" }}>Join a community of millions.</b>
              </div>
              <div className="w-1/2 ml-24 text-white ">
                <p className='millionbtn' style={{ fontSize: "5.5rem" }}>11.5M+</p>
                <p>ACTIVE ACCOUNTS</p>
                <p className='millionbtn1' style={{ fontSize: "5.5rem" }}>21.9M</p>
                <p>NFTS MINTED</p>
                <p className='dollarbtn' style={{ fontSize: "5.5rem" }}>$0.00025</p>
                <p>AVERAGE COST PER TRANSACTION</p>
              </div>
            </div>

          </div>

          {/* Second div */}
        
                <div className="absolute top-1/2 left-0  inset-0 pt-12 text-white m-8 " >
                      <div className="flex h-full gap-6">
                        <div className="w-full md:w-1/3 text-start pl-12">
                        <b className='text-white' style={{fontSize:"2.5rem"}}>Made for <br /> mass adoption.</b>
                        <li className='text-white'>LIVE DATA</li>
                        </div>
                        <div className="w-full md:w-1/3 pl-6 pr-16 mr-6  mt-4 sty">
                        <b className='text-white mt-2' style={{ fontSize: "1.5rem" }}><span className='dollarbtn'> | </span> Fast</b>
                        <p className='text-gray-300' >Don’t keep your users waiting. Solana has block times of 400 milliseconds
                        — and as hardware gets faster, so will the network.</p>

                        <p className='text-white mt-8' style={{ fontSize: "1.5rem" }}><span className='dollarbtn '>.</span> 4,545</p>
                        <p className='text-gray-300'>TRANSACTIONS PER SECOND</p>

                        <b className='text-white mt-4' style={{ fontSize: "1.5rem" }}><span className='millionbtn'>|</span> Scalable</b>
                        <p className='text-gray-300' >Get big, quick. Solana is made to handle thousands of transactions per second, 
                          and fees for both developers and users remain less than $0.0025.</p>
                          
                          

                        </div>
                        <div className="w-full md:w-1/3 pl-6 pr-8  mt-[-24px] sty">
                        <b className='text-white' style={{ fontSize: "1.5rem" }}><span className='borderbtn'> | </span> Decentralized</b>
                        <p className='text-gray-300' >The Solana network is validated by thousands of nodes that operate independently of each other, 
                          ensuring your data remains secure and censorship resistant.</p>

                        <p className='text-white' style={{ fontSize: "1.5rem" }}><span className='dollarbtn '>.</span>1,934</p>
                        <p className='text-gray-300'>VALIDATOR NODES</p>

                        <b className='text-white ' style={{ fontSize: "1.5rem" }}><span className='dollarbtn'> | </span> Energy Efficient</b>
                        <p className='text-gray-300'>Solana’s proof of stake network and other innovations minimize its impact on the 
                        <span className='text-green-900'>environment.</span>
                          Each Solana transaction uses about the same energy as a few Google searches.</p>

                          <p className='text-white' style={{ fontSize: "1.5rem" }}>0%</p>
                          <p className='text-gray-300'>NET CARBON IMPACT</p>
                          
                        </div>
                      </div>
                    </div>
        </div>
 

        {/* Case Studies section  */}
        <div className='bg-black'>
          <div className='pt-8 pb-4 flex justify-between'>
            <div>
              <b className='text-start text-white pl-8' style={{ fontSize: "2.5rem" }}>Case Studies</b>
            </div>
            <div>
              <ul className="flex items-center gap-4 mt-4 mr-12 text-white hover:text-blue-500">
                <button className=' bg-black text-white hover:text-black hover:bg-white rounded-full border border-pink p-2'>GO TO CASE STUDIES</button>
              </ul>
            </div>
          </div>

          <div className="mx-auto text-start rounded-lg pl-10 pr-10 pt-10 ">
              <div className="flex flex-wrap  bg-gray-600 hover:bg-purple-600 rounded-lg">
                <div className="w-full md:w-1/2 ">
                <Image src={Helium1} alt="company logo" className='rounded-l-lg' width={1215} height={1200} />

                </div>
                <div className="w-full md:w-1/2   m-auto justify-center align-item-center ">
                  <div className='p-12'>
                  <b style={{fontSize:"2rem"}} className="text-white">Helium brings real-world 5G networks on Solana</b>
                  </div>
                 
                  
                </div>
              </div>
            </div>




            <div className="mx-auto text-start pl-10 pr-10 pb-10 pt-6 text-white">
                <div className="flex h-full gap-8 ">
                  <div className="w-full md:w-1/3 bg-gray-600 hover:bg-purple-600 rounded-lg">
                   <div>
                   <Image src={Gainforest} alt="company logo" className='rounded-t-lg'  width={400} height={200} /> 
                     <div className='pt-6 p-4 flex justify-between'><div>
                          <b className='text-start' style={{ fontSize: "1.5rem" }}>GainForest brings transparency to climate preservation efforts</b>
                            </div>
                             <div>
                              <ul className="flex items-center gap-4  text-white">
                              <li><i className="fa fa-arrow-circle-right"></i></li>
                            </ul>
                            </div>                                
                    </div>
                   </div>
                  </div>
                  <div className="w-full md:w-1/3 bg-gray-600 hover:bg-purple-600 rounded-lg">
                   <Image src={Hivemapper1} alt="company logo" className='rounded-t-lg' width={400} height={200} />
                       <div className='pt-6 p-4 flex justify-between'><div>
                          <b className='text-start' style={{ fontSize: "1.5rem" }}>Hivemapper <br /> decentralizes mapping with better real-time 
                        data and community incentives</b>
                            </div>
                             <div>
                              <ul className="flex items-center gap-4  text-white">
                              <li><i className="fa fa-arrow-circle-right"></i></li>
                            </ul>
                            </div>                                
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 bg-gray-600 hover:bg-purple-600 rounded-lg ">
                   <Image src={Asics} alt="company logo" className='rounded-t-lg' width={400} height={200} />                 
                    <div className='pt-6 p-4 flex justify-between'><div>
                          <b className='text-start' style={{ fontSize: "1.5rem" }}>ASICS builds loyalty program with Solana Pay</b>
                            </div>
                             <div>
                              <ul className="flex items-center gap-4  text-white">
                              <li><i className="fa fa-arrow-circle-right"></i></li>
                            </ul>
                            </div>                                
                    </div>
                  </div>
                </div>
              </div>


      </div>






    </>
  )
}

export default banner2;
