import React from 'react'
import Search from './Search'

import {getProducts} from '../../services/server'

class SearchContainer extends React.Component {

     state = {
          products: [],
          page: 1
     }

     componentDidMount(){
          
          console.log("this.props,aaaa->",this.props);
          const searchParams = new URLSearchParams(this.props.location.search)
          const a = searchParams.get("a")
          const p = searchParams.get("p")
          console.log("a",a);
          console.log("b",p)
          
          getProducts({params:{name:a, page:p, limit:12}}).then(({data})=>{
               this.setState({
                    products: data.data.docs,
                    page:p
               })
          })

     }


     getProducts = () => {
         
          const searchParams = new URLSearchParams(this.props.location.search)
          const a = searchParams.get("a")
          const p = searchParams.get("p")
          getProducts({params:{name:a, page:p, limit:12 }}).then(({data})=>{
               this.setState({
                    products: data.data.docs,
                    page: p
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