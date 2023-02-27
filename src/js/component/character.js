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
			return elm;
		}
		
	});
	
	
	return (
		<div className="card-dark bg-dark mb-3 " style={{maxWidth: "540px;"}}>
			{characterData.map((items, i) => ( 
			<div className="row no-gutters">
					
				<div className="col-md-4">
				<img src={'https://starwars-visualguide.com/assets/img/characters/'+(characterId + 1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img" alt={items.name}/>
				</div>
				<div className="col-md-8">						
						<div className="card-body">
							<h5 className="card-title text-warning">{items.name}</h5>
							<p className="card-text text-secondary">
								<ul className="list-unstyled p-2">
									<li>height: {items.height}</li>
									<li>mass: {items.mass}</li>
									<li>hair_color: {items.hair_color}</li>
									<li>skin_color: {items.skin_color}</li>
									<li>eye_color: {items.eye_color}</li>
									<li>birth_year: {items.birth_year}</li>
									<li>gender: {items.gender}</li>
								</ul>
							</p>
							<p className="card-text">
								<Link to={"/"}><button type="button" class="btn btn-warning">Home</button></Link>
								<button className="btn btn-warning m-2" onClick={() => actions.addFavorite(items.name,"character",i)}>♡</button>
							</p>
						</div>
					
				</div>

			</div>
			 ))}
		</div>
		
	);
};

