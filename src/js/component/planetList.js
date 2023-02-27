import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const PlanetList = () => {
  const { store, actions } = useContext(Context);
	const params = useParams();

  let planetList = store.planetList;
  let loading3 = store.loading3;
  let error3 = store.error3;

  let faveList = store.favorites; 

  

  return (
    <div className="mt-5 bg-secondary"> 
      
      
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
            <div className={!i ? 'carousel-item active':'carousel-item'} key={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">{/*If No picture -> https://starwars-visualguide.com/assets/img/big-placeholder.jpg */}
                <img src={'https://starwars-visualguide.com/assets/img/planets/'+(i+1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img-top" alt={items.name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items.name}</h5>
                  <p className="card-text text-secondary">
                    
                  </p>
                  <div className=" text-center">
                    <Link to={"/planet/" + i}>
                      <button type="button" className="btn btn-warning">Learn More</button>
                    </Link>                    
                    <button className="btn btn-warning m-2" onClick={() => actions.addFavorite(items.name,"planet",i)}>♡</button>
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
