import { getCategories, getCatsUsingCategory } from '../../services/catService';

const state = {
    categories: [],
    errCategories: '',
    catOfEachCategory: []

}

const getters = {
    categories: state => {
        return state.categories
    },
    errCategories: state => {
        return state.errCategories
    },
    catOfEachCategory: state => {
        return state.catOfEachCategory
    }
}

const actions = {
    fetchCatOfEachCategory({ commit }, id){
        getCatsUsingCategory(id, 1).then(cats => {
            commit('setCatOfEachCategory', cats.data[0])
        })
},
    fetchCategories({ commit }){
        getCategories().then(res => {
            res.data.forEach((element,index) => {
                actions.fetchCatOfEachCategory({ commit }, res.data[index].id)
            });
            commit('setCategories', res.data)
        }).catch(err => {
            commit('setErrCategories', err)
        })
    }
    
}

const mutations = {
    setCategories(state, categories){
        state.categories = categories
    },
    setErrCategories(state, err){
        state.errCategories = err
    },
    setCatOfEachCategory(state, cat){
        state.catOfEachCategory.push(cat);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}