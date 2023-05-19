<template>
<div class="mb-3 ps-0 container">
  <form action="https://formsubmit.co/michelle@vanilla.cl" method="post">
      <input 
        type="text" 
        class="form-control input-text" 
        id="name" 
        aria-describedby="emailHelp" 
        placeholder="Nombre"
        name="name"
        required
      >
      <input 
        type="number" 
        class="form-control input-text" 
        id="number" 
        aria-describedby="emailHelp" 
        placeholder="Teléfono"
        name="number"
        required
      >
      <input 
        type="email" 
        class="form-control input-text" 
        id="email" 
        aria-describedby="emailHelp" 
        placeholder="Correo electrónico"
        name="email"
        required
      >
      <textarea 
        type="text" 
        class="form-control input-text comment-text" 
        id="comentario" 
        aria-describedby="emailHelp" 
        placeholder="¿Cuál es tu pregunta o razón de escribirnos?"
        name="comentario"
        rows="4"
        required
      ></textarea>
      <input type="hidden" name="_next" value="https://futuropatagonia.cl/thankyou">
      <input type="hidden" name="_subject" value="Nuevo lead!">
      <button type="submit" value="enviar" class="btn boton rounded-pill my-2 ">Enviar</button>
      <!--<GreenButton :type="'submit'" :buttonText="'Enviar'" class="mx-3" value="enviar"/>-->
  </form>
</div>
</template>

<script>

export default {
  name: 'ContactForm',
  components: {
    //GreenButton,
  },
 
}

</script>

