import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const Vehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    let vehicleList = store.vehicleList; 
	
	let vehicleId = parseInt(params.theid);					
	let vehicleData = vehicleList.filter((elm, i) => {
		if (i == vehicleId) {
			return elm[1];
		}
		
	});
	
	return (
		<div className="card-dark bg-dark mb-3 " style={{maxWidth: "540px;"}}>
					{vehicleData.map((items, i) => ( 
			<div class="row no-gutters">
				<div class="col-md-4">
				<img src={'https://starwars-visualguide.com/assets/img/vehicles/'+(vehicleId + 1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img" alt={items[1].name}/>
				</div>
				<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">{items[1].name}</h5>
					<p class="card-text text-secondary">
                        <ul className="list-unstyled p-2">
                        <li>height: {items[1].model}</li>
                        <li>manufacturer: {items[1].manufacturer}</li>
                        <li>cost in credits: {items[1].cost_in_credits}</li>
                        <li>length: {items[1].length}</li>
                        <li>max atmosphering speed: {items[1].max_atmosphering_speed}</li>
                        <li>created: {items[1].created}</li>
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

