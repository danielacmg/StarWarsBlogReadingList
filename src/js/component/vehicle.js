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
			return elm;
		}
		
	});
	
	return (
		<div className="card-dark bg-dark mb-3 " style={{maxWidth: "540px;"}}>
					{vehicleData.map((items, i) => ( 
			<div className="row no-gutters">
				<div className="col-md-4">
				<img src={'https://starwars-visualguide.com/assets/img/vehicles/'+(vehicleId + 1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img" alt={items.name}/>
				</div>
				<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title text-warning">{items.name}</h5>
					<p className="card-text text-secondary">
                        <ul className="list-unstyled p-2">
                        <li>height: {items.model}</li>
                        <li>manufacturer: {items.manufacturer}</li>
                        <li>cost in credits: {items.cost_in_credits}</li>
                        <li>length: {items.length}</li>
                        <li>max atmosphering speed: {items.max_atmosphering_speed}</li>
                        <li>created: {items.created}</li>
                        </ul>
					</p>
                        <p className="card-text">
                            <Link to={"/"}><button type="button" className="btn btn-warning">Home</button></Link>
							<button className="btn btn-warning m-2" onClick={() => actions.addFavorite(items.name,"vehicle",i)}>♡</button>
						</p>
				</div>
                 
				</div>
			</div>
        ))}
		</div>
		
	);
};

