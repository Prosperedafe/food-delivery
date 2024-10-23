import { Image, TextInput, View } from "react-native"
import Svg, { Path } from "react-native-svg"

export const FoodSearchBar = () => {

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 8,
                marginTop: 15
            }}
        >
            <View style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                position: 'relative',
                paddingLeft: 40,
                borderRadius: 10,
                paddingRight: 30,
                paddingVertical: 10,
                backgroundColor: '#FCFCFD',
                flexGrow: 1
            }}>
                <Svg style={{
                    position: 'absolute',
                    left: 13,
                    top: 15
                }} width="18" height="18" fill="none" stroke="#767F9D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                    <Path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></Path>
                    <Path d="m21 21-4.35-4.35"></Path>
                </Svg>
                <TextInput
                    style={{
                        fontSize: 16,
                        color: '#9AA0B4'
                    }}
                    placeholder="Find for food or restaurant..."
                />
            </View>
            <Image style={{ height: 51, width: 51 }} source={require('@/assets/icons/filter-icon.png')} />
        </View>
    )
}