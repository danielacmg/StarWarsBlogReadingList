import React from 'react'
import imgNotFound from '../../img/404.png';

export const NotFound = () => {
  return (
    <div className="text-center">
        <h1 className="text-center text-warning">Nothing, there is...</h1>
        <figure>
            <img src={imgNotFound} alt="Page not found - Meditating Yoda picture" />
            <figcaption>Yoda's meditation - by IAmNoxArt</figcaption>
        </figure>
    </div>
  )
}


