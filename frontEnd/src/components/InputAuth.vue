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
  flex-direction: column;
  align-items: flex-start;
  color: black;
  margin-bottom: 7%;
}
.titleInput {
  margin-bottom: 0%;
}
.input {
  background-color: #F2F2F2;
  border: #554d4b3d 0.1px solid;
  border-radius: 3px;
}
</style>