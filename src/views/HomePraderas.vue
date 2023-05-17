<template>
  <WhatsAppBtn class="whatsapp fixed-button" :v-if="showButton"/>
  <div class="chile-map-cont">
    <img src="../assets/img/chile_map.png" alt="" class="chile-map">
  </div>
  <div class="pre-navbar">
    <p 
      class="pre-navbar-txt text-center">
      Este proyecto pertenece a:
      <a href="https://www.futuropatagonia.cl" target="_blank">Futuro Patagonia Inversiones</a>
    </p>
  </div>
  <div class="background-image">
    <NavBar/>
    <div class="container-fluid">
      <header class="header-container container">
        <div class="row header-text align-items-center">
          <div class="col-md-9 col-12">
            <div class="columna1-header text-start">
              <h1 class="titulo">Un lugar increíble, rodeado de <span class="titulo-verde">reservas naturales </span> y paisajes maravillosos.</h1>
              <p class="bajada">3km. de Río Mañihuales son parte del proyecto.</p>
              <GreenButton :to="{name: 'home', hash: '#'+'proyectos'}" :buttonText="'Ver masterplan'" class="light-green-btn"/>
              <GreenButton :to="{name: 'home', hash: '#'+'proyectos'}" :buttonText="'Descargar brochure'"/>
            </div>
          </div>
          <div class="col-md-3 col-12 columna2-header row">
              <a href="https://www.instagram.com/futuropatagonia/" target="_blank" class="insta-icon"><img src="../assets/icons/instagram.png" alt=""></a>
              <a href="https://www.facebook.com/Futuropatagonia" target="_blank" class="fb-icon"><img src="../assets/icons/facebook.png" alt="" ></a>
          </div>
        </div>
      </header>
    </div>
  </div>
  <div class="bg-green">
    <section id="section1" class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-4">
          <img src="../assets/img/aysen_img.png" alt="" class="landscape-img img-fluid">
        </div>
        <div class="col-12 col-lg-8 desc-text">
          <p class="pre-titulo">Ese lugar soñado que esperabas</p>
          <h2>Praderas de Mañihuales</h2>
          <img src="../assets/icons/white_wave.png" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </section>
  </div>
  
<!--VIDEO-->
  <div id="video" class="container text-center">
    <p class="pre-titulo black-font">plenitud, majestuosidad y belleza natural</p>
    <h2 class="green-font">Conoce más de Mañihuales</h2>
    <img src="../assets/icons/white_wave.png" alt="">
    <div>video</div>
  </div>
  <div class="background-image2">
    <!--CIFRAS-->
    <div id="cifras" class="container">
      <p class="pre-titulo">Esto es</p>
      <h2>Praderas de Mañihuales</h2>
      <img src="../assets/icons/white_wave.png" alt="">
      <div class="row py-5">
        <div class="col-6 col-xl-4 px-2">
          <div class="card-cont text-center">
            <div class="cifra-cont">
              <p class="numbers">50</p>
              <img src="../assets/icons/cifra_cont.png" alt="">
            </div>
            <h3 class="py-3">Hectáreas de superficie total</h3>
          </div>
        </div>
        <div class="col-6 col-xl-4 px-2">
          <div class="card-cont text-center">
            <div class="cifra-cont">
              <p class="numbers">25</p>
              <img src="../assets/icons/cifra_cont.png" alt="">
            </div>
            <h3 class="py-3">Lotes con espectaculares cascadas</h3>
          </div>
        </div>
        <div class="col-6 col-xl-4 px-2">
          <div class="card-cont text-center">
            <div class="cifra-cont">
              <p class="numbers">30</p>
              <img src="../assets/icons/cifra_cont.png" alt="">
            </div>
            <h3 class="py-3">Parcelas con orillas de río</h3>
          </div>
        </div>
        <div class="col-6 col-xl-4 px-2">
          <div class="card-cont text-center">
            <div class="cifra-cont">
              <p class="numbers"></p>
              <img src="../assets/icons/cifra_cont.png" alt="">
            </div>
            <h3 class="py-3">3km de río Mañihuales en en proyecto</h3>
          </div>
        </div>
        <div class="col-6 col-xl-4 px-2">
          <div class="card-cont text-center">
            <div class="cifra-cont">
              <p class="numbers"></p>
              <img src="../assets/icons/cifra_cont.png" alt="">
            </div>
            <h3 class="py-3">A 20 minutos de Puerto Aysén</h3>
          </div>
        </div>
        <div class="col-6 col-xl-4 px-2">
          <div class="card-cont text-center">
            <div class="cifra-cont">
              <p class="numbers"></p>
              <img src="../assets/icons/cifra_cont.png" alt="">
            </div>
            <h3 class="py-3">22 Hectáreas de reserva ecológica</h3>
          </div>
        </div>
      </div>
      <div class="text-center">
        <img src="../assets/icons/white_wave.png" alt="">
        <p class="cifras-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      
    </div>
  </div>
    <!--CALL TO ACTION MAP-->
  <div class="background-map row">
    <div class="cta-cont col-xl-8 col-12">
      <h2 class="titulo">¿Quieres invertir en terrenos seguros, maravillosos y de mucha plusvalía?</h2>
      <p class="bajada">Conversemos y veamos la mejor opción para lo que buscas.</p>
      <WhiteButton :to="'/'" :buttonText="'Contactar Whatsapp'"/>
    </div>
  </div>
    <!--PROYECTOS-->
  <div class="background-image3">
    <div class="container" id="proyectos">
      <h1 class="titulo">Los proyectos de <span class="titulo-verde">Futuro Patagonia </span><br/><span class="titulo-no-bold">que cambiarán tu vida</span></h1>
      <div class="row align-items-center proyect-cont text-start">
        <div class="col-12 col-md-4 px-0">
          <img src="../assets/img/rio_blanco.png" alt="rio con volcan" class="img-fluid">
        </div>
        <div class="col-12 col-md-8 desc-text">
          <h3 class="titulo">Refugio Río Blanco</h3>
          <p class="bajada">El proyecto se encuentra emplazado en un lugar privilegiado por la naturaleza, rodeado de bosques siempre verdes y acompañado siempre por el sonido del Río Blanco. Lo maravilloso del sur de Chile, sin complicaciones y con esa belleza natural que buscas.</p>
          <VerProyecto :to="'https://refugiorioblanco.cl/'"/>
        </div>
      </div>
      <div class="row align-items-center proyect-cont">
        <div class="col-12 col-md-8 text-end desc-text d-none d-md-block">
          <h3 class="titulo">Santuario Río Cóndor</h3>
          <p class="bajada">Santuario Río Cóndor es un proyecto ubicado en el corazón de la naturaleza, con la menor intervención humana que se puede encontrar. Entre Río Condor y Río Laguna Vera, ofrece vistas inigualables, rodeado de hermosos cordones montañosos, un verde brillante y una tranquilidad tan silenciosa que es imposible dejar de escuchar.</p>
          <VerProyecto :to="'https://santuarioriocondor.cl/'"/>
        </div>
        <div class="col-12 col-md-4 px-0 text-start">
          <img src="../assets/img/rio_condor.png" alt="rio con volcan" class="img-fluid">
        </div>
        <div class="col-12 col-md-8 text-start desc-text d-md-none">
          <h3 class="titulo">Santuario Río Cóndor</h3>
          <p class="bajada">Santuario Río Cóndor es un proyecto ubicado en el corazón de la naturaleza, con la menor intervención humana que se puede encontrar. Entre Río Condor y Río Laguna Vera, ofrece vistas inigualables, rodeado de hermosos cordones montañosos, un verde brillante y una tranquilidad tan silenciosa que es imposible dejar de escuchar.</p>
          <VerProyecto :to="'https://santuarioriocondor.cl/'"/>
        </div>
      </div>
      <div class="row align-items-center proyect-cont text-start">
        <div class="col-12 col-md-4 px-0">
          <img src="../assets/img/praderas.png" alt="rio con volcan" class="img-fluid">
        </div>
        <div class="col-12 col-md-8 desc-text">
          <h3 class="titulo-verde">PRONTO</h3>
          <h3 class="titulo">Praderas de Mañihuales</h3>
          <p class="bajada">Si te has planteado vivir en este impresionante lugar, dentro de poco podrás hacerlo. Este proyecto está ubicado en un lugar increíble, rodeado de reservas naturales, paisajes maravillosos y  3km. del río Mañihuales lo acompañan.</p>
          <VerProyecto/>
        </div>
      </div>
    </div>
    <div class="text-center container">
      <img src="../assets/icons/dash_arrow.svg" alt="flecha punteada" style="width: 100%">
    </div>
  </div>
    <!--DUDAS-->
  <div class="background-image4">
    <img src="../assets/img/hombre.png" alt="hombre" class="hombre-img img-fluid">
    <div id="dudas" class="container">
      <h2 class="titulo">Tal vez tienes dudas</h2>
      <h3 class="titulo-no-bold">Aquí responderemos las más frecuentes</h3>
      <div class="col-xl-9 col-12">
        <AcordionDudas/>
      </div>
    </div>
  </div>
    <!--CLIENTES-->
  <div class="background-image5">
    <div class="container text-center" id="clientes">
      <h2 class="titulo">Ellos ya son parte <br/><span class="titulo-no-bold">de Futuro Patagonia</span></h2>
      <div class="row proyect-cont">
        <div class="col-12 col-md-4 review-cont" v-for="(reviews, index) in reviews" :key="index">
          <p class="bajada-italic">{{reviews.descripcion}}</p>
          <p class="bajada-mini pt-4">{{reviews.autor}}</p>
          <p class="bajada-mini-verde">{{reviews.proyecto}}</p>
        </div>
      </div>
    </div>
  </div>
    <!--CONTACTO-->
  <div id="contacto" class="text-center">
    <div class="container">
      <img src="../assets/icons/mail.svg" alt="" class="pb-5">
      <h2 class="titulo">¿Quieres enterarte de cada nuevo proyecto?</h2>
      <p class="bajada">Déjanos tu email y serás parte de la comunidad de Futuro Patagonia Inversiones.</p>
      <ContactForm/>
    </div>
  </div>
  <FooterComp/>
</template>

<script>
// @ is an alias to /src
import WhatsAppBtn from '../components/WhatsAppBtn.vue'
import NavBar from '../components/NavBar.vue'
import GreenButton from '../components/GreenButton.vue'
import WhiteButton from '../components/WhiteButton.vue'
import VerProyecto from '../components/VerProyecto.vue'
import AcordionDudas from '../components/AcordionDudas.vue'
import ContactForm from '../components/ContactForm.vue'
import FooterComp from '../components/FooterComp.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomePatagonia',
  components: {
    WhatsAppBtn,
    NavBar,
    GreenButton,
    WhiteButton,
    VerProyecto,
    AcordionDudas,
    ContactForm,
    FooterComp,
  },
  computed: {
    ...mapState(["reviews"])
  }
}
</script>

<style scoped>


</style>