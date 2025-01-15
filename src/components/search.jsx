import React from 'react'

export const Search = () => {
  return (
    <>
        <div className= 'px-4 gap-6 flex mx-auto bg-[#fafafa]'>

            <aside className='h-full w-[12%] '> 
                <p className='text-xs text-gray-500 leading-6'>Collections</p>
                <ul className='text-[.93rem] leading-7 text-black'>
                    <li className='underline underline-offset-4 cursor-none'><a href="">All</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Bags</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Drinkware</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Electronics</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Footwear</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Headware</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Hoodies</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Jackets</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Kids</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Pets</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Shirts</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Stickers</a></li>
                </ul>
            </aside>


            <div className='h-full w-[76%]  rounded-lg '> 
                <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/slipon.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Slip On Shoes</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$45.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/shirt1.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Circles T-Shirt</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$20.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/bag1.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Drawstring Bag</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$12.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/keyboard.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Keyboard</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$150.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/shirt2.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Prism T-Shirt</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$25.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/t-shirt.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme T-Shirt</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$20.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/sticker.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Sticker</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$4.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/rainbow.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Rainbow Sticker</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$4.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/pacifier.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Pacifier</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$10.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/mug.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Mug</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$15.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/hoodie.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Hoodie</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$50.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/mencap.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Cap</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$20.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/dogsweater.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Dog Sweater</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$20.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/cup.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Cup</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$15.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/hat.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Cowboy Hat</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$160.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/jacket.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Bomber Jacket</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$50.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/baby.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Baby Onesie</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$10.00 USD</p>
						        </div>
                            </a> 
                        </li>
                        <li className='relative boder hover:ring-1 rounded-md bg-white border border-gray-200'> 
                            <a href=""> 
                                <img className='hover:scale-105 duration-300' src="/assets/slipon.png" alt="" /> 
                                <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
							        <h3 className='font-bold text-xs flex items-center'>Acme Slip On Shoes</h3>
							        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>$45.00 USD</p>
						        </div>
                            </a> 
                        </li>
                </ul>
            </div>


            <aside className='h-full w-[12%] '> 
                <p className='text-xs text-gray-500 leading-6'>Sort by</p>
                <ul className='text-[.93rem] leading-7 text-black'>
                    <li className='underline underline-offset-4 cursor-none'><a href="">Relevance</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Trending</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Latest Arrivals</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Price: Low to High</a></li>
                    <li className='hover:underline underline-offset-4'><a href="">Price: High to Low</a></li>
                </ul>
            </aside>
        </div>
    </>
  );
};

