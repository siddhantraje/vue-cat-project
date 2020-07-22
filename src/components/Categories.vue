<template>
    <v-container :fluid="true">
<v-row>
    <v-col sm="6" md="6" lg="6" class="text-center">
<h1 id="categoriesText" class="primary--text">Categories</h1>
    </v-col>
    <v-col sm="6" md="6" lg="6">
        <div v-if="categories.length > 0">
        <h4 v-for="category in categories" :key="category.id">{{category}}</h4>
    </div>
    <div v-else>
        {{errCategories}}
    </div>
    </v-col>


    
    </v-row>
   </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Categories",
    data(){
        return {}
    },
    methods: {
        ...mapActions(['fetchCategories'])
    },
    computed:mapGetters(['categories', 'errCategories']),
    created(){
        this.fetchCategories();
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

h1#categoriesText{
    font-family: 'Anton', sans-serif;
    letter-spacing: 0.1vw;
    font-size: 10vh;
    position: relative;
    top: 30%;
}
</style>