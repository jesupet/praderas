<template>
  <!--BUTTON-->
  <a href="" 
    class="hover green-font" 
    data-bs-toggle="modal" 
    data-bs-target="#photoModal"
    v-for="button in buttons" 
    :key="button.id" 
    @click="openModal(button.photoId)">
    Ver
  </a>
  <!--MODAL-->
  <div 
    class="modal" 
    tabindex="-1" 
    id="photoModal" 
    aria-labelledby="photoModalLabel" 
    aria-hidden="true" 
    data-bs-backdrop="static"
    ref="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
          <div class="modal-header text-end">
            <h1 class="modal-title fs-5" id="photoModalLabel"></h1>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
       
        <div class="modal-body">
          <img :src="currentPhoto.url" alt="foto paisaje">
        </div>
        <!--
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ModalPhoto',
  computed: {
    ...mapState(['currentPhoto']),
    buttons() {
      // Aquí puedes tener un array con la información de los botones y las fotos asociadas
      return [
        { id: 1, name: 'Botón 1', photoId: 1 },
        { id: 2, name: 'Botón 2', photoId: 2 },
        // ... y así sucesivamente
      ];
    },
  },
  methods: {
    ...mapMutations(['setCurrentPhoto']),
    openModal(photoId) {
      // Actualiza la foto actual en Vuex y abre el modal
      this.setCurrentPhoto(photoId);
      const modal = this.$refs.myModal;
      if (modal) {
        modal.show();
      } else {
        console.error('Error: No se pudo inicializar el modal.');
      }
    },
  },
  
}
</script>
