import React from "react";
import { useState, useEffect } from "react";
import { Scrollimage } from "./scrollImage.jsx";
import { Link } from "react-router-dom";
import { Cart } from "./cart.jsx";

export function Home({ obj, cart }) {
	// const divImages = data.map((item)=>(
	// 	<Scrollimage obj={item} key={item.id}/>
	// ));   //working

	return (
		<>
			{/* <div className='scroll-items h-48 overflow-x-auto flex gap-4 m-4 pb-4'>
				{data.slice(4,15).map((item)=>(
					<Scrollimage obj={item}  />
				))}
				{divImages}
			</div> */}

			<section className="mx-auto bg-[#fafafa]">
				<div className=" fixed-items md:grid md:grid-cols-6 md:grid-rows-2 w-[96%] mx-auto gap-4 h-96 ">
					{obj.slice(1, 2).map((item) => (
						<div
							key={item?.id}
							className="relative left bg-white col-span-4 row-span-2 hover:ring-1 rounded-2xl border border-gray-200"
						>
							<Link
								to={`/product/${item?.id}}`}
								state={{ item, cart }}
								key={item?.id}
							>
								<img
									className=" h-[70%] pt-6 w-[70%] mx-auto my-auto object-contain hover:scale-105 duration-300"
									src={item?.image}
									alt=""
								/>
								<div className="absolute gap-2 bottom-2 left-4 h-[40px] bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200">
									<h3 className="font-semibold text-sm bg-[#fafafa] text-pretty">
										{item?.title}
									</h3>
									<p className="flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center">
										${item?.price} USD
									</p>
								</div>
							</Link>
						</div>
					))}

					{obj.slice(2, 3).map((item) => (
						<div
							key={item?.id}
							className="relative bg-white md:col-span-2 md:row-span-1 hover:ease-in-out hover:ring-1 rounded-2xl border border-gray-200"
						>
							<Link
								to={`/product/${item?.id}}`}
								state={{ item, cart }}
								key={item?.id}
							>
								<img
									className="h-[90%] w-[90%] pt-6 object-contain hover:scale-105 duration-300"
									src={item?.image}
									alt=""
								/>
								<div className="absolute gap-2 bottom-2 left-4  h-[40px] bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200">
									<h3 className="font-semibold text-sm bg-[#fafafa]">
										{item?.title}
									</h3>
									<p className="flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center">
										${item?.price} USD
									</p>
								</div>
							</Link>
						</div>
					))}

					{obj.slice(3, 4).map((item) => (
						<div
							key={item?.id}
							className="relative bg-white md:col-span-2 md:row-span-1  hover:ease-in-out hover:ring-1 rounded-2xl border border-gray-200 "
						>
							<Link
								to={`/product/${item?.id}}`}
								state={{ item, cart }}
								key={item?.id}
							>
								<img
									className="h-[90%] w-[90%] pt-6 object-contain hover:scale-105 duration-300"
									src={item?.image}
									alt=""
								/>
								<div className="absolute gap-2 bottom-2 left-4 h-[40px] bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200">
									<h3 className="font-semibold text-sm bg-[#fafafa]">
										{item?.title}
									</h3>
									<p className="flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center">
										${item?.price} USD
									</p>
								</div>
							</Link>
						</div>
					))}
				</div>

				<div className="scroll-items h-48 overflow-x-auto flex gap-4 m-4 pb-4">
					{obj.slice(7, 21).map((item, key) => (
						<Link
							to={`/product/${item?.id}}`}
							state={{ item, cart }}
							key={item?.id}
						>
							<Scrollimage obj={item} />
						</Link>
					))}
					{/* {divImages} */}
				</div>

				
			</section>
		</>
	);
}
