import React from 'react'
import Detail from './Detail'
import { getDetail, getCommentProduct, addCommentProduct } from '../../services/server'
import _ from 'lodash'
const inputForm = {
     name: "",
     email: "",
     content: ""
}

class DetailContainer extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               detailProduct: "",
               commentProducts: [],
               inputValueForm: inputForm
          }
     }

     async componentDidMount() {

          const id = this.props.match.params.id
          var detailProduct = await getDetail(id, {}).then(({ data }) => {
               console.log("data detail", data.data);
               return data.data
          })

          var commentProducts = await getCommentProduct(id, {}).then(({ data }) => {
               return data.data.docs
          })
          this.setState({
               detailProduct,
               commentProducts
          })
     }

     onChangeInput = (e) => {
          e.persist()
          _.debounce((e) => {
               var name = e.target.name
               var val = e.target.value
               this.setState({ inputValueForm: { ...this.state.inputValueForm, [name]: val }})
          }, 3000, true)(e)
          // let name = e.target.name
          // let val = e.target.value
          // this.setState({ inputValueForm: { ...this.state.inputValueForm, [name]: val } })
     }

     onSubmit = async (e) => {
          e.preventDefault()
          e.target.reset()
          const { inputValueForm } = this.state
          const id = this.props.match.params.id
          await addCommentProduct(id, inputValueForm)
          getCommentProduct(id, {}).then(({ data }) => {
               this.setState({
                    commentProducts: data.data.docs,
                    //inputValueForm:inputForm
               })
          })
     }

     _extract = () => ({
          detailProduct: this.state.detailProduct,
          commentProducts: this.state.commentProducts,
          inputValueForm: this.state.inputValueForm,
          onChangeInput: this.onChangeInput,
          onSubmit: this.onSubmit
     })


     render() {
          return <Detail {...this._extract()} />
     }
}

export default DetailContainer