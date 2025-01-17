import React from "react";
import { Collections } from "./collections";
import { SortBy } from "./sort-by";
import { Link } from "react-router-dom";
export const Trending = ({ obj }) => {
	const newTrend = obj.filter((item) => {
		return item?.rating.rate >= 4.0;
	});

	return (
		<>
			<div className="px-4 gap-6 flex mx-auto bg-[#fafafa]">
				<Collections />

				<div className="h-full w-[76%]  rounded-lg ">
					<ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
						{newTrend.map((item) => (
							<li
								key={item?.id}
								className="relative boder hover:ring-1 rounded-md bg-white border border-gray-200"
							>
								<Link to={`/product/${item?.id}`}>
									<img
										className="hover:scale-105 duration-300 h-[50%] w-[80%] self-center mx-auto pt-8"
										src={item?.image}
										alt=""
									/>
									<div className="absolute gap-2 bottom-2 left-4 h-[40px]  bg-white p-2 mr-4 flex felx-row justify-around rounded-full border border-gray-200">
										<h3 className="font-bold text-xs flex items-center">
											{item?.title}
										</h3>
										<p className="flex-none bg-blue-600 rounded-full p-1 text-sm text-white flex items-center">
											${item?.price} USD
										</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<SortBy />
			</div>
		</>
	);
};
