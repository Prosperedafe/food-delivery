import { colors } from "@/styles/colors"
import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const foodCategory = [
    {
        name: 'Burger',
        icon: require('@/assets/icons/food-icon/burger-icon.png')
    },
    {
        name: 'Donat',
        icon: require('@/assets/icons/food-icon/doughnut-icon.png')
    },
    {
        name: 'Pizza',
        icon: require('@/assets/icons/food-icon/pizza-icon.png')
    },
    {
        name: 'Mexican',
        icon: require('@/assets/icons/food-icon/mexican-icon.png')
    },
    {
        name: 'Asian',
        icon: require('@/assets/icons/food-icon/asian-icon.png')
    },
    {
        name: 'Chicken',
        icon: require('@/assets/icons/food-icon/burger-icon.png')
    },
    {
        name: 'Burge',
        icon: require('@/assets/icons/food-icon/burger-icon.png')
    },
]

export const CategoryBar = () => {
    const [category, setCategory] = useState<string>('Burger')

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}>
            {foodCategory.map((foodCat, index) =>
                <TouchableOpacity
                    key={index}
                    onPress={() => setCategory(foodCat.name)}
                    activeOpacity={.8}
                    style={{
                        ...styles.foodBar,
                        backgroundColor: category === foodCat.name ? colors.primary : '#fff'
                    }}
                >
                    <Image style={styles.image} source={foodCat.icon} alt={foodCat.name} />
                    <Text style={{
                        ...styles.foodName,
                        color: category === foodCat.name ? '#fff' : '#67666D'
                    }}>{foodCat.name}</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 16,
    },
    foodBar: {
        borderRadius: 100,
        paddingHorizontal: 4,
        paddingTop: 4,
        height: 90,
        marginRight: 8
    },
    foodName: {
        textAlign: 'center',
        fontSize: 11,
        fontWeight: '500',
        marginTop: 3
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 100
    }
})