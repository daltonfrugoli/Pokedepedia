import api from "./Api";

export async function GetPokeInfo(pokeName){

    try{
        const response = await api.get('pokemon/' + pokeName)
       
        return response 
    }

    catch(error){
        return error
    }
} 

export async function GetPokenames(){

    try{
        const response = await api.get('pokemon?limit=100000&offset=0')
       
        return response 
    }

    catch(error){
        return error
    }
} 


