import { RootState } from "@/store/rootReducer";
import { addFavorite, FoodState, removeFavorite } from "@/store/slice/favouriteSlice";
import { FavoriteStoreProps, IFavoriteIconProp } from "@/types/interface";
import { Image, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux";

export const FavoriteIcon = ({ payload }: IFavoriteIconProp) => {

    const favorites = useSelector((state: RootState) => state?.favorites?.favorites || []);
    const icon = favorites.some((fav: FavoriteStoreProps) => fav._id === payload?._id)
        ? require('@/assets/icons/favoriteIcon.png')
        : require('@/assets/icons/favoriteInactive.png'); const dispatch = useDispatch()

    const isFoodInFavorite = (food: FavoriteStoreProps) => {
        return favorites.some((favorite: FavoriteStoreProps) => favorite?._id === food?._id);
    };

    const addOrRemoveFavorite = (food: any) => {
        if (isFoodInFavorite(food)) {
            dispatch(removeFavorite(food._id));
        } else {
            dispatch(addFavorite(food));
        }
    };

    return (
        <TouchableOpacity
            onPress={() => addOrRemoveFavorite(payload)}
            activeOpacity={.8}>
            <Image style={{ height: 28, width: 28 }} source={icon} />
        </TouchableOpacity>
    )
}