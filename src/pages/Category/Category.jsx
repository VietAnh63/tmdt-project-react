import React, { Component } from 'react'
import {ProductItem} from "../../components"
 

export default class Category extends Component {
     render() {
          const { products, name } = this.props
          return (
               <div>
               <div className="products">
                    <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{name}</span></div>
                    <div className="product-list card-deck">
                         {products && products.map((product) => {
                              return  <ProductItem key={product._id} item={product} />
                         })}
                    </div>
               </div>
               {/*	End List Product	*/}
          </div>

          )
     }
}
