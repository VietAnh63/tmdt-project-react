import React from 'react'
import { ProductItem } from "../../components"
class Search extends React.Component {
     render() {
          const { products } = this.props
          console.log(products);

          return <div>
               <div className="products">
                    <div id="search-result">Kết quả tìm kiếm với sản phẩm <span></span></div>
                    <div className="product-list card-deck">
                         {products && products.map((product) => {
                              return  <ProductItem key={product._id} item={product} />
                         })}
                    </div>
               </div>
               {/*	End List Product	*/}
               <div id="pagination">
                    <ul className="pagination">
                         <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                         <li className="page-item active"><a className="page-link" href="#">1</a></li>
                         <li className="page-item"><a className="page-link" href="#">2</a></li>
                         <li className="page-item"><a className="page-link" href="#">3</a></li>
                         <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                    </ul>
               </div>
          </div>

     }
}

export default Search