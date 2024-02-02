import api from "./Api";

export async function GetPokeInfo(pokeName){

    try{
        const response = await api.get(pokeName)
       
        return response 
    }

    catch(error){
        return error
    }
} 

export async function GetPokenames(){

    try{
        const response = await api.get()
       
        return response 
    }

    catch(error){
        return error
    }
} 
