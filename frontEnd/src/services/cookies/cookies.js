export default {
    // Chercher un cookie existant
    getCookie : (cname) => { // cname : nom cookie qu'on veut récupérer
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie); // récupère cookie et va les décoder, les convertir de json à String
        var ca = decodedCookie.split(';'); //split retourne un tableau avec un cookie entre points virgules par case
        for(var i=0 ; i<ca.length ; i++){
            var c = ca[i];
            while (c.charAt(0) == ' ') {// charAt : prendre le premier caractere
                c = c.substring(1); // enleve le premier caractere de la chaine
            }
            if (c.indexOf(name) == 0) { // recherche dans la chaine de caractere et retourne l'index du début du nom, == 0 c'est au début de la chaine et on s'assure que le nom y est et qu'il est au début de la chaine
                return c.substring(name.length, c.length); // enleve le nom et le = du cookie, on garde la valeur du cookie
            }
        }
        return ""; // si cookie recherché n'est pas trouvé
    },
    // créer un cookie ou modifier un cookie
    setCookie : (cname, cvalue, exdays) => { // nom, valeur, temps avant expiration en jour
        var d = new Date(); // timestamp
        d.setTime(d.getTime() + (exdays*24*60*60*1000)); // change valeur de d par une autre donnée en argument, change en ms. d contient le timestamp auquel le cookie est sensé expirer
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    // supprimer un cookie
    deleteCookie : (cname) => {
        document.cookie = cname + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    }

}