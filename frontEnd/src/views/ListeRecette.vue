<template>
    <div class="ListeRecette">
      <div class="titleDeco">
        <h1 id="logo"> Recettes à gogo </h1>
        <Deconnexion class="deconnect"/>
      </div>
      <BarreNav/>
      <div class="whiteRect">
        <h1 class="titre"> Mes recettes </h1>
        <div class="allRecipes">
          <div v-for="recette in recettes" :key="recette.title">
            <RecetteItem :title="recette.title" img="/image/crepes.jpg" :like="recette.like" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import RecetteItem from '@/components/RecetteItem.vue'
import BarreNav from '@/components/BarreNav.vue'
import Deconnexion from '@/components/Deconnexion.vue'
import RecetteApi from '@/services/api/recettes'
import CookieService from '@/services/cookies/cookies.js'

export default {
  name: 'ListeRecette',
  components: {
    RecetteItem,
    BarreNav,
    Deconnexion
  },
  data(){
    return { 
     activeLike:true,
     recettes:
      [
        //{title:"Crêpes", txt:"kdeoi", like:true},
        //{title:"Gratin de courgettes", txt:"odped", like:false},
        //{title:"Lasagnes", txt:"qpojs", like:true}
      ]
  }},
  mounted() {
    this.readAllRecipe()
  }, 
  methods:{
    changeActive() {
      this.activeLike = !this.activeLike
    },
    async readAllRecipe() {
      //console.log('IdUser Liste recette = ' + this.$parent.idUser)
      //console.log('token Liste recette = ' + CookieService.getCookie('token'))
      var resultRecettes = await RecetteApi.getAll(this.$parent.idUser, CookieService.getCookie('token'))
      this.recettes = resultRecettes.data
      //console.log('recettes tableau = ' + this.recettes)
    }
  }
}
</script>

<style>

.allRecipes{
  margin-top:10%;
  margin-left: auto;
  margin-right: auto;
}

.whiteRect {
  background:white;
  width:60%;
  border-radius: 3%;
  display:flex;
  flex-wrap:wrap;
  margin-left:auto;
  margin-right: auto;
  padding-top: 2%;
}

.titre {
  font-size: 3em;
  font-weight: lighter;
  height:1em;
  margin-left:auto;
  margin-right: auto;
  font-family: "VladimirScript";
}

h1 {
  font-family: "VladimirScript";
  color: #554D4B;
  font-size: 4em;
  font-weight: lighter;
}

.titleDeco {
  display: flex;
  padding-top: 3%;
  justify-content: center;
}

.deconnect {
  margin-right: 5%;
  z-index: 2;
}

#logo {
  margin-left: 18%;
  z-index: 1;
}

</style>