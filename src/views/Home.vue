<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="home">
    <h1>Biblioteca Virtual</h1>
    <h2>Adolfo López Mateos</h2>
    <div class="d-flex flex-column justify-space-between align-center">
      <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="auto"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="450"
          max-width="auto"
          height="650"
          src="https://www.nacio.unlp.edu.ar/wp-content/uploads/Biblioteca-Virtual.jpg"
        ></v-img>

      </v-card>
    </div>
    <p>Esta biblioteca digital fue diseñada con la finalidad de compartir las diferentes colecciones de libros.<br>
      con el proposito de promover el gusto por la lectura desde los más pequeños que inician el contacto con los textos, hasta los que ya disfrutan revisar las diferentes historias.
    </p>
    <a>Ver lista de libros</a>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 3000)
      },
    },
}
</script>
