import Http from "./Http"
import ApiConfig from "../config/api"
import axios from 'axios'
export const getProducts = function(config){
     return Http.get("/products", config )
}

export const getDetail = function(id,config){
     return Http.get("/products/" + id, config)
}

export const getCommentProduct = function(id, config) {
     return Http.get("/products/"+id+"/comments", config)
}

export const addCommentProduct = function(id, data = {}, config = {}) {

     // return Http.post(`/products/${id}/comments`, data, config);
     console.log("data=>",data)
     return axios.post(
          ApiConfig.BASE_URL_API +`/products/${id}/comments`, data, config
        ).catch((err)=>{
             console.log(err.toJSON())
        })
   };

