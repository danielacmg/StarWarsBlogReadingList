import React, {useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import imgLogo from '../../img/star_wars_logo_PNG14.png';
import imgDelete from '../../img/Lightsaber.png';
// import {fontawesome} from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../store/appContext.js"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    let faveList = store.favorites; 
	// console.log("in navbar...")
	// console.log(faveList);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 p-2">
			<Link to="/">
				
				<span className="navbar-brand mb-0 h1">
					<img src={imgLogo} width="80" height="40" className="d-inline-block align-top" alt=""/>
				</span>
			</Link>
			<div className="dropdown">
			<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownFavorites" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Favorites ♡
				</button>
				<div className="dropdown-menu p-0 m-0" aria-labelledby="dropdownMenuButton">
					<ul aria-labelledby="dropdownFavorites">
						{faveList.map((items, i) => ( 
								
							<li className="dropdown-item" href="" key={i}> {items.name+"  "} 
							<span onClick={() => actions.deleteFavorite(items,i)}><img src={imgDelete} className="deleteBtn" data-toggle="tooltip" data-placement="top" title="Remove from favorite"/></span>
							{/* <button className="btn btn-outline-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Remove from favorite"  onClick={() => actions.deleteFavorite(items,i)}>X</button> */}
							</li>
							))}
					</ul>
				</div>
				</div>


		</nav>
	);
};
