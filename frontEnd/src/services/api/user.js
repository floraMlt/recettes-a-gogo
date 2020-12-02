import {api} from './api'

export default {
    create : async (pseudoUser, mdpUser) => {
        return await api.post("user", {user : {pseudo : pseudoUser, mdp : mdpUser}}) // requête POST(complément URL de départ, objet qui va contenir les champs à mettre dans le body)
    },
    delete : async (idUser, token) => {
        return await api.delete("user", {user : {id:idUser}}, {headers : {"Authorization" : "Bearer " + token}})
    },
    login : async (pseudoUser, mdpUser) => {
        return await api.post("user/auth", {user : {pseudo : pseudoUser, mdp : mdpUser}})
    },
    edit : async (idUser, pseudoUser, token) => {
        return await api.put("user", {user : {id:idUser, pseudo:pseudoUser}}, {headers : {"Authorization" : "Bearer " + token}})
    },
    autoAuth : async (token) => {
        return await api.post("user/autoAuth", {}, {headers : {"Authorization" : "Bearer " + token}})
    }
    
    /*,
    logAuto : async () => {

    }*/
    // une methode avec cookie
    // prend token en arg

}