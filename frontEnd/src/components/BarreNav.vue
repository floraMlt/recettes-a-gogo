<template>
    <div class="barreNav">
        <div id="nav">
            <router-link :to="{name: 'Home'}">Accueil</router-link>
            <div class="separator"> | </div>
            <router-link to="/about">Ma boîte à outils</router-link>
            <div class="separator"> | </div>
            <router-link to="/about">A propos</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BarreNav'
}
</script>

<style>
#nav a {
  font-family: "GravityBook";
  color: black;
}

.separator {
    color : white;
}

/*.nav{
  
}*/
</style>