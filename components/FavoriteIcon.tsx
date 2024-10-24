import { Image } from "react-native"

type Props = {
    favorite: boolean
}

export const FavoriteIcon = ({ favorite }: Props) => {
    const icon = favorite === true ? require('@/assets/icons/favoriteIcon.png') : require('@/assets/icons/favoriteInactive.png');

    return (
        <Image style={{ height: 28, width: 28 }} source={icon} />
    )
}