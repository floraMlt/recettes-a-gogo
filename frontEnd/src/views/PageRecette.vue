<template>
    <div class="PageRecette">
      <div class="titleDeco">
        <h1 id="logo"> Recettes à gogo </h1>
        <Deconnexion class="deconnect"/>
      </div>
      <BarreNav/>
      <div class="whiteRect">
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
      /*txtRecette : "",
      titleRecette : "",
      imgRecette : "",
      likeRecette : "",
      commentRecette : "",*/
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
      /*this.txtRecette = this.recette.txt;
      this.titleRecette = this.recette.title;
      this.imgRecette = this.recette.img;
      this.likeRecette = this.recette.like;
      this.commentRecette = this.recette.comments;*/
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
#logo {
  margin-left: 13%;
}
/*.allRecipes{
  margin-top:10%;
}
.whiteRect {
  background:#fff9f0;
  width:60%;
  display:flex;
  flex-wrap:wrap;
  margin-left:auto;
  margin-right: auto;
}*/
</style>