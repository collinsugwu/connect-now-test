import { MutationTree } from 'vuex'
import MovieModel from './MovieModel'
import { MovieState } from './type'

export const mutations: MutationTree<MovieState> = {
  SET_MOVIES(state, payload: []) {
    const movieJson = JSON.stringify(payload)
    localStorage.setItem('movies', movieJson);
    state.movies = payload
  }
}
