import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
    const link = 'open';
    return (

        <>
            <li className='relative boder hover:ring-1  rounded-md bg-white border border-gray-200'>
                <Link to={`/product/${item?.id}}`} state={{ item }} key={item?.id}>
                    <img className='hover:scale-105 duration-300 h-[50%] w-[80%] self-center mx-auto pt-8' src={item?.image} alt="" />
                    <div className='absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200'>
                        <h3 className='font-bold text-xs flex items-center'>{item?.title}</h3>
                        <p className='flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center'>${item?.price} USD</p>
                    </div>
                </Link>
            </li>
        </>
    );
};