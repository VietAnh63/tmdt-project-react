import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'



//pass {item} as item = item.item --> Jump 1 level
const LoaderProduct = () => {
     //console.log("item", item)
     return (<><div className="product-item card text-center">
          <Loader type="Puff"
               color="#00BFFF"
               height={100}
               width={100} />
     </div>
     </>)
}

export default LoaderProduct;