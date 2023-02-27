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
	
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 p-2">
			<Link to="/">
				
				<span className="navbar-brand mb-0 h1">
					<img src={imgLogo} width="80" height="40" className="d-inline-block align-top" alt=""/>
				</span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownFavorites" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Favorites ♡ {faveList.length>0 && <span className="bg-secondary rounded p-1">{faveList.length}</span>}
				</button>
 				<div className="dropdown-menu end-0" aria-labelledby="dropdownMenuButton">	
				{!faveList.length>0 &&  <h6 class="dropdown-header">Add a favorite</h6>}				
					{faveList.map((items, i) => ( 
						<a className="dropdown-item" key={i}>
							<Link to={"/"+items.type+"/" + items.id} className=" text-decoration-none text-dark">															
								 {items.name+"  "}
							</Link>
							<span onClick={() => actions.deleteFavorite(items,i)} >
								<img src={imgDelete} className="deleteBtn ml-2" data-toggle="tooltip" data-placement="top" title="Remove from favorite"/>
							</span>
						</a>
					))}
					{localStorage.setItem("favorites", JSON.stringify(faveList))} {/* to save favorites in local storage */}					
				</div>
				</div>
		</nav>
	);
};
