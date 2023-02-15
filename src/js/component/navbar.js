import React from "react";
import { Link } from "react-router-dom";
import imgLogo from '../../img/star_wars_logo_PNG14.png';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				
				<span className="navbar-brand mb-0 h1">
					<img src={imgLogo} width="80" height="40" class="d-inline-block align-top" alt=""/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
