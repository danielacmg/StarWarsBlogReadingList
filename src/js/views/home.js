import React, {useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"

import { Character } from "../component/character";
import { Vehicle } from "../component/vehicle";
import { Planet } from "../component/planet";

export const Home = () => {
  

  return (
    <div className="mt-5 bg-secondary"> 
      <Character></Character>
      <Vehicle></Vehicle>
      <Planet></Planet>
    </div>

  );



  };
