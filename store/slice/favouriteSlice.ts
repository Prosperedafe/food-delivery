import { FavoriteStoreProps } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface FoodState {
    favorites: FavoriteStoreProps[];
}

const initialState: FoodState = {
    favorites: []
};

const tableSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const { payload } = action;
            state.favorites.push({ ...payload });
        },
        removeFavorite: (state, action) => {
            const { payload } = action;
            state.favorites = state.favorites.filter(item => item?._id !== payload);
        },
        clearFavorite: (state) => {
            state.favorites = [];
        }
    },
});

export const {
    addFavorite,
    removeFavorite,
    clearFavorite
} = tableSlice.actions;

export default tableSlice.reducer;