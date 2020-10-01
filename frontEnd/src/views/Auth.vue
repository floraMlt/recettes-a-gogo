<template>
  <div class="auth">
    <h1>Authentification</h1>
    <div class="authRect">
    <h2 class="txt"> Avant tout, il faut se connecter ! </h2>
      <div class="form">
          <Connexion class = "connexionForm"/>
          <Inscription class = "inscriptionForm"/>
      </div>
    </div>
  </div>
</template>

<script>
import Connexion from '@/components/Connexion.vue'
import Inscription from '@/components/Inscription.vue'

export default {
  name: 'Auth',
  components: {
    Connexion,
    Inscription
  }
}
</script>

<style>

.form {
    display: flex;
    justify-content: space-around;
}

.auth {
  background-color: #F8F1EB;
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
}

.authRect {
  background-color: white;
  width: 75%;
  border-radius: 30px;
  margin-left: auto;
  margin-right:auto;
}

.txt {
  font-size: 1.8em;
  color: #554D4B;
}

.inscriptionForm {
  border-style: none none none dashed;
}

</style>