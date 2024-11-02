import React from 'react';
import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
const Cards = () => {

  const {category} = useParams()
  const data = useLoaderData()
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    if(category){
      const filterd = [...data].filter(dta => dta.category === category) 
    setCards(filterd)
    }   
    else{
      setCards(data.slice(0,6))
    }
                    
                    },[data,category])
                    
      const handleViewAll = () => {
        if(cards.length === 6){
          setCards(data)
        }
      }              
                    return (
                      <>
                                        <div className='grid grid-cols-3 gap-10 text-center'>
                                          {cards.map((card,idx) => <p key={idx} className='border rounded-xl text-4xl text-purple-700 bg-red-950 font-medium py-10'>{card.name}</p>)}                  
                                        </div>
                                       <NavLink to={'/coffeeList'}><button className='btn btn-accent' onClick={handleViewAll}>View All</button></NavLink>
                                        </>
                    );
};

export default Cards;

// {
//   "id": 3,
//   "name": "Latte",
//   "image": "https://i.ibb.co.com/rvFz4NW/unnamed-be2775a1-186d-40c1-b094-488fa5fa4050.webp",
//   "category": "Brewed Coffee",
//   "ingredients": [
//       "Espresso",
//       "Steamed Milk",
//       "Milk Foam"
//   ],
//   "nutrition_info": {
//       "calories": 150,
//       "fat": 7,
//       "carbohydrates": 15,
//       "protein": 8
//   },
//   "origin": "Italy",
//   "type": "Creamy",
//   "description": "A smooth and creamy coffee made with espresso and a generous amount of steamed milk.",
//   "making_process": "Brew a shot of espresso. Steam milk to create a velvety texture. Pour the steamed milk over the espresso, leaving a small amount of foam to top. Optionally, add flavored syrups.",
//   "rating": 4.8,
//   "popularity": 95
// }