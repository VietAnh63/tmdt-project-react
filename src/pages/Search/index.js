import React from 'react'
import Search from './Search'

import {getProducts} from '../../services/server'

class SearchContainer extends React.Component {

     state = {
          products: []
     }

     componentDidMount(){
          const searchParams = new URLSearchParams(this.props.location.search)
          const q = searchParams.get("q")

          getProducts({params:{name:q, limit:20}}).then(({data})=>{
               this.setState({
                    products: data.data.docs
               })
          })

     }


     getProducts = () => {
          const searchParams = new URLSearchParams(this.props.location.search)
          const q = searchParams.get("q")

          getProducts({params:{name:q, limit:20}}).then(({data})=>{
               this.setState({
                    products: data.data.docs
               })
          })
     }
     componentDidUpdate(prevProps,prevState ){
          if(prevProps.location.search !== this.props.location.search){
               this.getProducts()
          }
        
     }


     _exTract = () => ({
          products: this.state.products
     })

     render(){
          console.log(this.state.products);
          
          return <Search {...this._exTract()}/>
     }
}

export default SearchContainer