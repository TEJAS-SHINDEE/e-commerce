import React from 'react'
import { Scrollimage } from './scrollImage.jsx';
import { useLocation } from 'react-router-dom';

export const Product = () => {

	const location = useLocation();
	console.log('product page',location);
	const product = location.state?.item;
	console.log(product);
	return (

		<>
			<div className='h-[40rem]  mx-4 bg-white rounded-xl border border-gray-300 flex flex-row'>
				<div className="left h-full w-[70%] flex items-center ">
					<img className='h-[80%] w-full object-contain  ' src={product.image} alt="" />
				</div>
				<div className="right h-full w-[40%] flex flex-col justify-evenly">
					<div className=''>
						<h3 className='text-4xl font-semibold p-8 '>{product.title}</h3>
						<span className='bg-blue-600 p-2 rounded-full text-lg text-white ml-8'>$ {product.price} USD</span>
					</div>
					<div className=''><br />
						<p className='font-semibold text-lg'>Description : </p>
						<article className='p-4 '>{product.decription}</article>
					</div>
					<div className=''>
					<form action="">
						<label htmlFor="color">Color</label><br /><br />
						<div className=' flex gap-4'>
							<button className='border focus:ring-blue-600 ring-1 ring-gray-200 bg-neutral-100 rounded-xl hover:ring-blue-600 h-8 w-14' type='button' id='color'>Black</button>
							<button className='border focus:ring-blue-600 ring-1 ring-gray-200 bg-neutral-100 rounded-xl hover:ring-blue-600 h-8 w-14' type='button' id='color'>Blue</button>
							<button className='border focus:ring-blue-600 ring-1 ring-gray-200 bg-neutral-100 rounded-xl hover:ring-blue-600 h-8 w-14' type='button' id='color'>white</button>
						</div>
							<br />
						<label htmlFor="size">Size</label><br /><br />
						<div className=' flex gap-4'>
						<button className='border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14' type='button' id='size'>XS</button>
						<button className='border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14' type='button' id='size'>S</button>
						<button className='border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14' type='button' id='size'>M</button>
						<button className='border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14' type='button' id='size'>L</button>
						<button className='border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14' type='button' id='size'>XL</button>
						<button className='border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14' type='button' id='size'>XXL</button>
						<button className='border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14' type='button' id='size'>XXXL</button> 
						
						</div><br /><br />
						<button className='bg-blue-600 h-16 w-full text-white font-semibold rounded-2xl' type='submit' id='size'><i class="ri-add-fill"></i> Add to Cart</button>
					</form>
					</div>
				</div>
			</div>

			<h2 className='text-2xl font-bold pl-4 m-4'>Related Products </h2>
			{/* <div className='scroll-items h-48 overflow-x-auto flex gap-4 m-4 pb-4'>
				{obj.slice(7, 21).map((item) => (
					<Scrollimage key={item?.id} obj={item} />
				))}
			</div> */}


		</>
	)
}
