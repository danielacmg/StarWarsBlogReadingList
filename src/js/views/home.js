// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useEffect, useState} from "react";
import "../../styles/home.css";


export const Home = () => {
  const [characterList, setCharacterList] = useState([]); /**{name:"pepito", height:"1m", mass:"gordo", hair_color:"brown", skin_color:"curtido"} */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [vehicleList, setVehicleList] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);

  const [planetList, setPlanetList] = useState([]);
  const [loading3, setLoading3] = useState(true);
  const [error3, setError3] = useState(null);

  // const fetchingStars = (nameList) =>{
  //   fetch('https://www.swapi.tech/api/'+{nameList})
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err)
  //     )
  // };

  const fetchingStars = () =>{
      fetchingCharacters();
      fetchingVehicles();
      fetchingPlanets();
    };

    const fetchingCharacters = () =>{
      // fetch('https://swapi.dev/api/people')
      //   .then(res => res.json())
      //   .then(data => {setCharacterList(data.results);console.log(characterList)})
      //   .catch(err => console.error(err)
      //   )

      fetch('https://swapi.dev/api/people')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            'This is an HTTP error: The status is ${response.status}'
          );
        }
        return response.json();
      })
      .then((actualData) => {   /*name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url */
      setCharacterList(Object.entries(actualData.results));/*console.log(actualData.results);console.log("Otra vez...");console.log(characterList);*/
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        // setCharacterList(null);
      })
      .finally(() => {
        setLoading(false);
      });

    };

/********************************* */
    const fetchingVehicles = () =>{
      fetch('https://swapi.dev/api/vehicles')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            'This is an HTTP error: The status is ${response.status}'
          );
        }
        return response.json();
      })
      .then((actualData) => {   
      setVehicleList(Object.entries(actualData.results));console.log(actualData.results);console.log("Vehicles...");console.log(vehicleList);
        setError2(null);
      })
      .catch((err) => {
        setError2(err.message);
        // setCharacterList(null);
      })
      .finally(() => {
        setLoading2(false);
      });
    };

    const fetchingPlanets = () =>{       
      fetch('https://swapi.dev/api/planets')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            'This is an HTTP error: The status is ${response.status}'
          );
        }
        return response.json();
      })
      .then((actualData) => {   
      setPlanetList(Object.entries(actualData.results));console.log(actualData.results);console.log("Planets...");console.log(planetList);
        setError3(null);
      })
      .catch((err) => {
        setError3(err.message);
        // setCharacterList(null);
      })
      .finally(() => {
        setLoading3(false);
      });

    };

    const More = () =>{
      
    };
    const addFavorite = () =>{
      
    };


    useEffect(() => {
      fetchingStars();
   }, []);

  return (
    <div className="mt-5 bg-secondary"> {/*<!--onload={()=>fetchingStars()}-->*/}
      
      {/* ////////////// People /////////////////// */}
      <h1 className="text-warning text-left">Characters</h1>

      <div id="carouselCharacters" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

        {loading && <div>Loading...</div>}
        {error && (
          <div>{`There is a problem fetching the data - ${error}`}</div>
        )}
      
      
        {characterList &&
          characterList.map((items, i) => (  
            <div className={!i ? 'carousel-item active':'carousel-item'} id={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">
                <img src={'https://starwars-visualguide.com/assets/img/characters/'+(i+1) + '.jpg'} className="card-img-top" alt={items[1].name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items[1].name}</h5>
                  <p className="card-text text-secondary">
                    <ul className="list-unstyled p-2">
                      <li>height: {items[1].height}</li>
                      <li>mass: {items[1].mass}</li>
                      <li>hair_color: {items[1].hair_color}</li>
                      <li>skin_color: {items[1].skin_color}</li>
                      <li>eye_color: {items[1].eye_color}</li>
                      <li>birth_year: {items[1].birth_year}</li>
                      <li>gender: {items[1].gender}</li>
                      {/* <li>homeworld: {items[1].homeworld}</li> */}
                    </ul>
                  </p>
                  <div className=" text-center">
                    <a href="#" className="btn btn-warning " onClick={console.log(characterList)}>Learn More</a>
              <a href="#" className="btn btn-warning m-2">♡</a>
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

        {loading2 && <div>Loading...</div>}
        {error2 && (
          <div>{`There is a problem fetching the data - ${error2}`}</div>
        )}
      
      
        {vehicleList &&
          vehicleList.map((items, i) => (  
            <div className={!i ? 'carousel-item active':'carousel-item'} id={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">
                <img src={'https://starwars-visualguide.com/assets/img/vehicles/'+(i+1) + '.jpg'} className="card-img-top" alt={items[1].name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items[1].name}</h5>
                  <p className="card-text text-secondary">
                    <ul className="list-unstyled p-2">
                      <li>height: {items[1].model}</li>
                      <li>manufacturer: {items[1].manufacturer}</li>
                      <li>cost in credits: {items[1].cost_in_credits}</li>
                      <li>length: {items[1].length}</li>
                      <li>max atmosphering speed: {items[1].max_atmosphering_speed}</li>
                      <li>created: {items[1].created}</li>
                    </ul>
                  </p>
                  <div className=" text-center">
                    <a href="#" className="btn btn-warning " onClick={More()}>Learn More</a>
              <a href="#" className="btn btn-warning m-2" onClick={addFavorite()}>♡</a>
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

        {loading3 && <div>Loading...</div>}
        {error3 && (
          <div>{`There is a problem fetching the data - ${error3}`}</div>
        )}
      
      
        {planetList &&
          planetList.map((items, i) => (  
            <div className={!i ? 'carousel-item active':'carousel-item'} id={i}>{/*<!-- Carousel Item -->*/}
              <div className="cards-wrapper">
              <div className="card-dark bg-dark">
                <img src={'https://starwars-visualguide.com/assets/img/planets/'+(i+1) + '.jpg'} className="card-img-top" alt={items[1].name}/>
                <div className="card-body">
                  <h5 className="card-title text-warning text-center">{items[1].name}</h5>
                  <p className="card-text text-secondary">
                    <ul className="list-unstyled p-2">
                      <li>rotation period: {items[1].rotation_period}</li>
                      <li>orbital period: {items[1].orbital_period}</li>
                      <li>diameter: {items[1].diameter}</li>
                      <li>climate: {items[1].climate}</li>
                      <li>gravity: {items[1].gravity}</li>
                      <li>terrain: {items[1].terrain}</li>
                    </ul>
                  </p>
                  <div className=" text-center">
                    <a href="#" className="btn btn-warning " onClick={More()}>Learn More</a>
              <a href="#" className="btn btn-warning m-2" onClick={addFavorite()}>♡</a>
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
