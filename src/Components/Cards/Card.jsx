import React from 'react'
import "./Card.css"
import imges from "../../Assets/Images/placeholder.png"
function Card({data}) {
  return (
    <div className='CardDiv'>
            <img 
            src={data?.images["Poster Art"]?.url} 
            alt={data?.title}
            onError={(e) => {
                e.target.src = imges;
             }}
              />      
    <span>{data?.title}</span>
    </div>
  )
}

export default Card 