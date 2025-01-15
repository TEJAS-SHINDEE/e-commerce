import React from 'react'

export const Scrollimage = ({obj} ) => {
    console.log("item ");
    return (

        <div className='relative h-full w-96 flex-shrink-0 pb-4 bg-white border border-gray-200 rounded-xl hover:ring-1 hover:border-blue-400'>
            <a className='' href="/">
                <img className='relative h-full w-full object-contain hover:scale-105 duration-300' src={obj?.image} alt="" />
            </a>
            <span className=' absolute bottom-2 left-2 gap-2 h-[40px] w-[200px] bg-white p-2 flex felx-row justify-around rounded-full border border-gray-200'>
                <h3 className='font-semibold text-sm'>{obj?.title}</h3>
                <p className='flex-none h-full bg-blue-600 rounded-full p-1 text-sm text-white flex items-center font-semibold'>{obj?.price} USD</p>
            </span>
        </div>
    );
};

