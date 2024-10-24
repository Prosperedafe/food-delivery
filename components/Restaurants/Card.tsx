import { RestaurantFoodProps } from "@/types/interface";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { FavoriteIcon } from "../FavoriteIcon";

export const RestaurantCard = ({ image, rating, name, verified, delivery, time, categories }: RestaurantFoodProps) => {

    const renderCategories = () =>
        categories.map((category, index) => (
            <Text key={index} style={styles.category}>
                {category}
            </Text>
        ));

    return (
        <View style={styles.card}>
            <View style={styles.favoriteIconContainer}>
                <FavoriteIcon favorite={true} />
            </View>
            <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{rating}</Text>
                <Svg width="11" height="10" viewBox="0 0 11 10" fill="none">
                    <Path
                        d="M8.94083 9.44598L5.88729 7.84144L2.83258 9.44598L3.41732 6.0451L0.943848 3.63712L4.35876 3.14125L5.88729 0L7.41581 3.14125L10.8307 3.63712L8.35725 6.04627L8.94083 9.44598Z"
                        fill="#FFC529"
                    />
                </Svg>
                <Text style={styles.reviewsText}>(25+)</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={typeof image === 'string' ? { uri: image } : image}
                />
            </View>
            <View style={styles.details}>
                <View style={styles.row}>
                    <Text style={styles.name}>{name}</Text>
                    {verified && (
                        <Svg style={styles.verifiedIcon} width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <Circle cx="5" cy="5" r="5" fill="#029094" />
                            <Path d="M3.3335 4.22214L4.5835 5.55547L6.66683 3.33325" stroke="white" />
                        </Svg>
                    )}
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.row}>
                        <Image style={styles.icon} source={require('@/assets/icons/deliveryman-icon.png')} />
                        <Text style={styles.infoText}>{delivery}</Text>
                    </View>
                    <View style={styles.row}>
                        <Image style={styles.icon} source={require('@/assets/icons/timer-icon.png')} />
                        <Text style={styles.infoText}>{time}</Text>
                    </View>
                </View>
                <View style={styles.categoriesContainer}>{renderCategories()}</View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        overflow: 'hidden',
        width: 266,
        marginRight: 20,
        position: 'relative',
        backgroundColor: '#fff',
        shadowColor: "#cca7a7",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 19,
        elevation: 12,
        marginBottom: 8
    },
    favoriteIconContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
    },
    ratingBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: 1,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#fff',
    },
    ratingText: {
        fontSize: 11.6,
        fontWeight: '600',
        marginRight: 3,
    },
    reviewsText: {
        fontSize: 9,
        color: '#9796A1',
    },
    imageContainer: {
        overflow: 'hidden',
        height: 136,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    details: {
        paddingHorizontal: 10,
        paddingVertical: 7,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
    },
    verifiedIcon: {
        marginTop: 3,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginVertical: 3,
    },
    icon: {
        height: 12,
        width: 14,
    },
    infoText: {
        color: '#7E8392',
        fontSize: 12,
    },
    categoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 6,
    },
    category: {
        color: '#8A8E9B',
        fontSize: 11,
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5,
        textTransform: 'uppercase',
    },
});
