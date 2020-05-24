import Http from "./Http"

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
     //console.log("data=>",data)
     return Http.post(`/products/${id}/comments`, data, config);
   };

