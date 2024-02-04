import { create } from "apisauce";

const api = create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

api.addResponseTransform(response => {
    if ( !response.ok ){
        throw response
    }
})

export default api;