<template>
  <div class="hello">
    Page2
    <p>{{ this.$route.params.id }}</p>
    <p>{{ txtRecette }}</p>
  </div>
</template>

<script>
 //import RecetteAPI from '@/services/api/recette.js'
 //import UserInfo from ''

export default {
 
  data() {
    return {
      txtRecette : ""
    }
  },
  mounted() {
    /*  
    const recette = ReceteAPI.read(UserInfo.id, this.$route.params.id, tUserInfo.token)
    this.txtRecette = recette.txtRecette;*/
  }
}
</script>

<style>
</style>