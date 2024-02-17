import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import { Growline1,Font , Keynote,Aws1 ,Googlecloud, Render1 ,Hyperdrive2, Hivemapper1, Gainforest,Asics} from '@/image';


function banner() {
  
const contentStyle = {
  height: '310px',
  color: '#fff',
  margin:"auto",
  textAlign: 'center',
  background: '#1b1622',
};

  return (
    <> 
    <div  className=' bg-black ' style={{ height: '980px', width: '1213px' }}>  
      <div className="relative flex flex-shrink-0 text-center items-center">
          <Image src={Font} alt="company logo" width={1300} height={800} />
          
          <div className="pl-40 pr-40 mt-8 absolute top-1/2 left-0 transform -translate-y-1/2">
            <b className='text-white' style={{fontSize:"4rem"}}>Powerful for developers.
                 Fast for everyone..</b>

            <p className='text-white p-8 '>Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.</p>
         
           <div className='flex mt-8 m-auto text-center gap-4 justify-center'>
           <a href="#" className="btn p-3 rounded-full hover:text-black hover:bg-white ">START BUILDING</a>
           <a href="#" className=" bg-black text-white pl-3 p-3 rounded-full border border-white hover:text-black hover:bg-white ">RED DOCS </a>
          
           </div>

           <div className='mt-12'> 
            <p className='text-blue-500'>POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD</p>
           </div>
          </div>         
        </div>


          {/* carousel slide */}
      <div className='mt-16'>    
       <Carousel autoplay>
        <div className=''>
          {/* slider 1 */}
          <div style={contentStyle} className="container mx-auto text-center rounded-3xl">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12">
                <div className="p-4">
                <div className="flex flex-shrink-0 items-center mt-2 ">
                        <Image
                    src={Hyperdrive2}
                    className="rounded-md"
                    alt="company logo "
                    width={500}
                    height={400}
                    style={{height:"260px"}}
                    />
                        </div>
                </div>
                </div>
                <div className="w-full md:w-6/12  ">
                <div className="p-8 m-auto justify-center align-item-center">
                    <span className="rounded-full bg-green-500 p-2 slidebtn text-black">Solana hackathon</span>
                    <p className='text-white' style={{fontSize:"2rem"}}>Meet the Winner of Hyperdrive Hackathon </p>
                    <p>As announced live on the Breakpoint 2023 stage, the Grand Champion winner out of over 900
                        submissions took advantage of Al to make it easy to interact with the blockchain.</p>    
                      <button className='rounded-full  mt-2  p-2 border border-white text-white hover:bg-white hover:text-black' > SEE THE WINNERS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
           {/* slider 2 */}
        <div style={contentStyle} className="container mx-auto text-center rounded-3xl">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12">
                <div className="p-4">
                <div className="flex flex-shrink-0 items-center mt-2">
                        <Image
                    src={Render1}
                    className="rounded-md"
                    alt="company logo "
                    width={500}
                    height={350}
                    style={{height:"260px"}}
                    />
                        </div>
                </div>
                </div>
                <div className="w-full md:w-6/12  ">
                <div className="p-8 m-auto justify-center align-item-center">
                    <span className="rounded-full bg-green-500 p-2 slidebtn text-black">Breakpoint 2023</span>
                    <p className='text-white' style={{fontSize:"2rem"}}>The Render Network Migrates to Solana </p>
                    <p>The Render Network, the world’s leading decentralized compute network, announced on stage at
                       Breakpoint 2023 that they have successfully upgraded its core infrastructure to Solana.</p>    
                      <button className='rounded-full w-20  mt-2  p-2 border border-white text-white hover:bg-white hover:text-black' > Read</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
           {/* slider 3 */}
        <div style={contentStyle} className="container mx-auto text-center rounded-3xl">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12">
                <div className="p-4">
                <div className="flex flex-shrink-0 items-center mt-2">
                        <Image
                    src={Googlecloud}
                    className="rounded-md"
                    alt="company logo "
                    width={500}
                    height={350}
                    style={{height:"260px"}}
                    />
                        </div>
                </div>
                </div>
                <div className="w-full md:w-6/12  ">
                <div className="p-8 m-auto justify-center align-item-center">
                    <span className="rounded-full bg-green-500 p-2 slidebtn text-black ">Breakpoint 2023</span>
                    <p className='text-white' style={{fontSize:"1.7rem"}}>Solana Blockchain Node Development Blueprints Available on AWS</p>
                    <p>Solana nodes are now available for quick deployment on AWS with the help of infrastructure as code app in AWS Blockchain
                       Node Runners repository.</p>    
                      <button className='rounded-full w-20 mt-2  p-2 border border-white text-white hover:bg-white hover:text-black' > Read</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
           {/* slider 4 */}
        <div style={contentStyle} className="container mx-auto text-center rounded-3xl">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12">
                <div className="p-4">
                <div className="flex flex-shrink-0 items-center mt-2">
                        <Image
                    src={Aws1}
                    className="rounded-md"
                    alt="company logo "
                    width={500}
                    height={350}
                    style={{height:"260px"}}
                    />
                        </div>
                </div>
                </div>
                <div className="w-full md:w-6/12  ">
                <div className="p-8 m-auto justify-center align-item-center">
                    <span className="rounded-full bg-green-500 p-2 slidebtn text-black">Breakpoint 2023</span>
                    <p className='text-white' style={{fontSize:"1.9rem"}}>The Block: “Solana Data Now Live on Google Cloud's BigQuery”</p>
                    <p>Google Cloud BigQuery is a resource that allows anyone to access archival data and analytical insights.</p>    
                      <button className='rounded-full  mt-2  p-2 border border-white text-white hover:bg-white hover:text-black' > SEE THE WINNERS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
           {/* slider 5 */}
        <div style={contentStyle} className="container mx-auto text-center rounded-3xl">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12">
                <div className="p-4">
                <div className="flex flex-shrink-0 items-center mt-2">
                        <Image
                    src={Keynote}
                    className="rounded-md"
                    alt="company logo "
                    width={500}
                    height={350}
                    style={{height:"260px"}}
                    />
                        </div>
                </div>
                </div>
                <div className="w-full md:w-6/12  ">
                <div className="p-8 m-auto justify-center align-item-center">
                    <span className="rounded-full bg-green-500 p-2 slidebtn text-black">Breakpoint 2023</span>
                    <p className='text-white' style={{fontSize:"2rem"}}>Breakpoint Starts With Community Keynote </p>
                    <p>Community luminaries like Solana Labs’ Anatoly Yakovenko, Helius’ Mert Mumtaz, and the Solana Foundation’s Dan
                       Albert look back at 2023, and forward to the rest of Breakpoint.</p>    
                      <button className='rounded-full  mt-2  p-2 border border-white text-white hover:bg-white hover:text-black' > Watch talk</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          </Carousel>
    </div> 


      </div>

     </>
  )
}

export default banner;














