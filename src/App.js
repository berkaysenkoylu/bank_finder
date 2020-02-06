import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axiosBranch from './axios-branch';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import BranchList from './components/BranchList/BranchList';
import BranchPage from './components/BranchPage/BranchPage';

function App() {
	const [branchList, setBranchList] = useState([]);

	useEffect(() => {
		axiosBranch.get('').then(result => {
			setBranchList(branchList => result.data.branches);
		}).catch(error => {
			console.log(error);
		});
	}, []);

	let routes = (
		<Switch>
			<Route exact path="/branches/:id" component={BranchPage} />
			<Route exact path="/branches" render={() => <BranchList branches={branchList} />} />
			<Route exact path="/" component={Home} />
		</Switch>
	);

	return (
		<Layout>
			{routes}
		</Layout>
	);
}

export default App;