import React from 'react'

function Footer() {
  return (
    <div>
      
      <div className=" footer_section mx-auto text-start p-8 pt-12  bg-gray-900 ">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12">
                       <div>
                       <h3  className='text-white'>Managed by</h3>
                        
                        <h1  className='text-white'> Company Logo</h1>


                       </div>
                       <div className='text-black pt-4 pb-4'>
                       <a href="#" > <i className="fab fa-youtube rounded-full p-2 bg-gray-500 hover:bg-white"></i> </a>
                       <a href="#" > <i className="fab fa-twitter rounded-full p-2 bg-gray-500 hover:bg-white"></i> </a>
                       <a href="#" > <i className="fab fa-discord rounded-full p-2 bg-gray-500 hover:bg-white"></i> </a>
                       <a href="#" > <i className="fab fa-reddit rounded-full p-2 bg-gray-500 hover:bg-white"></i> </a>
                       <a href="#" > <i className="fab fa-github rounded-full p-2 bg-gray-500 hover:bg-white"></i> </a>
                       <a href="#" > <i className="fab fa-telegram rounded-full p-2 bg-gray-500 hover:bg-white"></i> </a>
                       
                       </div>
                       <p className='pt-3 text-gray-400'>© 2023 Solana Foundation. All rights reserved.</p>
                      
                    </div>
                    <div className="w-full md:w-2/12 lg:w-2/12 xl:w-2/12">
                     <h1 className='text-white'> <b>SOLANA  </b></h1>
                      <div>
                    
                     <ul className='space-y-4 pt-4' >
                        <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Grants</a></li>
                        <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Break Solana</a></li>
                        <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Media Kit</a></li>
                        <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Careers</a></li>
                        <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Disclaimer</a></li>
                        <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Privacy Policy</a></li>
                        
                      </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-2/12 lg:w-2/12 xl:w-2/12">
                     <h1 className='text-white'><b>GET CONNECTED </b></h1>
                     <div>
                        <ul className='space-y-4 pt-4' >
                          <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Ecosystem</a></li>
                          <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Blog</a></li>
                          <li className='text-gray-400  ' > <a className='hover:text-white' href='Grants'>Newsletter</a></li>
                          
                        </ul>
                     </div>
                    </div>
                    <div className="w-full md:w-1/12 lg:w-1/12 xl:w-1/12">
                    {/* <i className="fas fa-globe text-gray-400"></i>
                    <h1 className='text-gray-400'><b>EN </b></h1> */}
                   <div className="relative inline-block text-left group">
                      <button className="  hover:bg-secondary-dark focus:outline-none focus:ring focus:ring-0" type="button">
                      <div className='flex items-center'>
                      <i className="fas fa-globe text-gray-400"></i>
                      <h1 className='text-gray-400'><b style={{ marginTop: "-2px" }}>EN</b></h1>
                      <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                    </button>        
                      <ul className="origin-top-right absolute left-0 mt-0 w-38  shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        <li> 
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium"> English</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium">हिन्दी</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium">Français</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium">Ελληνικά</a>
                        </li>
                        
                        
                        
                      </ul>
                    </div>


                    </div>
                </div>
                </div>    


    </div>
  )
}

export default Footer;
