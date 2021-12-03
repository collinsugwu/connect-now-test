import Vuex, { StoreOptions } from 'vuex';
import { movies } from './movies';
import { RootState } from './types';


const store: StoreOptions<RootState>  = {
    state: {
        hello: 'hello',
    },

    modules: {
        movies, 
    }
}

export default new Vuex.Store<RootState>(store)