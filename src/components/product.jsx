import React from "react";
import { Scrollimage } from "./scrollImage.jsx";
import { useLocation } from "react-router-dom";

export const Product = () => {
	const location = useLocation();
	const product = location.state?.item;

	let localCart = [];
	const localString = localStorage.getItem("localCart");
	localCart = JSON.parse(localString);
	if (localCart === null) {
		localCart = [];
	}

	const handleSubmit = () => {
		localCart.push(product);
		localStorage.setItem("localCart", JSON.stringify(localCart));
		console.log("local cart", localCart);
		alert("Product is Added into cart");
	};

	return (
		<>
			<div className="h-[48rem]  mx-4 bg-white rounded-xl border border-gray-300 flex lg:flex-row flex-col ">
				<div className=" left lg:h-full lg:w-[70%] h-[50%] w-full flex items-center justify-center">
					<img
						className="hover:scale-105 duration-300 lg:h-[80%] lg:w-[60%] object-contain h-[60%] w-[60%]  "
						src={product.image}
						alt="product"
					/>
				</div>
				<div className=" right lg:h-full lg:w-[40%] h-[50%] w-full flex flex-col justify-evenly">
					<div className="">
						<h3 className="text-4xl font-semibold p-8 ">{product.title}</h3>
						<span className="bg-blue-600 p-2 rounded-full text-lg text-white ml-8">
							$ {product.price} USD
						</span>
					</div>
					<div className="">
						<br />
						<p className="font-semibold text-lg">Description : </p>
						<article className="p-4 ">{product.decription}</article>
					</div>
					<div className="">
						{/* <form action={'/cart'} > */}
						<label htmlFor="color">Color</label>
						<br />
						<br />
						<div className=" flex gap-4">
							<button
								className="border focus:ring-blue-600 ring-1 ring-gray-200 bg-neutral-100 rounded-xl hover:ring-blue-600 h-8 w-14"
								type="button"
								id="color"
							>
								Black
							</button>
							<button
								className="border focus:ring-blue-600 ring-1 ring-gray-200 bg-neutral-100 rounded-xl hover:ring-blue-600 h-8 w-14"
								type="button"
								id="color"
							>
								Blue
							</button>
							<button
								className="border focus:ring-blue-600 ring-1 ring-gray-200 bg-neutral-100 rounded-xl hover:ring-blue-600 h-8 w-14"
								type="button"
								id="color"
							>
								white
							</button>
						</div>
						<br />
						<label htmlFor="size">Size</label>
						<br />
						<br />
						<div className=" flex gap-4">
							<button
								className="border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14"
								type="button"
								id="size"
							>
								XS
							</button>
							<button
								className="border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14"
								type="button"
								id="size"
							>
								S
							</button>
							<button
								className="border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14"
								type="button"
								id="size"
							>
								M
							</button>
							<button
								className="border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14"
								type="button"
								id="size"
							>
								L
							</button>
							<button
								className="border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14"
								type="button"
								id="size"
							>
								XL
							</button>
							<button
								className="border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14"
								type="button"
								id="size"
							>
								XXL
							</button>
							<button
								className="border ring-1 focus:ring-blue-600 ring-gray-200 bg-neutral-100 rounded-xl px-2 hover:ring-blue-600 h-8 w-14"
								type="button"
								id="size"
							>
								XXXL
							</button>
						</div>
						<br />
						<br />
						<button
							className="bg-blue-600 h-16 w-full text-white font-semibold rounded-2xl"
							type="submit"
							id="size"
							onClick={handleSubmit}
						>
							<i class="ri-add-fill" /> Add to Cart
						</button>
						{/* </form> */}
					</div>
				</div>
			</div>
		</>
	);
};
