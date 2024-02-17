import React from 'react'

function Header() {
  return (
    <>
     
      <div className="sticky Top top-0  mx-auto text-center bg-black p-5">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 text-white text-start pl-10">
                  <b className='text-2xl'>Company logo </b>
                </div>
                <div className="w-full md:w-1/2">
                <div className="relative inline-block text-left group space-x-6">
                      <button className="" type="button">
                      <div className='flex items-center text-gray-500 hover:text-white'>
                      <p className='text-xl'>Learn</p>
                      <i className="fas fa-chevron-down pl-1 "></i>
                    </div>
                    </button>        
                      <ul className="origin-top-right absolute left-0 mt-0 w-38  shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        {/* <li> 
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium"> English</a>
                        </li> */}
                      </ul>

                      
                      <button className="" type="button">
                      <div className='flex items-center text-gray-500 hover:text-white'>
                      <p className='text-xl'>Build</p>
                      <i className="fas fa-chevron-down pl-1 "></i>
                    </div>
                    </button>        
                      <ul className="origin-top-right absolute left-0 mt-0 w-38  shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        {/* <li> 
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium"> English</a>
                        </li> */}
                      </ul>

                      <button className="" type="button">
                      <div className='flex items-center text-gray-500 hover:text-white'>
                      <p className='text-xl'>Solutions</p>
                      <i className="fas fa-chevron-down pl-1 "></i>
                    </div>
                    </button>        
                      <ul className="origin-top-right absolute left-0 mt-0 w-38  shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        {/* <li> 
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium"> English</a>
                        </li> */}
                      </ul>


                      <button className="" type="button">
                      <div className='flex items-center text-gray-500 hover:text-white'>
                      <p className='text-xl'>Network</p>
                      <i className="fas fa-chevron-down pl-1 "></i>
                    </div>
                    </button>        
                      <ul className="origin-top-right absolute left-0 mt-0 w-38  shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        {/* <li> 
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium"> English</a>
                        </li> */}
                      </ul>


                      <button className="" type="button">
                      <div className='flex items-center text-gray-500 hover:text-white'>
                      <p className='text-xl'>Community</p>
                      <i className="fas fa-chevron-down pl-1 "></i>
                    </div>
                    </button>        
                      <ul className="origin-top-right absolute left-0 mt-0 w-38  shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                        {/* <li> 
                          <a href="#" className="text-gray-500 hover:bg-gray-100 hover:text-black block  py-3 px-2  text-base font-medium"> English</a>
                        </li> */}
                      </ul>
                    </div>

                    

                </div>
              </div>
            </div>
         
  
    </>
  )
}

export default Header;
