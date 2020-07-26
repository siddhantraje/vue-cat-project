<template>
    <v-container :fluid="true">
<v-row>
    <v-col sm="6" md="6" lg="6" class="text-center">
<h1 id="categoriesText" class="primary--text">Categories</h1>
    </v-col>
    <v-col sm="6" md="6" lg="6" class="jumbotron">
        <v-row v-if="this.catOfEachCategory">
            <v-list-item class="primary">
                        <v-list-item-title class="headline text-center white--text">Select a category</v-list-item-title>
                </v-list-item>
            <v-col sm="4" md="4" lg="4" v-for="cat in this.catOfEachCategory" :key="cat.id">
            <router-link :to="{ name: 'images', params: { id: cat.categories[0].id, name: cat.categories[0].name } }">
            <v-card>
                <v-img id="catImage" :src="cat.url"></v-img>
                <v-card-title class="primary white--text card-title">{{cat.categories[0].name}}</v-card-title>
            </v-card>
            </router-link>

        </v-col>
    </v-row>
    <v-row v-else>{{errCategories}}</v-row>
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
    computed:mapGetters(['categories', 'errCategories', 'catOfEachCategory'])
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

#catImage{
    height: 20vh;
    width: auto;
    filter: grayscale(100%);
    transition: 0.5s;
}

#catImage:hover{
    filter: grayscale(0%);
}

.card-title{
        text-transform: capitalize; 
        font-size:2vh; 
        padding: 1vw 1vh;
        border-bottom-right-radius: 50% !important; 
        transition: 0.5s;
}

.card-title:hover{
    letter-spacing: 0.3vw;
    border-bottom-right-radius: 0% !important; 
}
</style>