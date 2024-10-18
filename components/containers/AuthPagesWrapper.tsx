import { IAuthPagesWrapper } from "@/types/interface"
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import Svg, { Circle } from "react-native-svg"


export const AuthPagesWrapper = ({ children }: IAuthPagesWrapper) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <ScrollView contentContainerStyle={styles.container}>
                <Svg style={styles.fadeCircle} width="50" height="75" viewBox="0 0 50 75" fill="none">
                    <Circle cx="2" cy="27" r="30" stroke="#FE724C" strokeWidth="36" />
                </Svg>
                <Svg style={styles.fadeCircle} width="160" height="66" viewBox="0 0 160 66" fill="none">
                    <Circle cx="77.5" cy="-16.5" r="82.5" fill="#FFECE7" />
                </Svg>
                <Svg style={styles.pattern} width="77" height="72" viewBox="0 0 77 72" fill="none">
                    <Circle cx="90.5" cy="-18.5" r="90.5" fill="#FE724C" />
                </Svg>

                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 100,
        flexGrow: 1,
        justifyContent: 'center',
    },
    fadeCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none'
    },
    pattern: {
        position: 'absolute',
        top: 0,
        right: 0,
        pointerEvents: 'none'
    }
})
