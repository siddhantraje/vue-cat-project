<template>
<div>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
            <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item>
                <router-link to="/" style="text-decoration: none; color: inherit;">
                <v-list-item-title>
                    Dashboard
                    </v-list-item-title>
                    </router-link>
            </v-list-item>
            <v-list-group>
                <template v-slot:activator>
                <v-list-item-title>Images</v-list-item-title>
                </template>
                            <v-list-item  v-for="category in categories" :key="category.id">
                                <router-link :to="{ name: 'images', params: { id:category.id, name: category.name } }" style="text-decoration: none; color: inherit;">
                                <v-list-item-title class="text-capitalize">                                    
                                    {{category.name}}
                                </v-list-item-title>
                                </router-link>
                            </v-list-item>
            </v-list-group>
            </v-list-item-group>
        </v-list>
        
    </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {

    data: () => ({
        drawer: false
    }),

    methods: {
        ...mapActions(['fetchCategories'])
    },

    computed: mapGetters(['categories', 'errCategories']),

   created(){
       this.fetchCategories();
   }
    
}
</script>

<style scoped>
   
</style>