import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const Footer = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    let faveList = store.favorites; 

	
	<footer className="footer mt-auto py-3 text-center">
		 <h1 className="text-warning text-left">Favorites</h1>
		 <p>
		{faveList.map((items, i) => ( 
						<a className="dropdown-item" href="" id={i}>{items.name}<FontAwesomeIcon icon="fa-solid fa-trash-xmark" /></a>
						))}

			{/* Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a> */}
		</p>
	</footer>
};
