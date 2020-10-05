<template>
  <div class="recetteFull">
      <div class="titleLike">
        <h2 class="title"> {{this.recetteDetail.title}} </h2>
        <i id = "likeHeart" v-on:click="checkLike" :class="{'heart icon': liked, 'heart outline icon': !liked}"></i>
      </div>
      <!--<img class="img" :alt="title" :src="img">-->
      <div class="imgIngredients">
        <img class="img" :alt="title" src="/image/crepes.jpg">
        <div class="ingredients">
          <p class="titleIngredient">Ingrédients</p>
          <ul class="listIngredients">
            <!-- <div v-for="ingredient in ingredients" :key="recette.ingredients" class="listIngredients">
                <p :ingr="ingredient"/>
            </div> -->
            <li>2 avocats (pelés et avec les noyaux retirés)</li>
            <li>le jus d'un citron</li>
            <li>¼ de concombre, coupé grossièrement</li>
            <li>1 petite tomate, coupée</li>
          </ul>
        </div>
      </div>
      <p class="txt"> {{this.recetteDetail.txt}} </p>
      <div class="comments" v-if="comments">
        <p> {{this.recetteDetail.comments}} </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecetteFull',
  props:{
    recetteDetail:{type: Object, required:true}
  },
  data() {
      return {
          liked : this.recetteDetail.like
      }
  },
  methods: {
    checkLike() { this.liked = !this.liked; 
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: circle;
}
.title {
  font-size: 3em;
  font-weight: lighter;
  height:1em;
  font-family: "VladimirScript";
  margin: 0;
}
.titleLike {
  display : flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
  width: 100%;
}
#likeHeart {
  margin-top: 2.5%;
  margin-left: 2.5%;
  margin-right: 0;
}
.imgIngredients {
  display:flex;
  justify-content: center;
  align-items: center;
}
.img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
}
.ingredients {
  text-align: left;
  color: black;
}
.titleIngredient{
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
}
.txt {
  background-color: #FFFAF7;
  border: #554d4b3d 0.1px solid;
  border-radius: 5px;
  width: 76%;
  display: flex;
  justify-content: flex-start;
  font-size: 1em;
  text-align: left;
  margin-top: 1.8%;
  padding-left: 1%;
}
.recetteFull {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>