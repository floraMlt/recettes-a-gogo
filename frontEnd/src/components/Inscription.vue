<template>
  <div class="inscription">
      <h2 class="title"> Inscription </h2>
      <InputAuth titreInput="Pseudo" typeInput="text" ref="pseudoInput"/>
      <InputAuth titreInput="Mot de passe" typeInput="password" ref="mdpInput"/>
      <button v-on:click="validForm" class="valider"> Valider </button> 
      <p v-if="errorState">Désolé, l'inscription n'a pas marché</p>
  </div>
</template>

<script>
import InputAuth from '@/components/InputAuth.vue'
import UserApi from '@/services/api/user.js'
import CookieService from '@/services/cookies/cookies.js'

export default {
  name: 'Inscription',
  components:{
    InputAuth
  },
  props:{
  },
  data(){
    return {
      errorState: false
    }
  },
  methods:{
      async validForm() {
        // FAIRE VERIFS A CET ENDROIT sur pseudo et mdp
        var result = await UserApi.create(this.$refs.pseudoInput.valInput, this.$refs.mdpInput.valInput)
        if(result.status == 201) {
          this.$parent.$parent.idUser = result.data.idUser
          CookieService.setCookie("token", result.data.token, 30)
          this.$router.push({name:'ListeRecette'})
        } else {
          this.error()
        }
          //this.$refs.pseudoInput.valInput pour aller chercher la valeur de l'input
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

<style scoped>
.valider {
  border: #554d4bb3 0.3px solid;
  background-color: white;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  font-family: 'GravityBook';
}
.title {
  font-family: "VladimirScript";
  font-weight: lighter;
  font-size: 2.8em;
}
.inscription {
  display: flex;
  flex-direction: column;
}
</style>