import React from 'react'
import "./listItem.css"
import logo  from "../../../public/coffee-thumbnail.jpg"

const ListItem = ({post}) => {
  return (
<div  className="item-section hoverEffect">
        <div className="item-container">
             <div className="item-image ">
                <img src={logo} alt="" />
             </div>
             
             
             <div className="item-title">
                 <h3>{post.description}</h3>              
             </div>
        </div>       
    </div>
  )
}

export default ListItem
