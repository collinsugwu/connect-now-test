import { Module } from "vuex";
import { RootState } from "../types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { MovieState } from "./type";


const state: MovieState = {
    movies: []
}

export const movies: Module<MovieState, RootState> = {
    state,
    getters,
    mutations
}