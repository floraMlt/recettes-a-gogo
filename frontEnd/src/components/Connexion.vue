<template>
  <div class="connexion">
      <h2 class="title"> Connexion </h2>
      <InputAuth titreInput="Pseudo" ref="pseudoInput"/>
      <InputAuth titreInput="Mot de passe" ref="mdpInput"/>
      <button v-on:click="validForm" class="valider"> Valider </button>
      <p v-if="errorState">Désolé, la connexion a échoué</p>
      <!-- <router-link :to="{name: 'ListeRecette'}">Se connecter</router-link> -->
  </div>
</template>

<script>
import InputAuth from '@/components/InputAuth.vue'
import UserApi from '@/services/api/user.js'
import CookieService from '@/services/cookies/cookies.js'

export default {
  name: 'Connexion',
  components:{
    InputAuth
  },
  props:{
  },
  data () {
    return {
      errorState: false
    }
  },
  methods:{
      async validForm() {
        // FAIRE VERIFS A CET ENDROIT sur pseudo et mdp
        var result = await UserApi.login(this.$refs.pseudoInput.valInput, this.$refs.mdpInput.valInput)
        if(result.status == 201) {
          this.$parent.$parent.idUser = result.data.idUser
          CookieService.setCookie("token", result.data.token, 30)
          this.$router.push({name:'ListeRecette'})
        } else {
          this.error()
        }
      },
      error() {
        this.errorState = true;
        setTimeout(() => {
          this.errorState = false;
        }, 5000);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.valider {
  border: #554d4bb3 0.3px solid;
  background-color: white;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  font-family: "GravityBook";
}
.title {
  font-family: "VladimirScript";
  font-weight: lighter;
  font-size: 2.8em;
}
.connexion {
  display: flex;
  flex-direction: column;
}

</style>