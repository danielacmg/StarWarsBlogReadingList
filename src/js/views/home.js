import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const Home = () => {
  const { store, actions } = useContext(Context);
	const params = useParams();

  let characterList = store.characterList; 
  let loading = store.loading;
  let error = store.error;

  let vehicleList= store.vehicleList;
  let loading2 = store.loading2;
  let error2 = store.error2

  let planetList = store.planetList;
  let loading3 = store.loading3;
  let error3 = store.error3;

  let faveList = store.favorites; 

  const addFavorite = (itemName, itemId) =>{   //to add a new item to the list
        
    if(Object.values(store.favorites).includes(itemName)){
      alert("The selected item is already on your list");
    }else{
      setStore({ favorites: faveList => ([...faveList, {name:itemName, id:itemId}]) })
    }
    
    
  };

  const deleteFavorite = (itemName, itemId) =>{   //to delete an item 
    
    setStore({favorites: store.favorites.filter((item, index) => itemId!==index)});
  }; 

 

  return (
    <div className="mt-5 bg-secondary"> 
      
      {/* ////////////// People /////////////////// */}
      <h1 className="text-warning text-left">Characters</h1>

      <div id="carouselCharacters" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

        {loading && <div className="text-center">Loading...</div>}
        {error && (
          <div className="text-center">{`There is a problem fetching the data - ${error}`}</div>
        )}
      
      
        {characterList &&
          characterList.map((items, i) => (  
            <div className={!i ? 'carousel-item active':'carousel-item'} id={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">
                <img src={'https://starwars-visualguide.com/assets/img/characters/'+(i+1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img-top" alt={items[1].name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items[1].name}</h5>
                  <div className=" text-center">
                  <Link to={"/character/" + i}>							
                  <button type="button" class="btn btn-warning">Learn More</button>
                  </Link>                  
              <a href="" className="btn btn-warning m-2" onClick={addFavorite(items[1].name, i)}>♡</a>
              </div>
                  
                </div>
              </div>
            </div>
            </div>
          ))} {/*<!-- End Of carousel Item -->*/}
          
          
        </div>{/*<!-- End Of carousel -->*/}
        <a className="carousel-control-prev" href="#carouselCharacters" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselCharacters" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* ////////////// Vehicles /////////////////// */}
      <h1 className="text-warning text-left">Vehicles</h1>
      <div id="carouselVehicles" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

        {loading2 && <div className="text-center">Loading...</div>}
        {error2 && (
          <div className="text-center">{`There is a problem fetching the data - ${error2}`}</div>
        )}
      
      
        {vehicleList &&
          vehicleList.map((items, i) => (  
            <div className={!i ? 'carousel-item active':'carousel-item'} id={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">
                <img src={'https://starwars-visualguide.com/assets/img/vehicles/'+(i+1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img-top" alt={items[1].name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items[1].name}</h5>
                  <p className="card-text text-secondary">
                    
                  </p>
                  <div className=" text-center">
                    <Link to={"/vehicle/" + i}>
                      <button type="button" class="btn btn-warning">Learn More</button>
                    </Link>  
              <a href="#" className="btn btn-warning m-2" onClick={addFavorite(items[1].name, i)}>♡</a>
              </div>
                  
                </div>
              </div>
            </div>
            </div>
          ))} {/*<!-- End Of carousel Item -->*/}
          
          
        </div>{/*<!-- End Of carousel -->*/}
        <a className="carousel-control-prev" href="#carouselVehicles" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselVehicles" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* ////////////// Planets /////////////////// */}
      <h1 className="text-warning text-left">Planets</h1>
      <div id="carouselPlanets" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

        {loading3 && <div className="text-center">Loading...</div>}
        {error3 && (
          <div className="text-center">{`There is a problem fetching the data - ${error3}`}</div>
        )}
      
      
        {planetList &&
          planetList.map((items, i) => (  
            <div className={!i ? 'carousel-item active':'carousel-item'} id={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">{/*If No picture -> https://starwars-visualguide.com/assets/img/big-placeholder.jpg */}
                <img src={'https://starwars-visualguide.com/assets/img/planets/'+(i+1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img-top" alt={items[1].name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items[1].name}</h5>
                  <p className="card-text text-secondary">
                    
                  </p>
                  <div className=" text-center">
                    <Link to={"/planet/" + i}>
                      <button type="button" class="btn btn-warning">Learn More</button>
                    </Link>                    
                    <a href="#" className="btn btn-warning m-2" onClick={addFavorite(items[1].name, i)}>♡</a>
              </div>
                  
                </div>
              </div>
            </div>
            </div>
          ))} {/*<!-- End Of carousel Item -->*/}
          
          
        </div>{/*<!-- End Of carousel -->*/}
        <a className="carousel-control-prev" href="#carouselPlanets" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselPlanets" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>

  );



  };
