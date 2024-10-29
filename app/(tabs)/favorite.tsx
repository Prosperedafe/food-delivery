import { PagesContainer } from "@/components/containers/PagesContainer";
import { PopularFoodCard } from "@/components/Popular/Card";
import { RestaurantCard } from "@/components/Restaurants/Card";
import { RootState } from "@/store/rootReducer";
import { colors } from "@/styles/colors";
import { FoodItemProps, RestaurantFoodProps } from "@/types/interface";
import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Favorite = () => {
    const [activeFavorite, setActiveFavorite] = useState<string>('food-items');

    const toggleActive = (tab: string) => {
        setActiveFavorite(tab);
    };

    const favorites = useSelector((state: RootState) => state?.favorites?.favorites);

    return (
        <PagesContainer paddingX={16}>
            <View>
                <View style={styles.toggleContainer}>
                    <TouchableOpacity
                        activeOpacity={0.95}
                        style={[
                            styles.toggleButton,
                            activeFavorite === 'food-items' ? styles.activeStyle : styles.defaultStyle
                        ]}
                        onPress={() => toggleActive('food-items')}
                    >
                        <Text
                            style={[
                                styles.toggleText,
                                activeFavorite === 'food-items' ? styles.activeText : styles.defaultText
                            ]}
                        >
                            Food Items
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.95}
                        style={[
                            styles.toggleButton,
                            activeFavorite === 'restaurants' ? styles.activeStyle : styles.defaultStyle
                        ]}
                        onPress={() => toggleActive('restaurants')}
                    >
                        <Text
                            style={[
                                styles.toggleText,
                                activeFavorite === 'restaurants' ? styles.activeText : styles.defaultText
                            ]}
                        >
                            Restaurants
                        </Text>
                    </TouchableOpacity>
                </View>
                {activeFavorite === 'food-items' ?
                    <View style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        gap: 16,
                        justifyContent: 'center'
                    }}>
                        {favorites
                            .filter((favorite): favorite is FoodItemProps =>
                                "description" in favorite && "price" in favorite && "reviewsCount" in favorite && "isFavorite" in favorite
                            )
                            .map((favorite) => (
                                <PopularFoodCard
                                    key={favorite._id}
                                    {...favorite}
                                />
                            ))}
                    </View>
                    :
                    <View style={{
                        paddingVertical: 20,
                        gap: 16,
                    }}>
                        {favorites
                            .filter((favorite): favorite is RestaurantFoodProps =>
                                "delivery" in favorite && "verified" in favorite && "categories" in favorite
                            )
                            .map((favorite) => (
                                <View key={favorite._id} style={{ maxWidth: 350, marginHorizontal: 'auto', width: '100%' }}>
                                    <RestaurantCard {...favorite} />
                                </View>
                            ))}
                    </View>
                }
            </View>
        </PagesContainer>
    );
};

const styles = StyleSheet.create({
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 27,
        borderColor: '#F2EAEA',
        borderWidth: 1,
        gap: 8,
        padding: 4,
        maxWidth: 380,
        marginHorizontal: 'auto'
    },
    toggleButton: {
        borderRadius: 23,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexGrow: 1,
    },
    toggleText: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center'
    },
    defaultText: {
        color: colors.primary,
    },
    activeText: {
        color: '#fff',
    },
    defaultStyle: {
        backgroundColor: '#fff',
    },
    activeStyle: {
        backgroundColor: colors.primary,
    },
});

export default Favorite;
