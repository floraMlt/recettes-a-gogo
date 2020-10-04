<template>
  <div id="app">
    <!--<div id="nav">
      <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view name="default" />
  </div>
</template>

<script>
import CookieService from '@/services/cookies/cookies.js'
import UserApi from '@/services/api/user.js'

export default {
  name: 'App',
  data() {
    return {
      idUser : null
    }
  },
  mounted() {
    this.isToken()
  },
  methods: {
    async isToken() {
      var token = CookieService.getCookie("token")
      if(token != "") { // s'il y a un token
          var resultAuth = await UserApi.autoAuth(token)
          if(resultAuth.status == 201){ // si le token est valide
            this.idUser = resultAuth.data.idUser
            CookieService.setCookie("token", resultAuth.data.token, 30) 
            this.$router.push({name:'ListeRecette'})
        } else { console.log("Token non valide"); this.$router.push({name:'Auth'});}
      }
    }
  }
}
// mounted qui appelle pour cookie pour login direct sans remettre mdp et pseudo
</script>


<style>
@font-face {
	font-family: 'VladimirScript';
	src: url('./fonts/VLADIMIR.TTF');
}
@font-face {
	font-family: 'GravityBook';
	src: url('./fonts/Gravity-Book.otf');
}
@font-face {
	font-family: 'GravityRegular';
	src: url('./fonts/Gravity-Regular.otf');
}
*{
box-sizing: border-box;
}
body {
  background-color: #F8F1EB;
}
#app {
  font-family: "GravityBook", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #554D4B;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #554D4B;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
