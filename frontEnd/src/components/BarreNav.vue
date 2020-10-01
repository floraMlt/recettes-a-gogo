<template>
    <div class="barreNav">
        <div id="nav">
            <router-link :to="{name: 'Home'}" class="pages">Accueil</router-link>
            <div class="separator"> | </div>
            <router-link to="/about" class="pages">Ma boîte à outils</router-link>
            <div class="separator"> | </div>
            <router-link to="/about" class="pages">A propos</router-link>
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
    margin-left: 2%;
    margin-right: 2%;
}

.barreNav {
  display: flex;
  justify-content: center;
}

.pages {
    width: 100%;
}

#nav{
  display: flex;
  justify-content: center;
  align-items: center; 
}
</style>