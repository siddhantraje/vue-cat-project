import Vue from 'vue';
import Vuex from 'vuex'

import randomcat from './modules/randomcat';
import categories from './modules/categories';
import catsusingcategory from './modules/catsusingcategory';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        randomcat,
        categories,
        catsusingcategory
    }
})