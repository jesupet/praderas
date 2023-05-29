import { createStore } from 'vuex'
import preguntas from './preguntas.json'



export default createStore({
  state: {
    preguntas: preguntas,
    showButton: false,
    currentPhoto: {},
    photos: [
      { id: 1, url: '../assets/img/postal1.png' },
      { id: 2, url: '../assets/img/postal2.png' },
      // ... y así sucesivamente
    ],
  },
  getters: {
  },
  mutations: {
    setShowButton(state, value) {
      state.showButton = value;
    },
    setCurrentPhoto(state, photoId) {
      // Encuentra la foto correspondiente al photoId y actualiza el estado
      state.currentPhoto = state.photos.find(photo => photo.id === photoId);
    },
  },
  actions: {
  },
  modules: {
    
  }
})
