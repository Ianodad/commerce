import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";

import Shop from "./pages/Shop";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/shop' component={Shop} />
					<Route path='/about' component={About} />
					<Route path='/not-found' component={NotFound} />
					<Redirect to='/not-found' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
