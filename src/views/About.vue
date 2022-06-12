<template>
  <div class="books">
    <h1>Lista de libros</h1>
    <div class="d-flex align-content-start flex-wrap py-3">
      <v-card
        :loading="loading"
        class="mx-auto my-5"
        max-width="200"
        v-for="book in books"
        :key="book.id"
        :href="book.link"
        target="blank"
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
          max-height="200"
          max-width="200"
          height="200"
          v-bind:src="book.img"
        ></v-img>

        <v-card-title>
            {{book.title}}
          </v-card-title>

      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import data from '@/data/data'

export default {
  name: 'About',

  data: () => ({
      loading: false,
      selection: 1,
      books:[]
  }),

  mounted(){
      this.books = data;
  },
  methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 3000)
      },
    },
}
</script>
