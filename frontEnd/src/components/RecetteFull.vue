<template>
  <div class="recetteFull">
      <h2> {{this.recetteDetail.title}} </h2>
      <div id="divImg">
        <img id="img" :alt="title" :src="img">
      </div>
      <i v-on:click="checkLike" :class="{'heart icon': liked, 'heart outline icon': !liked}"></i>
      <p> {{this.recetteDetail.txt}} </p>
      <div class="comments" v-if="comments">
        <p> {{this.recetteDetail.comments}} </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecetteFull',
  props:{
    /*title:{type:String, required:true},
    img:{type:String, required:true},
    txt:{type: String, required:true},
    like:{type:Boolean, required:true},
    author:{type: String, required:true},
    comments:{type: String, required:false},*/
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
  } // watch : indiquer un champs qui fait partie des props (recette) et on lui associe une fonction qui se lance dès qu'une modif est faite
}
</script>

<style scoped>

</style>