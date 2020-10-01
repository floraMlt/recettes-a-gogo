<template>
    <div class="whiteRect">
      <div class="DetailRecipe">
          <!-- <RecetteFull :title="this.recette.title" :img="this.recette.img" :like="this.recette.like" :txt="this.recette.txt" :comments="this.recette.comments"/> -->
        <RecetteFull :recetteDetail="this.recette"/>
      </div>
      <!-- <p>{{ this.$route.params.id }}</p> -->
    </div>
</template>

<script>
import RecetteFull from '@/components/RecetteFull.vue'
import RecetteApi from '@/services/api/recettes.js'
import CookieService from '@/services/cookies/cookies.js'

export default {
  name: 'PageRecette',
  components: {
    RecetteFull
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

.allRecipes{
  margin-top:10%;
}

.whiteRect {
  background:#fff9f0;
  width:60%;
  display:flex;
  flex-wrap:wrap;
  margin-left:auto;
  margin-right: auto;
}

</style>