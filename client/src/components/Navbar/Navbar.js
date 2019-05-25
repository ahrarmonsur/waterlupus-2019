import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.sass';

import AppBar from '@material-ui/core/AppBar';

import LogoImg from 'assets/Logo.svg'

class Navbar extends React.Component {

	navItems = [
		{
			title: "Symptoms",
			link: ""
		},
		{
			title: "Treatment",
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
						<img src={LogoImg} alt="Puple Monarch logo"/>
					</div>
					<div className="navItems">
						{ this.createNavItems() }
					</div>

					<button>Log in</button>

				</div>
			</AppBar>
		);
	}
}

export default Navbar;

