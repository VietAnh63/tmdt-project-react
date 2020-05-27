import React from 'react'
import { ProductItem } from "../../components"
import { LoaderProduct } from "../../components"

//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//import Loader from 'react-loader-spinner'
class Home extends React.Component {

  _renderProducts = (products, loading) => {
    //console.log(products);

    return products.map((product) => {
      return <ProductItem key={product._id} item={product} />
    })
  }
  render() {
    const { newProducts, featureProducts, loading } = this.props
    console.log(this.props)

    return <>
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <div className="product-list card-deck">
          {loading === false ? <LoaderProduct /> : this._renderProducts(newProducts, loading)}
        </div>
      </div>


      {/*	End Feature Product	*/}
      {/*	Latest Product	*/}
      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
        {loading === false ? <LoaderProduct /> : this._renderProducts(featureProducts, loading)}
        </div>
      </div>
    </>
  }
}
export default Home