import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    let planetList = store.planetList; 
	
	let planetId = parseInt(params.theid);					
	let planetData = planetList.filter((elm, i) => {
		if (i == planetId) {
			return elm;
		}
		
	});

	
	return (
		<div className="card-dark bg-dark mb-3 " style={{maxWidth: "540px;"}}>
					{planetData.map((items, i) => ( 
			<div className="row no-gutters">
				<div className="col-md-4">
				<img src={'https://starwars-visualguide.com/assets/img/planets/'+(planetId + 1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img" alt={items.name}/>
				</div>
				<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title text-warning">{items.name}</h5>
					<p className="card-text text-secondary">
                        <ul className="list-unstyled p-2">
                            <li>rotation period: {items.rotation_period}</li>
                            <li>orbital period: {items.orbital_period}</li>
                            <li>diameter: {items.diameter}</li>
                            <li>climate: {items.climate}</li>
                            <li>gravity: {items.gravity}</li>
                            <li>terrain: {items.terrain}</li>
                        </ul>
					</p>
					<p className="card-text">
                        <Link to={"/"}><button type="button" className="btn btn-warning">Home</button></Link>
						<button className="btn btn-warning m-2" onClick={() => actions.addFavorite(items.name,"planet",i)}>♡</button>
					</p>
				</div>
				</div>
			</div>
             ))}
		</div>
		
	);
};

