<template>
  <div class="home">
    <h1> Recettes à gogo </h1>
    <img class="lines" src="../assets/cahier.png" alt="lignes de cahier">
    <div class="contentHome">
      <div class="buttonGo">
        <p id="bienvenue"> Bienvenue sur Recettes à gogo ! <br></p>
        <p id="txtHome">Crée, modifie et reviens voir toutes les recettes que tu veux grâce au site. <br> 
        Alors, prêt.e ? </p>
        <div class="goRect">
          <router-link :to="{name: 'Auth'}" class="go">C'est parti !</router-link>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  background-color: #F8F1EB;
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
}
.contentHome {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: -45%;
}
.go {
 font-family: 'VladimirScript';
 font-size: 2.2em;
 font-weight: lighter;
 text-decoration: none;
 color:#554D4B;
}
.goRect {
  border: #554D4B 0.3px solid;
  border-radius: 50px;
  width: 18%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-right: 1%;
  margin-left: auto;
  margin-right: auto;
}
.lines {
  width: 60%;
  height: 60%;
  position: relative;
}
#bienvenue {
  font-size:1.7em;
  font-weight: bold;
}
#txtHome{
  width:25%;
  margin-left:auto;
  margin-right:auto;
  margin-top:2%;
  margin-bottom:3.5%;
}
</style>
