import React from 'react';

export function Footer() {

    return (
        <>
            <div className=''>
                <div className="main-footer mx-auto flex flex-row py-12 px-6 m-auto text-sm gap-6 text-sm">

                    <div className='flex flex-row justify-center gap-2'>
                        <div className='ring-1 ring-gray-200 h-8 w-8 rounded-sm flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]"><path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path><path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path></svg>
                        </div>
                        <p className='text-sm text-black cursor-pointer flex justify-center pt-1'>ACME STORE</p>
                    </div>
                    <div>
                        <ul>
                            <li><a className='block text-black underline-offset-4 p-2 hover:underline' href="/">Home</a></li>
                            <li><a className='block text-gray-500 hover:text-black underline-offset-4 p-2 hover:underline' href="/about">About</a></li>
                            <li><a className='block text-gray-500 hover:text-black underline-offset-4 p-2 hover:underline' href="/terms">Terms & Conditions</a></li>
                            <li><a className='block text-gray-500 hover:text-black underline-offset-4 p-2 hover:underline' href="/shipping">Shipping & Return Policy</a></li>
                            <li><a className='block text-gray-500 hover:text-black underline-offset-4 p-2 hover:underline' href="/privacy">Privacy Policy</a></li>
                            <li><a className='block text-gray-500 hover:text-black underline-offset-4 p-2 hover:underline' href="/faq" >FAQ</a></li>
                        </ul>
                    </div>

                    <div className='ml-auto h-10 w-30'>
                        <div className='flex flex-row text-sm border-[1px] rounded-lg items-center justify-center'> 
                            <span className=' px-3 border-r-[1px] '><i className="ri-triangle-fill"> </i></span>
                            <p className='font-sm px-3 ' >Deploy</p>
                        </div>
                    </div>

                </div>

                <div className="sub-footer text-gray-500  border-t border-gray-300 py-6 px-4">
                    <div className='flex flex-col  items-center text-sm md:flex-row'>
                        <p><i className="ri-copyright-line"> </i> 2023-2025 ACME, Inc. All Right reserved.</p>
                        <p className='px-4 text-gray-500'> | </p>
                        <p><a href="" className='md:ml-auto '>View the source</a></p>
                        <p className='ml-auto font-semibold text-black'><a href="">Created by <span><i className="ri-triangle-fill"></i></span> vercel</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};