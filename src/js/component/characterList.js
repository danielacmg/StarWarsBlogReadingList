import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const CharacterList = () => {
  const { store, actions } = useContext(Context);
	const params = useParams();

  let characterList = store.characterList; 
  let loading = store.loading;
  let error = store.error;

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
            <div className={!i ? 'carousel-item active':'carousel-item'} key={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">
                <img src={'https://starwars-visualguide.com/assets/img/characters/'+(i+1) + '.jpg'} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";}} className="card-img-top" alt={items.name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items.name}</h5>
                  <div className=" text-center">
                  <Link to={"/character/" + i}>							
                  <button type="button" className="btn btn-warning">Learn More</button>
                  </Link>                  
                  <button className="btn btn-warning m-2" onClick={() => actions.addFavorite(items.name,"character",i)}>♡</button>
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

    </div>

  );



  };
