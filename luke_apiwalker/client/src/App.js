import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from './components/Search';
import Error from './components/Error';
import Planets from './components/Planets';
import People from './components/People';

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<Search />
				<Routes>
					<Route path="/" />
						<Route path="/people/:id" element={<People />} />
						<Route path="/planets/:id" element={<Planets />} />
						<Route path="/error" element={<Error />} />
					</Routes>
			</header>
		</div>
	);
}

export default App;
