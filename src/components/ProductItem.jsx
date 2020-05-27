import React from 'react'
import {getImages} from "../shared/utils"
import {NavLink} from 'react-router-dom'



//pass {item} as item = item.item --> Jump 1 level
const ProductItem = ({item})=>{
     //console.log("item", item)
     return (<><div className="product-item card text-center">
               <NavLink to={"/detail/" + item._id } state={{ id: item._id }}><img src= {getImages(item.image)}/></NavLink>
               <h4><NavLink to={"/detail/" + item._id } state={{ id: item._id }}>{item.name}</NavLink></h4>
               <p>Giá Bán: <span>{item.price}VND</span></p>
          </div>
     </>)
}

export default ProductItem;