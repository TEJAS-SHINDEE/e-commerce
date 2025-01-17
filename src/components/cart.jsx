import React from "react";
import { useLocation } from "react-router-dom";

export const Cart = ({ obj }) => {
	const location = useLocation();
	const productId = location.pathname.slice(6, location.pathname.length);
	const newCartitem = obj.filter((item) => {
		return item?.id === productId;
	});

	let localCart = [];
	const localString = localStorage.getItem("localCart");
	localCart = JSON.parse(localString);
	if (localCart === null) {
		localCart = [];
	}

	// var sum = 0;
	// sum = localCart.reduce((sum,item)=>{
	// 	let price = parseInt(item?.price);
	// 	return sum + price;
	// });
	// console.log("sum ",sum);

	const handleDelete = (itemId) =>{
		console.log('deleted',itemId)
	}

	return (
		<>
			<div className="h-[90%] w-[96%] m-auto rounded-3xl border ring-gray-300 bg-white  ">
				<div className="text-3xl font-semibold flex justify-center">
					<h1>My Cart</h1>
				</div>
				<div className="">
					<ul className="flex flex-row md:flex-col ">
						{localCart.map((item) => (
							
							<li
								key={item?.id}
								className="flex flex-row m-4 h-40 w-[70%] mx-auto bg-[#fafafa] border ring-gray-300 rounded-xl ring-1 hover:ring-blue-400"
							>
								
								<div className="w-[60%]  p-10 ">
									<p className="font-semibold text-lg  m-2">{item?.title}</p>
									<span className="font-semibold bg-blue-600 text-white p-2 rounded-full ">
										$ {item?.price} USD
									</span>
									<button type="button" onClick={handleDelete(item?.id)} className="bg-red-600 m-2 font-semibold text-white p-2 rounded-full">Delete from Cart</button>
								</div>
								<div className="w-[60%] h-[70%] self-center">
									<img
										className="h-full w-full object-contain hover:scale-105 duration-300"
										src={item?.image}
										alt=""
									/>
								</div>
							</li>
						))}
					</ul>
					<p>sum ={sum}</p>

				</div>
			</div>
		</>
	);
};
