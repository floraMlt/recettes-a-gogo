<template>
  <div class="inputAuth">
      <p class="titleInput"> {{titreInput}} </p>
      <input class="input" v-model="valInput">
  </div>
</template>

<script>
export default {
  name: 'InputAuth',
  props:{
    titreInput:{type:String, required:true}
  },
  data() {
      return{
        valInput: ""
      }
  }
}
</script>

<style scoped>
.inputAuth {
  display: flex;

}
</style>