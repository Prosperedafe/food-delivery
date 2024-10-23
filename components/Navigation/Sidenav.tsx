import { colors } from "@/styles/colors"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Svg, { Path } from "react-native-svg"

export const Sidenav = () => {
    return (
        <View>
            <View style={navStyles.header}>
                <Image style={navStyles.headerIcons} source={require('@/assets/icons/menu-icon.png')} />
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5
                    }}>
                        <Text style={{
                            color: '#8C9099',
                            fontSize: 14,
                            fontWeight: '500'
                        }}>Deliver to</Text>
                        <Svg style={{ marginTop: 4 }} width="9" height="6" viewBox="0 0 9 6" fill="none">
                            <Path d="M1 1L4.32007 4.32122L7.64 1" stroke="#989CA3" strokeWidth="1.8" />
                        </Svg>
                    </View>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '500',
                        textAlign: 'center',
                        lineHeight: 17,
                        color: colors.primary
                    }}>
                        4102  Pretty View Lane
                    </Text>
                </View>
                <Image style={navStyles.headerIcons} source={require('@/assets/icons/profile-image.png')} />
            </View>
            <ScrollView>
            </ScrollView>
        </View>
    )
}

const navStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 5,
        paddingVertical: 6
    },
    headerIcons: {
        height: 38,
        width: 38
    }
})