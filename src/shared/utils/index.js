import ApiConfig from "../../config/api"

export function getImages(url){
     return `${ApiConfig.BASE_URL}/assets/uploads/${url}`;
}