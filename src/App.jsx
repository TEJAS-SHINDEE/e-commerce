import React from 'react';
import { Navbar }  from './components/navbar.jsx';
import { Footer } from './components/footer.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/home.jsx';
import { About } from './components/about.jsx';
import { Terms } from './components/terms.jsx';
import { Shipping } from './components/shipping.jsx';
import { Privacy } from './components/privacy.jsx';
import { Faq } from './components/faq.jsx';
import { Search } from './components/search.jsx';
import { useEffect , useState } from 'react';

function App() {

  return (
    <>
      	<div className="main bg-[#fafafa]">
			
			<Router>
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home/>}> </Route>
					<Route path="/about" element={<About/>}> </Route>
					<Route path="/terms" element={<Terms/>}> </Route>
					<Route path="/privacy" element={<Privacy/>}> </Route>
					<Route path="/shipping" element={<Shipping/>}> </Route>
					<Route path="/faq" element={<Faq/>}> </Route>
					<Route path="/search" element={<Search/>}> </Route>
				</Routes>
				{/* <Footer/> */}
			</Router>
      	</div>
    </>
  );
};

export default App;
