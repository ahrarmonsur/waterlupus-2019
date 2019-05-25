import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import './Navbar.sass';

class Navbar extends React.Component {

	navItems = [
		{
			title: "Symptoms",
			link: ""
		},
		{
			title: "Medication",
			link: ""
		},
		{
			title: "Financing",
			link: ""
		},
		{
			title: "Community",
			link: ""
		},
	]

	createNavItems() {
		return this.navItems.map(el => {
			return (
				<span className="navItem">{el.title}</span>
			)
		})

	}


	render() {
		return (
			<AppBar id="navBar" position="sticky">
				<div className="innerContainer">
					<div className="logo">
						Monarch
					</div>
					<div className="navItems">
						{ this.createNavItems() }
					</div>
				</div>
			</AppBar>
		);
	}
}

export default Navbar;

