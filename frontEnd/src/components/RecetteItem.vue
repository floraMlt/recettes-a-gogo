<template>
  <div class="recetteItem">
      <!--<h2  v-on:click="checkLike" :class="{'likeColor': liked, 'dislikeColor': !liked}" > {{title}} </h2> -->
      <div id="divImg">
        <img id="img" :alt="title" :src="img" v-on:click="goRecette">
      </div>
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

.likeColor {
    color:blue;
}

.dislikeColor {
    color:red;
}

.recetteItem {
  width:80%;
  display:flex;
  border:0.9px #554D4B solid;
  border-radius:5%;
  margin:1%;
  margin-left:auto;
  margin-right:auto;
  flex-direction: column;
  text-align: center;
  font-family: "GravityBook";
}

#img {
  object-fit: cover;
  width:17em;
  height:12em;
  border-radius: 5%;
}

img {
    color:grey;
}

.titleLike {
  display : flex;
  justify-content: space-around;
  align-items: center;
}

#titleRecette {
  margin-top : auto;
  margin-bottom: "auto";
  font-family: "GravityBook";
}

</style>