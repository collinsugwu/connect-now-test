import { sanitizeDate } from '@/helpers/sanitize'
import { GetterTree } from 'vuex'
import { RootState } from '../types'
import MovieModel from './MovieModel'
import { MovieState } from './type'

export const getters: GetterTree<MovieState, RootState> = {
  getMovies(state) {
    return state.movies
  },

  filterName: state => (value: string) => {
    return state.movies.filter(function(movie) {
      return movie.name.includes(value)
    })
  },

  filterNumber: state => (value: number) => {
    return state.movies
      .slice()
      .sort((a, b) => a.rating - b.rating)
      .slice(0, value)
  },

  filterOrderBy: state => (value: string) => {
    switch (value) {
      case 'name':
        return state.movies.slice().sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'date':
        return state.movies
          .slice()
          .sort((a, b) =>  b.first_release_date - a.first_release_date)
        break
      case 'rating':
        return state.movies.slice().sort((a, b) => b.rating - a.rating)
        break
      default:
        return state.movies
        break
    }
  }
}
