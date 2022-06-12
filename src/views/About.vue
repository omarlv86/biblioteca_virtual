<template>
  <div class="books">
    <h1>Lista de libros</h1>
    
    <v-container fluid >
    <v-row align="center" style="justify-content:center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
        md="6"
        xl="4"
      >
        <v-select
          :items="items"
          label="Ordenar por:"
          v-model="select"
        ></v-select>
      </v-col>


    </v-row>
  </v-container>

    <div class="d-flex align-content-start flex-wrap py-3">
      <v-card
        :loading="loading"
        class="mx-auto my-5"
        max-width="230"
        min-width="230"
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
          lazy-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEma4oxTdhSHR-oI27mTnKXeUne9gkoRaag&usqp=CAU"
          max-height="250"
          max-width="230"
          height="250"
          v-bind:src="book.img"
        ></v-img>

        <v-card-title style="display:flex; justify-content:center; overflow: hidden">
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
      books:[],
      items: ['Al sol solito', 'Astrolabio', 'Pasos de luna', 'Otros', 'Todos'],
      select:'',
  }),

  mounted(){
      this.books = data;
  },
  methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      filterData(item){
        console.log(item)
        console.log(data)
        if(item != 'Todos'){
          this.books = data.filter((book, index) => book.category.includes(item));
        }else{
          this.books = data;
        }
      },
  },
   watch: {
    select: {
      handler(newValue, oldValue) {
        this.filterData(newValue)
        // Note: `newValue` will be equal to `oldValue` here
        // on nested mutations as long as the object itself
        // hasn't been replaced.
      },
    }
  }
}
</script>
