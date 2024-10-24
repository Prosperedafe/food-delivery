import { colors } from "@/styles/colors"
import { Link } from "expo-router"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { RestaurantCard } from "./Card"
import { featured } from "@/data/featured"

export const FeaturedRestaurants = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.heading}>Featured Restaurants</Text>
                <Link style={styles.navButton} href='/welcome'>
                    View all
                    <Svg style={{ marginTop: 2 }} width="6" height="9" viewBox="0 0 6 9" fill="none">
                        <Path d="M1 1L4.34 4.33987L1 7.67978" stroke="#FE724C" strokeWidth="1.5" />
                    </Svg>
                </Link>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.container}
            >
                {featured.map((feature) =>
                    <RestaurantCard
                        key={feature?._id}
                        {...feature}
                    />
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    heading: {
        fontSize: 18,
        color: '#323643',
        fontWeight: '600'
    },
    header: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    navButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        marginTop: 3,
        color: colors.primary,
        fontSize: 13
    }
})