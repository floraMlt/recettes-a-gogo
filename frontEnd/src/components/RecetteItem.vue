<template>
  <div class="recetteItem">
      <!--<h2  v-on:click="checkLike" :class="{'likeColor': liked, 'dislikeColor': !liked}" > {{title}} </h2> -->
      <img id="img" :alt="title" :src="img" v-on:click="goRecette">
      <div class="titleLike">
        <h3 id="titleRecette" v-on:click="goRecette"> {{title}} </h3>
        <i id = "likeHeart" v-on:click="checkLike" :class="{'heart icon': liked, 'heart outline icon': !liked}"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecetteItem',
  props:{
    title:{type:String, required:true},
    img:{type:String, required:true},
    like:{type:Boolean, required:true}
  },
  data() {
      return {
          liked : this.like
      }
  },
  methods: {
    checkLike() { this.liked = !this.liked; 
    },
    goRecette() {
      this.$router.push('recette/' + this.title);
    }
  }
}
</script>

<style scoped>
/*.likeColor {
    color:blue;
}
.dislikeColor {
    color:red;
}*/
.recetteItem {
  font-family: "GravityBook";
  text-align: center;
  width: 240px;
  border: 0.9px #554d4b59 solid;
  border-radius: 5%;
  margin: 1%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5%;
  display: flex;
  flex-direction: column;
}
#img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
}
img {
    color:grey;
}
.titleLike {
  display : flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
}
#titleRecette {
  font-family: "GravityBook";
  font-weight: lighter;
  margin: 4% 0 4% 4%;
}
#likeHeart {
  margin-top: 1%;
  margin-right: 4%;
  margin-bottom: 4%;
}
</style>