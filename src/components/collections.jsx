import React from 'react';

export const Collections = () => {

    return (
        <>
            <aside className='h-full w-[12%] hidden md:inline'> 
                <p className='text-xs text-gray-500 leading-6'>Collections</p>
                <ul className='text-[.93rem] leading-7 text-black'>
                    <li className='underline underline-offset-4 cursor-none disabled'><a href="/search">All</a></li>
                    <li className='hover:underline underline-offset-4'><a href="/search/mens">Men's Clothing</a></li>
                    <li className='hover:underline underline-offset-4'><a href="/search/womens">Women's Clothing</a></li>
                    <li className='hover:underline underline-offset-4'><a href="/search/jewelery">Jewelery</a></li>
                    <li className='hover:underline underline-offset-4'><a href="/search/electronics">Electronics</a></li>
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
        </>
    );
};