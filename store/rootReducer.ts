import { combineReducers } from 'redux'
import favoriteSlice from './slice/favouriteSlice'

export const rootReducer = combineReducers({
    favorites: favoriteSlice,
})

export type RootState = ReturnType<typeof rootReducer>