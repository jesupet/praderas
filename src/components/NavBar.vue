<template>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/"><img src="../assets/logo.png" alt="logo pradeas" class="logo"></a>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Bienvenido</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'proyecto'}">Proyecto</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'entorno'}">Entorno</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'lugar'}">Lugar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'faqs'}">Faqs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'conversemos'}">Conversemos</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
//import WhatsAppBtn from '../components/WhatsAppBtn.vue'

export default {
    name: "App",
    components: {
        //WhatsAppBtn,
    }
}

</script>


<style>

</style>