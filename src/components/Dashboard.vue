<template>
    <div>
<RandomCat />
<Categories />
    </div>
</template>

<script>

import RandomCat from './RandomCat';
import Categories from './Categories';

export default {
    name: 'Dashboard',
    components: {
        RandomCat,
        Categories
    }
    
}
</script>

<style scoped>

</style>