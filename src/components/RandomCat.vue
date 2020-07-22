<template>
        <v-container :fluid="true">
            <v-row>
                <v-col sm="6" md="6" lg="6">
                        <div v-if="randomCat && !errRandomCat">
                                    <v-card>
                                        <v-list-item class="primary">
                                            <v-list-item-title class="headline text-center white--text">Random Cat</v-list-item-title>
                                        </v-list-item>
                                        <v-img class="align-end" id="randomCatImage" :src="randomCat.url"></v-img>
                                        <!-- <v-card-title> Random cat</v-card-title> -->
                                        <v-card-actions>
                                            <v-btn @click="changeRandomCat" block rounded outlined color="primary">
                                                Click to change
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                        </div>
                        <div v-if="!randomCat && !errRandomCat">
                                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </div>
                        <div v-if="errRandomCat">
                                    <v-card>
                                        <v-list-item class="primary">
                                            <v-list-item-title class="headline text-center white--text">Error in fetching</v-list-item-title>
                                        </v-list-item>
                                        <v-card-text id="randomCatImage" class="text--primary">
                                            {{errRandomCat}}
                                            <br><br>
                                            Please check your internet connection and Proxy settings and try again
                                            </v-card-text>
                                        <v-card-actions>
                                            <v-btn @click="changeRandomCat" block rounded outlined color="primary">
                                                Retry
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                        </div>
                </v-col>
                <v-col sm="6" md="6" lg="6" class="text-center">
                            <h1 id="randomCatText" class="primary--text">Random Cat</h1>

                </v-col>
            </v-row>
        </v-container>
       
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "RandomCat",
    data(){
        return {}
    },
    methods: {
        ...mapActions(['fetchRandomCat']),
        changeRandomCat(){
            this.fetchRandomCat();
        }
    },
    computed: mapGetters(['randomCat', 'errRandomCat']),
    created(){
        this.fetchRandomCat();
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

#randomCatImage{
    width: auto;
    height: 70vh;
    font-size: 3vh;
}

h1#randomCatText{
    font-family: 'Anton', sans-serif;
    letter-spacing: 0.1vw;
    font-size: 10vh;
    position: relative;
    top: 30%;
}
</style>