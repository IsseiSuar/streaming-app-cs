import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, MovieData } from "../../interfaces";
import { RootState } from "../index.store";

interface MoviesReducerProps {
     movies: MovieData | null;
     movieSelected: Movie | null;
}

const initialState: MoviesReducerProps = {
    movies: null,
    movieSelected: null
}

const moviesReducer = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<MovieData>) => {
            state.movies = action.payload;
        },
        setMovieSelected: (state, action: PayloadAction<Movie>) => {
            state.movieSelected = action.payload;
        }
    }
})

export const { setMovies, setMovieSelected } = moviesReducer.actions;

export default moviesReducer;

export const getMovies = (state: RootState) => state.movies.movies;
export const getMovieSelected = (state: RootState) => state.movies.movieSelected;