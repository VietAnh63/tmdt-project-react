import React from 'react'
import Detail from './Detail'
import _ from "lodash"
import { getDetail,getCommentProduct, addCommentProduct} from '../../services/server'

const inputForm = {
     name: "",
     mail: "",
     details: ""
}

class DetailContainer extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               detailProduct:"",
               commentProducts: [],
               inputValueForm: inputForm
          }
     }

     async componentDidMount() {
        
          const id = this.props.match.params.id
          var detailProduct = await getDetail(id,{}).then(({data})=>{
               console.log("data detail",data.data);
               return data.data
          })

          var commentProducts = await getCommentProduct(id, {}).then(({data})=>{
               return data.data.docs
          })
          this.setState({
               detailProduct,
               commentProducts
          })
     }

     onChangeInput = (e) => {
          //let name = e.target.name
          //let val = e.target.value
          const { name, value } = e.target;
          this.setState({inputValueForm:{...this.state.inputValueForm, [name]:value}})
          console.log(this.state.inputValueForm)
     }

     onSubmit = async (e) => {
          console.log("DD")
          e.preventDefault()
          const {inputValueForm} = this.state
          console.log(inputValueForm)
          const id = this.props.match.params.id
          console.log(id)
          await addCommentProduct(id, inputValueForm)
          console.log("THEEM THANH CONG")
          getCommentProduct(id,{}).then(({data})=>{
               this.setState({
                    commentProducts:data.data.docs,
                    inputValueForm:inputForm
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
          return <Detail {...this._extract()}/>
     }
}

export default DetailContainer