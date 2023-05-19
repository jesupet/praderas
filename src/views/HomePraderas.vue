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
          <img src="../assets/img/praderas1.png" alt="" class="landscape-img img-fluid">
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
  <!--CIFRAS-->
  <div class="background-image2">
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
  <!--POSTALES-->
  <div id="postales" class="text-center container-fluid">
    <h2 class="px-1">Mira estas increíbles postales</h2>
    <img src="../assets/icons/white_wave.png" alt="">
    <div class="postales-cont row">
      <div class="postal-box col-md col-6">
        <img src="../assets/img/postal1.png" alt="" class="img-fluid">
      </div>
      <div class="postal-box col-md col-6">
        <img src="../assets/img/postal2.png" alt="" class="img-fluid">
      </div>
      <div class="postal-box col-md col-6">
        <img src="../assets/img/postal3.png" alt="" class="img-fluid">
      </div>
      <div class="postal-box col-md col-6">
        <img src="../assets/img/postal4.png" alt="" class="img-fluid">
      </div>
      <div class="postal-box col-md col-6">
        <img src="../assets/img/postal5.png" alt="" class="img-fluid">
      </div>
      <div class="postal-box d-md-none col-6">
        <img src="../assets/img/postal6.png" alt="" class="img-fluid">
      </div>
    </div>
  </div>
  <!--MASTERPLAN-->
  <div id="masterplan" class="container-fluid text-center">
    <p class="pre-titulo black-font">¡Lanzamiento primera etapa: lotes 1 al 15 disponibles!</p>
    <h2 class="green-font">Masterplan 360º</h2>
    <img src="../assets/icons/white_wave.png" alt="">
    <div class="img-box">
      <img src="../assets/img/masterplan.png" alt="" class="img-fluid">
    </div>
  </div>
    <!--CALL TO ACTION-->
  <div id="cta">
    <div class="container">
      <div class="cta-cont row align-items-center">
      <div class="col-md-6 col-12">
        <h2>¿Quieres saber más de este maravilloso y prístino proyecto?</h2>
        <img src="../assets/icons/white_wave.png" alt="">
      </div>
      <div class="col-md-6 col-12 btn-cont">
        <GreenButton :to="'/'" :buttonText="'Descargar brochure'"/>
      </div>      
    </div>
  </div>
  </div>
    <!--ENTORNO-->
  <div class="background-image3">
    <div class="container" id="entorno">
      <div class="row align-items-center entorno-cont">
        <div class="col-12 col-md-6 entorno-text order-md-first order-last">
          <p class="pre-titulo">Entorno</p>
          <h2>Flora y Fauna</h2>
          <img src="../assets/icons/white_wave.png" alt="">
          <p class="bajada">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="col-12 col-md-6 px-0 order-first img-cont text-md-end text-center">
          <img src="../assets/img/florayfauna.png" alt="rio con volcan" class="img-fluid img-entorno">
        </div>
      </div>
      <div class="row align-items-center entorno-cont">
        <div class="col-12 col-md-6 px-0 text-md-start text-center">
          <img src="../assets/img/actividades.png" alt="rio con volcan" class="img-fluid img-entorno">
        </div>
        <div class="col-12 col-md-6 entorno-text text-md-end">
          <p class="pre-titulo">Entorno</p>
          <h2>Actividades</h2>
          <img src="../assets/icons/white_wave.png" alt="">
          <p class="bajada">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="row align-items-center entorno-cont">
        <div class="col-12 col-md-6 entorno-text order-md-first order-last">
          <p class="pre-titulo">Entorno</p>
          <h2>Alrededores</h2>
          <img src="../assets/icons/white_wave.png" alt="">
          <p class="bajada">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,  incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="col-12 col-md-6 px-0 order-first img-cont text-md-end text-center">
          <img src="../assets/img/alrededores.png" alt="rio con volcan" class="img-fluid img-entorno">
        </div>
      </div>
      <div class="text-center entorno-text">
        <img src="../assets/icons/white_wave.png" alt="">
        <p class="cifras-text">
          <span class="bold-p">¿Quieres ir un poco más allá?</span> Traspasando los límites comunales puedes visitar el Parque Nacional Queulat, Cerro Castillo, Lago General Carrera, Capillas de Mármol, Centro de Ski El Fraile, entre otros increíbles atractivos turísticos.
        </p>
      </div>
    </div>
  </div>
  <!--LOCATION-->
  <div class="background-image4">
    <div class="container" id="location">
      <div class="row align-items-center entorno-cont">
        <div class="col-12 col-md-5">
          <p class="pre-titulo">Como llegar</p>
          <h2>Desde Santiago</h2>
          <img src="../assets/icons/white_wave.png" alt="">
          <p class="little-p">Desde el aeropuerto Arturo Merino Benítez hacia Balmaceda, sin escalas estarás en 2 horas en la Región de Aysén. En el aeropuerto podrás arrendar un auto para desplazarte por la región, previa reserva, o tomar un transfer que tendrá por valor $7.000 p/p hasta Coyhaique, en el caso que decidas alojarte en la capital regional. El trayecto desde el aeropuerto a Coyhaique es de 45 minutos por ruta 100% pavimentada.</p>
        </div>
        <div class="col-12 col-md-7 px-0 img-cont text-md-end text-center">
          <img src="../assets/img/map1.png" alt="rio con volcan" class="img-fluid img-map">
        </div>
      </div>
      <div class="row align-items-center entorno-cont">
        <div class="col-12 col-md-7 px-0 img-cont text-md-start text-center order-md-first order-end">
          <img src="../assets/img/map2.png" alt="rio con volcan" class="img-fluid img-map">
        </div>
        <div class="col-12 col-md-5 text-end order-first order-md-end">
          <p class="pre-titulo">Como llegar</p>
          <h2>Desde Coyhaique</h2>
          <img src="../assets/icons/white_wave.png" alt="">
          <p class="little-p">C.-Tomas el camino con dirección a Puerto Aysén, orientación norte-oeste.D.- Antes de llegar a la ciudad de Puerto Aysén, tras 50 minutos de viaje, te encontrarás con el puente Dunn, por donde atraviesa el Río Aysén; ahí debes tomar la Ruta X-550 en dirección a Río Cóndor. Avanzando por este camino (ripiado, apto para todo tipo de vehículos, y que se encuentra en buenas condiciones ya que es mantenido por vialidad), llegarás a Santuario Río Cóndor en 50 minutos.</p>
        </div>
        <div class="text-center location-text">
          <p class="pre-titulo">
            planifica tu viaje
          </p>
          <img src="../assets/icons/white_wave.png" alt="">
          <div class="row">
            <div class="col-4">
              <img src="../assets/icons/location_circle.svg" alt="" class="circle">
              <p class="big-p">
                <spam class="bold-p">Temperatura</spam><br/>
                2°C a 25°C
              </p>
            </div>
            <div class="col-4">
              <img src="../assets/icons/location_circle.svg" alt="" class="circle">
              <p class="big-p">
                <spam class="bold-p">Ubicación</spam><br/>
                Región de Aysén, Chile
              </p>
            </div>
            <div class="col-4">
              <img src="../assets/icons/location_circle.svg" alt="" class="circle">
              <p class="big-p">
                <spam class="bold-p">Clima</spam><br/>
                Templado, lluvioso
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!--CONTACTO-->
  <div id="contacto">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7 pe-5">
          <p class="pre-titulo black-font">¿coordinemos una visita?</p>
          <h2 class="green-font">Contáctanos</h2>
          <img src="../assets/icons/white_wave.png" alt="">
          <p class="black-font little-p">Ingresa al masterplan 360, elige cual lote te gustó y ponte en contacto con nosotros a través de formulario o a nuestro Whatsapp para coordinar visita.</p>
          <ContactForm/>
        </div>
        <div class="col-12 col-md-5">
          <p class="pre-titulo black-font">síguenos o</p>
          <h2 class="green-font">puedes encontrarnos</h2>
          <img src="../assets/icons/white_wave.png" alt="">
          <p class="black-font little-p">Ingresa al masterplan 360, elige cual lote te gustó y ponte en contacto con nosotros a través de formulario o a nuestro Whatsapp para coordinar visita.</p>
        </div>
      </div>
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
    
</template>

<script>
// @ is an alias to /src
import WhatsAppBtn from '../components/WhatsAppBtn.vue'
import NavBar from '../components/NavBar.vue'
import GreenButton from '../components/GreenButton.vue'
import AcordionDudas from '../components/AcordionDudas.vue'
import ContactForm from '../components/ContactForm.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomePatagonia',
  components: {
    WhatsAppBtn,
    NavBar,
    GreenButton,
    AcordionDudas,
    ContactForm,
  },
  computed: {
    ...mapState(["reviews"])
  }
}
</script>

<style scoped>


</style>