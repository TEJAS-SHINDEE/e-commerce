import React from "react";
import { Collections } from "./collections";
import { SortBy } from "./sort-by";
import { Card } from "./card.jsx";

export const Low = ({ obj }) => {
	obj.sort((a, b) => {
		return a.price - b.price;
	});

	console.log("low");

	return (
		<>
			<div className="px-4 gap-6 flex mx-auto bg-[#fafafa]">
				<Collections />

				<div className="h-full w-[76%]  rounded-lg ">
					<ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
						{obj.map((item) => (
							<Card key={item?.id} item={item} />
						))}
					</ul>
				</div>

				<SortBy />
			</div>
		</>
	);
};
