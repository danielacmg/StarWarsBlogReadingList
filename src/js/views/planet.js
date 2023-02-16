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
			return elm[1];
		}
		
	});

	
	return (
		<div className="card-dark bg-dark mb-3 " style={{maxWidth: "540px;"}}>
					{planetData.map((items, i) => ( 
			<div class="row no-gutters">
				<div class="col-md-4">
				<img src={'https://starwars-visualguide.com/assets/img/planets/'+(params.theid + 1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img" alt={store.planetList[params.theid].name}/>
				</div>
				<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">{store.planetList[params.theid].name}</h5>
					<p class="card-text text-secondary">
                        <ul className="list-unstyled p-2">
                            <li>rotation period: {items[1].rotation_period}</li>
                            <li>orbital period: {items[1].orbital_period}</li>
                            <li>diameter: {items[1].diameter}</li>
                            <li>climate: {items[1].climate}</li>
                            <li>gravity: {items[1].gravity}</li>
                            <li>terrain: {items[1].terrain}</li>
                        </ul>
					</p>
					<p className="card-text">
                            <Link to={"/"}><button type="button" class="btn btn-warning">Home</button></Link>
                        </p>
				</div>
				</div>
			</div>
             ))}
		</div>
		
	);
};

