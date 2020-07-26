<template>
    <div>
        <div v-if="catsUsingCategory.length > 0">
               <h4 v-for="cat in catsUsingCategory" :key="cat.id"> {{cat}} </h4>
        </div>
        <div v-else>
            {{errCatsUsingCategory}}
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Images',
    data(){
        return {}
    },
    methods: {
        ...mapActions(['fetchCatsUsingCategory'])
    },
    computed: mapGetters(['catsUsingCategory', 'errCatsUsingCategory']),
    created(){
        this.fetchCatsUsingCategory({id:this.$route.params.id, limit:10});
    },
    watch: {
        '$route.params.id': function(id){
            this.fetchCatsUsingCategory({id:id, limit:10});
        }
    }

}
</script>

<style scoped>

</style>