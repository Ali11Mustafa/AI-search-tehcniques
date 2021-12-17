import React, { Component }  from 'react';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Regsiter';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegsiterComplete from './Pages/Auth/CompleteRegister';
import Header from './Components/Nav/Header';
import PathfindingVisualizer from './Pathfinder/PathFinder';


function App() {

	return (
		<div>
			<Header />
			<ToastContainer />
			<Switch>
				<Route exact path="/" component={PathfindingVisualizer} />
				<Route path="/documentation" component={Login} />
				<Route path="/Complete" component={RegsiterComplete} />
			</Switch>

		</div>
	);
}
export default App;
