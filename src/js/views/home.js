import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"

import { CharacterList } from "../component/characterList";
import { VehicleList } from "../component/vehicleList";
import { PlanetList } from "../component/planetList";

export const Home = () => {
  

  return (
    <div className="mt-5 bg-secondary"> 
      <CharacterList/>
      <VehicleList/>
      <PlanetList/>
    </div>

  );



  };
