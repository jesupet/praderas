<template>
  <div class="modal" tabindex="-1" id="photoModal" aria-labelledby="photoModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
          <div class="modal-header text-end">
            <h1 class="modal-title fs-5" id="photoModalLabel"></h1>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div class="modal-body">
          <img src="../assets/img/postal1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalPhoto',
  props: {
    msg: String
  }
}
</script>
