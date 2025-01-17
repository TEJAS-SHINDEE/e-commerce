import { React, useState } from "react";
import { AlignJustify, House } from "lucide-react";
export function Navbar() {
	return (
		<>
			<div className="flex flex-row p-4 justify-between lg:px-8 ">
				<div className=" flex  flex-row justify-items-start items-center gap-8 ">
					<div className="flex flex-row gap-2 items-center ">
						<div className="ring-1 ring-gray-200 h-10 w-10 rounded-xl flex items-center justify-center hidden md:flex-none md:inline ">
							<a href="/">
								<House />{" "}
							</a>
						</div>
						<a href="/">
							<p className="text-sm font-semibold cursor-pointer hidden lg:inline">
								ACME STORE
							</p>
						</a>
						<div className="inline md:hidden">
							<AlignJustify />
						</div>
					</div>

					<div className="hidden md:inline">
						<ul className="flex flex-row gap-6 text-sm text-gray-500 font-md">
							<a href="/search">
								{" "}
								<li className="hover:text-black hover:underline underline-offset-4 cursor-pointer">
									All
								</li>
							</a>
							<a href="/search/shirts">
								{" "}
								<li className="hover:text-black hover:underline underline-offset-4 cursor-pointer">
									Shirts
								</li>
							</a>
							<a href="/search/electronics">
								{" "}
								<li className="hover:text-black hover:underline underline-offset-4 cursor-pointer">
									Electronics
								</li>
							</a>
						</ul>
					</div>
				</div>

				<div className="flex flex-row gap-2 items-center md:hidden">
					<div className="ring-1 ring-gray-200 h-10 w-10 rounded-xl flex items-center justify-center ">
						<House />
					</div>
					<p className="text-sm font-semibold cursor-pointer ">ACME STORE</p>
				</div>

				<div className="hidden justify-center md:flex w-full md:w-1/3 lg:w-1/3 rounded-md bg-white ring-1 ring-gray-200 focus:ring-2  focus:ring-gray-200">
					<label htmlFor="search"> </label>
					<form
						action="/search/query"
						id="search"
						className="flex flex-row justify-between px-4 w-full avtice:ring-1"
					>
						<input
							className="flex flex-row ring-blue-200 bg-transparent appearance-none focus:uotline-none"
							type="text"
							placeholder="Search for products"
							name="q"
						/>
						<div className="flex items-center">
							<i className="ri-search-line"> </i>
						</div>
					</form>
				</div>

				<div className=" h-10 w-10 flex justify-center items-center rounded-md ring-1 cursor-pointer ring-gray-200 ">
					<div className="hover:scale-105">
						<a href="/cart">
							<i className="ri-shopping-cart-2-line"> </i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
