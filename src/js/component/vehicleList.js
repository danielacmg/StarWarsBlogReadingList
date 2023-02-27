import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const VehicleList = () => {
  const { store, actions } = useContext(Context);
	const params = useParams();
  
  let vehicleList= store.vehicleList;
  let loading2 = store.loading2;
  let error2 = store.error2

  let faveList = store.favorites; 

  

  return (
    <div className="mt-5 bg-secondary"> 
      
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
            <div className={!i ? 'carousel-item active':'carousel-item'} key={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">
                <img src={'https://starwars-visualguide.com/assets/img/vehicles/'+(i+1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img-top" alt={items.name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items.name}</h5>
                  <p className="card-text text-secondary">
                    
                  </p>
                  <div className=" text-center">
                    <Link to={"/vehicle/" + i}>
                      <button type="button" className="btn btn-warning">Learn More</button>
                    </Link>  
                    <button className="btn btn-warning m-2" onClick={() => actions.addFavorite(items.name,"vehicle",i)}>♡</button>
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

      

    </div>

  );



  };
