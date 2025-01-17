import React from "react";

export const About = () => {
	return (
		<div className="mx-auto md:w-[65%] p-10 " id="about">
			<h1 className="text-5xl font-bold p-8">About</h1>
			<p className="pl-6">
				This website is built with{" "}
				<span className="font-semibold underline-offset-2 underline">
					<a href="https://vercel.com/templates">Next.js Commerce</a>
				</span>
				, which is a ecommerce template for creating a headless Shopify
				storefront.{" "}
			</p>
			<p className="p-6 text-lg">
				Support for real-world commerce features including:{" "}
			</p>

			<ul className="list-disc pl-16">
				<li className="p-2">Out of stock</li>
				<li className="p-2">Order history</li>
				<li className="p-2">Order status</li>
				<li className="p-2">
					Cross variant/option availability (aka. Amazon style)
				</li>
				<li className="p-2">
					<a
						className="font-semibold underline-offset-2 underline"
						href="https://vercel.com/templates"
					>
						Hidden products
					</a>
				</li>
				<li className="p-2">
					Dynamically driven content and features via Shopify (ie. collections,
					menus, pages, etc.)
				</li>
				<li className="p-2">
					Seamless and secure checkout via{" "}
					<span className="font-semibold underline-offset-2 underline">
						<a href="https://www.shopify.com/">Shopify Checkout</a>
					</span>
				</li>
				<li className="p-2">And more!</li>
			</ul>

			<p className="p-6 text-lg">
				This template also allows us to highlight newer Next.js features
				including:{" "}
			</p>

			<ul className="list-disc pl-16">
				<li className="p-2">Next.js App Router</li>
				<li className="p-2">Optimized for SEO using Next.js's Metadata</li>
				<li className="p-2">React Server Components (RSCs) and Suspense</li>
				<li className="p-2">Server Actions for mutations</li>
				<li className="p-2">Edge runtime</li>
				<li className="p-2">New Next.js 13 fetching and caching paradigms</li>
				<li className="p-2">Dynamic OG images</li>
				<li className="p-2">Styling with Tailwind CSS</li>
				<li className="p-2">
					Automatic light/dark mode based on system settings
				</li>
				<li className="p-2">And more!</li>
			</ul>

			<address className="p-6">
				This document was last updated on April 20, 2023.
			</address>
		</div>
	);
};
