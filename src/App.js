import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";


// Page Component 
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart"
import About from "./pages/About";
import SignIn from "./pages/SignIn"
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "react-toastify/dist/ReactToastify.css";


class App extends Component {
	render() {
		return (
			<div>
				<ToastContainer />
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route exact path='/shop' component={Shop} />
					<Route exact path='/shop/:id' component={Shop}/>
					<Route path='/about' component={About} />
					<Route path='/cart' component={Cart}/>
					<Route path='/signIn' component={SignIn}/>
					<Route path='/register' component={Register}/>
					<Route path='/notFound' component={NotFound} />
					<Redirect to='/notFound' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
