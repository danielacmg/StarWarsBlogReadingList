import React, {useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import imgLogo from '../../img/star_wars_logo_PNG14.png';
// import {fontawesome} from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../store/appContext.js"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    let faveList = store.favorites; 

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				
				<span className="navbar-brand mb-0 h1">
					<img src={imgLogo} width="80" height="40" className="d-inline-block align-top" alt=""/>
				</span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Favorites ♡
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{faveList.map((items, i) => ( 
					<a className="dropdown-item" href="" id={i}>Action{items.name}<FontAwesomeIcon icon="fa-solid fa-trash-xmark" /></a>
					))}
				</div>
				</div>


		</nav>
	);
};
