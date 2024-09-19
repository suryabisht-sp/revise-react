import React from 'react'
import "./stylesCard.css"
export const Cards = ({items}) => {
  return (
    <div className='card-small'>
<div>{items.icon}</div>
   <h3>{items.title}</h3>
   <span className='card-small-span'>{items.description}</span>
    </div>
  )
}
