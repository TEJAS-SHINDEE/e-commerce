import React from "react";

export const SortBy = () => {
	return (
		<>
			<aside className="h-full w-[12%] hidden md:inline">
				<p className="text-xs text-gray-500 leading-6">Sort by</p>
				<ul className="text-[.93rem] leading-7 text-black">
					<li className="underline underline-offset-4 cursor-none">
						<a href="/trending">Relevance</a>
					</li>
					<li className="hover:underline underline-offset-4">
						<a href="/trending">Trending</a>
					</li>
					<li className="hover:underline underline-offset-4">
						<a href="/trending">Latest Arrivals</a>
					</li>
					<li className="hover:underline underline-offset-4">
						<a href="/search/low">Price: Low to High</a>
					</li>
					<li className="hover:underline underline-offset-4">
						<a href="/search/high">Price: High to Low</a>
					</li>
				</ul>
			</aside>
		</>
	);
};
