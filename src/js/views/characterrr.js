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
	
	console.log(characterList);
	console.log(characterData);
	let newData = characterData[1];

	// characterData.map((items, i) =>{
	// 	console.log ("height:" + items[1].height);
	
	// console.log("height: " + items[1].height +" mass: "+ items[1].mass +" hair_color: " + items[1].hair_color + " skin_color: "+ items[1].skin_color +" eye_color: "+ items[1].eye_color +" birth_year: " + items[1].birth_year+ " gender: " + items[1].gender);
	// });console.log("height: " + newData.height +" mass: "+ newData.mass +" hair_color: " + newData.hair_color + " skin_color: "+ newData.skin_color +" eye_color: "+ newData.eye_color +" birth_year: " + newData.birth_year+ " gender: " + newData.gender);
	

	return (
		<div class="card mb-3" style="max-width: 540px;">
			<div class="row no-gutters">
				<div class="col-md-4">
				<img src={'https://starwars-visualguide.com/assets/img/characters/'+(characterId + 1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img" alt={characterData.name}/>
				</div>
				<div class="col-md-8">
					{characterData.map((items, i) =>{
						<div class="card-body">
							<h5 class="card-title">{characterData.name}</h5>
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
							<p class="card-text">
								<small class="text-muted"><Link to={"/"}>Home</Link></small>
							</p>
						</div>
					})}
				</div>

			</div>
		</div>
		
	);
};

