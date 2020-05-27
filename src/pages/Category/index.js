import React from 'react'
import Category from './Category'
import _ from 'lodash'
import {getDetailCategory,getProductsByCategory, getCategories} from "../../services/server"
class CategoryContainer extends React.Component {
     state = {
          products:[],
          name: null
     }
     _exTract = () => ({
           products: this.state.products,
           name: this.state.name
     })
     async componentDidMount(){
          //const {id} = this.props.match.params
          const id = _.get(this.props, "match.params.id")
          const name = await getDetailCategory(id).then(({data})=>{
               console.log(data.data);
               
               return data.data.name
          })
          const products = await getProductsByCategory(id).then(({data})=>{
               return data.data.docs
          })
          this.setState({
               name,
               products
          })
     }
  
     async componentDidUpdate (prevProps){
          const id = _.get(this.props, "match.params.id")
          const oldId = _.get(prevProps, "match.params.id")
          if (id !== oldId){
               const id = _.get(this.props, "match.params.id")
               const name = await getDetailCategory(id).then(({data})=>{
                    console.log(data.data);
                    
                    return data.data.name
               })
               const products = await getProductsByCategory(id).then(({data})=>{
                    return data.data.docs
               })
               this.setState({
                    name,
                    products
               })
          }

     }
     render(){
          return <Category {...this._exTract()}/>
     }
}

export default CategoryContainer