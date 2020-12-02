import {api} from './api'

export default {
    create : async (idUser, titleRecipe, txtRecipe, token) => {
        return await api.post("recipe", {user : {id:idUser}, recipe: {title:titleRecipe, txt:txtRecipe}}, {headers : {"Authorization" : "Bearer " + token}}) // requête POST(complément URL de départ, objet qui va contenir les champs à mettre dans le body)
    },
    delete : async (idUser, token) => {
        return await api.delete("recipe", {user : {id:idUser}}, {headers : {"Authorization" : "Bearer " + token}})
    },
    read : async (idUser, titleRecipe, token) => {
        return await api.post("recipe/read", {user : {id:idUser}, recipe: {title:titleRecipe}}, {headers : {"Authorization" : "Bearer " + token}})
    },
    edit : async (idUser, titleRecipe, txtRecipe, token) => {
        return await api.put("recipe", {user : {id:idUser}, recipe: {title:titleRecipe, txt:txtRecipe}}, {headers : {"Authorization" : "Bearer " + token}})
    },
    getAll : async (idUser, token) => {
        return await api.post("recipe/all", {user : {id:idUser}}, {headers : {"Authorization" : "Bearer " + token}})
    }
}