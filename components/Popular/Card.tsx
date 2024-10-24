import { Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { FavoriteIcon } from '../FavoriteIcon';
import { colors } from '@/styles/colors';
import { FoodItemProps } from '@/types/interface';

export const PopularFoodCard = (food: FoodItemProps) => {

    return (
        <View style={styles.card}>
            <Text style={styles.priceTag}><Text style={{ fontSize: 8, color: colors.primary }}>$</Text>{food.price}</Text>
            <View style={styles.favoriteIcon}>
                <FavoriteIcon favorite={food.isFavorite} />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={typeof food.image === 'string' ? { uri: food.image } : food.image}
                />
            </View>
            <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{food.rating}</Text>
                <Svg width="11" height="10" viewBox="0 0 11 10" fill="none">
                    <Path
                        d="M8.94083 9.44598L5.88729 7.84144L2.83258 9.44598L3.41732 6.0451L0.943848 3.63712L4.35876 3.14125L5.88729 0L7.41581 3.14125L10.8307 3.63712L8.35725 6.04627L8.94083 9.44598Z"
                        fill="#FFC529"
                    />
                </Svg>
                <Text style={styles.reviewCountText}>({food.reviewsCount})</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.foodName}>{food?.name}</Text>
                <Text style={styles.foodDescription}>{food?.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 154,
        borderRadius: 12,
        backgroundColor: '#fff',
        overflow: 'hidden',
        position: 'relative',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginRight: 20,
        flexGrow: 1
    },
    priceTag: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 100,
        zIndex: 2,
        color: '#000',
        fontWeight: '600',
        fontSize: 15,
    },
    favoriteIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 2,
    },
    imageContainer: {
        height: 147,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    ratingBadge: {
        position: 'absolute',
        top: 137,
        left: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 6,
        zIndex: 2,
    },
    ratingText: {
        fontSize: 10,
        fontWeight: '600',
        marginRight: 3,
    },
    reviewCountText: {
        fontSize: 10,
        color: '#9796A1',
    },
    detailsContainer: {
        padding: 10,
    },
    foodName: {
        fontSize: 14,
        fontWeight: '600',
    },
    foodDescription: {
        fontSize: 12,
        color: '#9796A1',
        marginTop: 3,
    },
});
