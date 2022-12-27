import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<Main />} path='/' />
				<Route element={<Detail />} path="/:id" />
				<Route element={<Update />} path="/:id/edit"/>
			</Routes>
		</div>
	);
}

export default App;