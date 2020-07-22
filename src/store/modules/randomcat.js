import { getRandomCat } from '../../services/catService';

export default {
    state: {
        randomCat: null,
        errRandomCat: ''
    },
    getters: {
        randomCat: state => {
            return state.randomCat
        },
        errRandomCat: state => {
            return state.errRandomCat
        }
    },
    actions: {
        fetchRandomCat({ commit }){
            getRandomCat().then(res => {
                 commit('setRandomCat', res.data[0])
            }).catch(err => {
                commit('setErrRandomCat', err)
            })
        }
    },
    mutations: {
            setRandomCat(state, cat){
                state.randomCat = cat
                state.errRandomCat = ''
            },
            setErrRandomCat(state, err){
                state.errRandomCat = err
                state.randomCat = null
            }
        }
}