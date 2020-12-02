<template>
  <div class="deconnexion">
    <button v-on:click="deconnect" class="decoButton"> Se déconnecter </button>
  </div>
</template>

<script>
import CookieService from '@/services/cookies/cookies.js'

export default {
  name: 'Deconnexion',
  components:{},
  methods:{
    async deconnect() {
        CookieService.deleteCookie("token")
        this.$router.push({name:'Auth'})
    }
  }
}
</script>

<style scoped>
.decoButton {
  border: #554D4B 0.3px solid;
  background-color: rgba(85,77,75,0.8);
  color: #F8F1EB;
  border-radius: 50px;
  font-family: "GravityBook";
  margin: auto;
}

.deconnexion {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
}

</style>