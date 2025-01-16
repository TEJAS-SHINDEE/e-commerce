import React from 'react';
import { Navbar }  from './components/header/navbar.jsx';
import { Footer } from './components/footer/footer.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/home.jsx';
import { About } from './components/about.jsx';
import { Terms } from './components/terms.jsx';
import { Shipping } from './components/shipping.jsx';
import { Privacy } from './components/privacy.jsx';
import { Faq } from './components/faq.jsx';
import { Search } from './components/search.jsx';
import { useEffect , useState } from 'react';
import { Product } from './components/product.jsx';
import { Shirts } from './components/shirts.jsx';
import { Electronics } from './components/electronics.jsx';
import { Jewelery } from './components/jewelery.jsx';
import { Womens } from './components/womens.jsx';
import { Mens } from './components/mens.jsx';
import { Trending } from './components/trending.jsx';
import { Low } from './components/low.jsx';
import { High } from './components/high.jsx';
import { Cart } from './components/cart.jsx';


function App() {

	const [query, setQuery] = useState('pp');
	console.log(query);
	const [data, setData] = useState([]);

	const getData = async () => {
		const url = 'https://fakestoreapi.com/products';
		const response = await fetch(url);
		const newData = await response.json();
		setData(newData);
	}

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		// console.log(data);
	}, [data]);

  return (
    <>
      	<div className="main bg-[#fafafa] selection:bg-[#5EEAD4]">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home obj={data}/>}> </Route>
					<Route path="/cart" element={<Cart obj={data}/>}> </Route>
					<Route path="/about" element={<About/>}> </Route>
					<Route path="/terms" element={<Terms/>}> </Route>
					<Route path="/privacy" element={<Privacy/>}> </Route>
					<Route path="/shipping" element={<Shipping/>}> </Route>
					<Route path="/faq" element={<Faq/>}> </Route>
					<Route path="/search" element={<Search obj={data}/>}> </Route>
					<Route path="search" > 
						<Route path="womens" element={<Womens obj={data}/>}> </Route>
						<Route path="mens" element={<Mens obj={data}/>}> </Route>
						<Route path="shirts" element={<Shirts obj={data}/>}> </Route>
						<Route path="electronics" element={<Electronics obj={data}/>}> </Route>
						<Route path="jewelery" element={<Jewelery obj={data}/>}> </Route>
						<Route path="low" element={<Low obj={data}/>}> </Route>
						<Route path="high" element={<High obj={data}/>}> </Route>
					</Route>
					<Route path="/product/:id" element={<Product />}> </Route>
					<Route path="/trending" element={<Trending obj={data}/>}> </Route>
					
				</Routes>
				<Footer />
			</Router>
      	</div>
    </>
  );
};

export default App;
