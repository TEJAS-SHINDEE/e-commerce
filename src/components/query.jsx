import React from "react";
import { Collections } from "./collections.jsx";
import { SortBy } from "./sort-by.jsx";
import { Card } from "./card.jsx";
import { useParams, useLocation } from "react-router-dom";
export const Query = ({ obj }) => {
	const subQuery = location.search.toLowerCase();
	const length = subQuery.length;
	const mainQuery = subQuery.slice(3, length + 1).replaceAll("+", "");
	// console.log(mainQuery);

	const searchResult = obj.filter((item) => {
		const title = item.title.toLowerCase().replaceAll(" ", "");
		const description = item.description.toLowerCase().replaceAll(" ", "");
		return (
			title.includes(`${mainQuery}`) || description.includes(`${mainQuery}`)
		);
	});

	// console.log(mainQuery);
	// console.log(searchResult);
	return (
		<>
			<div className="px-4 gap-6 flex mx-auto bg-[#fafafa]">
				<Collections />
				<div className="h-full w-[76%]  rounded-lg ">
					<ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
						{searchResult.map((item) => (
							<Card key={item?.id} item={item} />
						))}
					</ul>
				</div>
				<SortBy />
			</div>
		</>
	);
};
