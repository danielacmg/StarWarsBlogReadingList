import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const Footer = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
    let faveList = store.favorites; 
	let emptyFav = store.emptyFav;

return(	
	<footer className="footer mt-auto py-3 text-center">
		 {faveList.length>0 && <h1 className="text-warning text-left">Favorites</h1>}
		 
		 <ul className="list-unstyled">
		 {faveList.map((items, i) => ( 
							
			<li key={i}> {items.name} 							
			</li>
		))}
		</ul>
			
	</footer>
)
};
