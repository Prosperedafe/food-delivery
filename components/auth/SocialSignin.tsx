import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"

interface ISocialSignIn {
    color: string,
    line: string
    text: string
}

export const SocialSignIn = ({ color, line, text }: ISocialSignIn) => {
    return (
        <View style={{
            maxWidth: 330,
            width: '100%',
            marginHorizontal: 'auto',
            marginVertical: 26
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: "center",
                flexDirection: 'row',
                marginBottom: 18,
                gap: 10
            }}>
                <View style={{
                    flexGrow: 1,
                    height: .6,
                    backgroundColor: line
                }}></View>
                <Text style={{ color: color, fontSize: 16 }}>{text}</Text>
                <Text style={{
                    height: .6,
                    flexGrow: 1,
                    backgroundColor: line
                }}></Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: "center",
                flexDirection: 'row',
                gap: 10,
            }}>
                <TouchableOpacity activeOpacity={.8} style={style.socialButton}>
                    <Svg width={29} height={30} viewBox="0 0 29 30" fill="none">
                        <Rect width="28.62" height="28.62" rx="14.31" fill="#1877F2" />
                        <Path d="M19.4036 18.868L20.0816 14.4622H15.8401V11.6041C15.8401 10.3974 16.4314 9.22241 18.3311 9.22241H20.2607V5.47072C19.1284 5.28838 17.9842 5.18883 16.8374 5.17285C13.3427 5.17285 11.0607 7.28337 11.0607 11.103V14.4615H7.17725V18.868H11.0607V29.5197C12.6442 29.7658 14.2565 29.7658 15.8401 29.5197V18.868H19.4036Z" fill="white" />
                    </Svg>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>FACEBOOK</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} style={style.socialButton}>
                    <Svg width={27} height={27} viewBox="0 0 29 29" fill="none">
                        <Path d="M14.3087 5.53317C16.3589 5.50162 18.3417 6.26543 19.8408 7.66429L23.8788 3.71573C21.2881 1.28818 17.8587 -0.0429552 14.3087 0.00105765C11.6563 0.000444746 9.0559 0.737713 6.79848 2.13041C4.54105 3.52311 2.71555 5.51633 1.52612 7.88717L6.15295 11.4794C6.7187 9.75917 7.81016 8.25993 9.27342 7.19309C10.7367 6.12626 12.4979 5.54566 14.3087 5.53317Z" fill="#EA4335" />
                        <Path d="M28.0451 14.6276C28.062 13.644 27.9603 12.6619 27.7424 11.7026H14.3091V17.0132H22.1952C22.0456 17.9443 21.7092 18.8355 21.2063 19.6332C20.7034 20.431 20.0444 21.1187 19.2689 21.6552L23.7842 25.1525C25.1915 23.7939 26.2981 22.1552 27.0328 20.3423C27.7674 18.5294 28.1137 16.5826 28.0492 14.6276H28.0451Z" fill="#4285F4" />
                        <Path d="M6.16958 17.1392C5.85674 16.2284 5.69547 15.2723 5.69218 14.3092C5.69788 13.3477 5.85338 12.3929 6.15307 11.4792L1.52624 7.88696C0.522718 9.87932 0 12.0791 0 14.3099C0 16.5407 0.522718 18.7405 1.52624 20.7328L6.16958 17.1392Z" fill="#FBBC05" />
                        <Path d="M14.3091 28.6177C17.7944 28.7163 21.185 27.4761 23.7842 25.1521L19.2688 21.6548C17.8048 22.6363 16.0709 23.1365 14.3091 23.0856C12.4998 23.0749 10.7398 22.4947 9.27886 21.4274C7.81789 20.36 6.7301 18.8598 6.1698 17.1394L1.54297 20.733C2.72919 23.1028 4.5517 25.0955 6.8064 26.4881C9.06111 27.8807 11.659 28.6181 14.3091 28.6177Z" fill="#34A853" />
                    </Svg>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>GOOGLE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    socialButton: {
        backgroundColor: '#fff',
        padding: 10,
        paddingRight: 16,
        borderRadius: 27,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        flexGrow: 1,
        flexBasis: 100
    },
})