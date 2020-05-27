import React from 'react'

import { ProductItem } from "../../components"
import {withRouter, Redirect} from 'react-router-dom'
class Search extends React.Component {

     _renderPage = (e, pageNum) => {
          e.preventDefault()
          const searchParams = new URLSearchParams(this.props.location.search)
          const a = searchParams.get("a")
          console.log("this.props=>",this.props)
          const {history} = this.props
          history.push(`/search?a=${a}&p=${pageNum}`)
     }

     render() {
          const { products, page } = this.props
 

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
                         <li className="page-item"><a onClick={(e)=>this._renderPage(e,1)} className="page-link" href="#">1</a></li>
                         <li className="page-item"><a onClick={(e)=>this._renderPage(e,2)} className="page-link" href="#">2</a></li>
                         <li className="page-item"><a onClick={(e)=>this._renderPage(e,3)} className="page-link" href="#">3</a></li>
                         <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                    </ul>
               </div>
          </div>

     }
}

export default withRouter(Search)