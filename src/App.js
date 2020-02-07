import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import axiosBranch from './axios-branch';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import BranchList from './components/BranchList/BranchList';
import BranchPage from './components/BranchPage/BranchPage';

function App(props) {
	const [branchList, setBranchList] = useState({});

	useEffect(() => {
		axiosBranch.get('').then(result => {
			let district_dict = {};
			result.data.branches.forEach(branch => {
				if(!district_dict.hasOwnProperty(branch.district)) {
					district_dict[`${branch.district}`] = [];
				}

				district_dict[`${branch.district}`].push(branch);
			});

			setBranchList(branchList => district_dict);
		}).catch(error => {
			console.log(error);
		});
	}, []);

	const onBranchDetailHandler = (id, district) => {
		let selectedBranch = branchList[district].find(branch => branch._id === id);

		props.history.push(`/branches/${id}`, { selectedBranch });
	}

	let routes = (
		<Switch>
			<Route exact path="/branches/:id" component={BranchPage} />
			<Route exact path="/branches" render={() => <BranchList branches={branchList} branchDetail={onBranchDetailHandler} />} />
			<Route exact path="/" component={Home} />
		</Switch>
	);

	return (
		<Layout>
			{routes}
		</Layout>
	);
}

export default withRouter(App);