<template>
    <div class="PageRecette">
      <div class="titleDeco">
        <h1 id="logo"> Recettes à gogo </h1>
        <Deconnexion class="deconnect"/>
      </div>
      <BarreNav/>
      <div class="whiteRect">
        <div class="tools">
          <button v-on:click="newRecipe" class="decoButton">Nouvelle recette</button>
          <button v-on:click="changeRecipe" class="decoButton">Modifier</button>
          <button v-on:click="removeRecipe" class="decoButton">Supprimer</button>
        </div>
        <div class="DetailRecipe">
            <!-- <RecetteFull :title="this.recette.title" :img="this.recette.img" :like="this.recette.like" :txt="this.recette.txt" :comments="this.recette.comments"/> -->
          <RecetteFull :recetteDetail="this.recette"/>
        </div>
        <!-- <p>{{ this.$route.params.id }}</p> -->
      </div>
    </div>
</template>

<script>
import RecetteFull from '@/components/RecetteFull.vue'
import BarreNav from '@/components/BarreNav.vue'
import Deconnexion from '@/components/Deconnexion.vue'
import RecetteApi from '@/services/api/recettes.js'
import CookieService from '@/services/cookies/cookies.js'

export default {
  name: 'PageRecette',
  components: {
    RecetteFull,
    BarreNav,
    Deconnexion
  },
  data(){
    return {
      recette : {}
    }
  },
  mounted() {
    this.readRecipe()
  },
  methods : {
    async readRecipe(){
      var recetteResult = await RecetteApi.read(this.$parent.idUser, this.$route.params.title, CookieService.getCookie('token'))
      this.recette = recetteResult.data
    },
    async newRecipe() {
      console.log("new recipe")
      /*await RecetteApi.create(this.$parent.idUser, this.$route.params.title, this.$route.params.txt, CookieService.getCookie('token'))
      this.$router.push({name:'ListeRecette'})*/
    },
    async changeRecipe() {
        await RecetteApi.edit(this.$parent.idUser, this.$route.params.title, this.$route.params.txt, CookieService.getCookie('token'))
        this.$router.push({name:'PageRecette'})
    },
    async removeRecipe() {
        await RecetteApi.delete(this.$parent.idUser, CookieService.getCookie('token'))
        this.$router.push({name:'ListeRecette'})
    }
  }
}
</script>

<style>
.whiteRect {
  background:white;
  width:60%;
  border-radius: 3%;
  margin-left:auto;
  margin-right: auto;
  padding: 2% 0;
}
h1 {
  font-family: "VladimirScript";
  font-size: 4em;
  font-weight: lighter;
  color: #554D4B;
  margin: 0;
}
.titleDeco {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3%;
}
.deconnect {
  position: relative;
  margin-top: 1.2%;
  z-index: 2;
}
.decoButton {
  border: #554D4B 0.3px solid;
  background-color: rgba(85,77,75,0.8);
  color: #F8F1EB;
  border-radius: 50px;
  font-family: "GravityBook";
  margin: auto;
}
#logo {
  margin-left: 13%;
}
</style>