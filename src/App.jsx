import React from "react";
import { Navbar } from "./components/header/navbar.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home.jsx";
import { About } from "./components/pages/about.jsx";
import { Terms } from "./components/pages/terms.jsx";
import { Shipping } from "./components/pages/shipping.jsx";
import { Privacy } from "./components/pages/privacy.jsx";
import { Faq } from "./components/pages/faq.jsx";
import { Search } from "./components/search.jsx";
import { useEffect, useState } from "react";
import { Product } from "./components/product.jsx";
import { Shirts } from "./components/categories/shirts.jsx";
import { Electronics } from "./components/categories/electronics.jsx";
import { Jewelery } from "./components/categories/jewelery.jsx";
import { Womens } from "./components/categories/womens.jsx";
import { Mens } from "./components/categories/mens.jsx";
import { Trending } from "./components/trending.jsx";
import { Low } from "./components/low.jsx";
import { High } from "./components/high.jsx";
import { Cart } from "./components/cart.jsx";
import { Query } from "./components/query.jsx";

function App() {
	const [cartItem, setCartItem] = useState([]);
	const [data, setData] = useState([]);

	const getData = async () => {
		const url = "https://fakestoreapi.com/products";
		const response = await fetch(url);
		const newData = await response.json();
		setData(newData);
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		setCartItem(data[12]);
	}, [data]);

	return (
		<>
			<div className="main bg-[#fafafa] selection:bg-[#5EEAD4]">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home obj={data} cart={cartItem} />}>
							{" "}
						</Route>
						<Route path="/cart" element={<Cart obj={data} />}>
							{" "}
						</Route>
						<Route path="/about" element={<About />}>
							{" "}
						</Route>
						<Route path="/terms" element={<Terms />}>
							{" "}
						</Route>
						<Route path="/privacy" element={<Privacy />}>
							{" "}
						</Route>
						<Route path="/shipping" element={<Shipping />}>
							{" "}
						</Route>
						<Route path="/faq" element={<Faq />}>
							{" "}
						</Route>
						<Route path="/search" element={<Search obj={data} />}>
							{" "}
						</Route>
						<Route path="search">
							<Route path="womens" element={<Womens obj={data} />}>
								{" "}
							</Route>
							<Route path="mens" element={<Mens obj={data} cart={cartItem} />}>
								{" "}
							</Route>
							<Route path="shirts" element={<Shirts obj={data} />}>
								{" "}
							</Route>
							<Route path="electronics" element={<Electronics obj={data} />}>
								{" "}
							</Route>
							<Route path="jewelery" element={<Jewelery obj={data} />}>
								{" "}
							</Route>
							<Route path="low" element={<Low obj={data} />}>
								{" "}
							</Route>
							<Route path="high" element={<High obj={data} />}>
								{" "}
							</Route>
							<Route path="query" element={<Query obj={data} />}>
								{" "}
							</Route>
						</Route>
						<Route path="/product/:id" element={<Product />}>
							{" "}
						</Route>
						<Route path="/trending" element={<Trending obj={data} />}>
							{" "}
						</Route>
					</Routes>
					<Footer />
				</Router>
			</div>
		</>
	);
}

export default App;
