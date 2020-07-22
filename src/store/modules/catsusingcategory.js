import { getCatsUsingCategory } from '../../services/catService';

const state = { 
    catsUsingCategory: [],
    errCatsUsingCategory: ''
 };

const getters = { 
    catsUsingCategory: state =>{
        return state.catsUsingCategory
    },
    errCatsUsingCategory: state =>{
        return state.errCatsUsingCategory
    }
 };

const actions = { 
    fetchCatsUsingCategory({ commit }, {id, limit}){
        console.log(id);
        console.log(limit);
        getCatsUsingCategory(id, limit).then(res => {
            commit('setCatsUsingcategory', res.data)
        }).catch(err => {
            commit('setErrCatsUsingCategory', err)
        })
    }
 };

const mutations = { 
    setCatsUsingcategory(state, cats){
        state.catsUsingCategory = cats;
    },
    setErrCatsUsingCategory(state, err){
        state.errCatsUsingCategory = err
    }
 };

export default{
    state,
    getters,
    actions,
    mutations
}
