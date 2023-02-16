import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const Character = () => {
  const { store, actions } = useContext(Context);
	const params = useParams();

  let characterList = store.characterList; 
	
	let characterId = parseInt(params.theid);					
	let characterData = characterList.filter((elm, i) => {
		if (i == characterId) {
			return elm[1];
		}
		
	});
	
	
	return (
		<div className="card-dark bg-dark mb-3 " style={{maxWidth: "540px;"}}>
			{characterData.map((items, i) => ( 
			<div className="row no-gutters">
					
				<div className="col-md-4">
				<img src={'https://starwars-visualguide.com/assets/img/characters/'+(characterId + 1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img" alt={characterData.name}/>
				</div>
				<div className="col-md-8">						
						<div className="card-body">
							<h5 className="card-title">{characterData.name}</h5>
							<p className="card-text text-secondary">
								<ul className="list-unstyled p-2">
									<li>height: {items[1].height}</li>
									<li>mass: {items[1].mass}</li>
									<li>hair_color: {items[1].hair_color}</li>
									<li>skin_color: {items[1].skin_color}</li>
									<li>eye_color: {items[1].eye_color}</li>
									<li>birth_year: {items[1].birth_year}</li>
									<li>gender: {items[1].gender}</li>
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

