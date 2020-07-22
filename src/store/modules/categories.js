import { getCategories } from '../../services/catService';

const state = {
    categories: [],
    errCategories: ''
}

const getters = {
    categories: state => {
        return state.categories
    },
    errCategories: state => {
        return state.errCategories
    }
}

const actions = {
    fetchCategories({ commit }){
        getCategories().then(res => {
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}