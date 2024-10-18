import { AuthHeadingText } from "@/components/auth/Heading";
import { AuthPasswordInput, AuthtextInput } from "@/components/auth/Inputs";
import { SocialSignIn } from "@/components/auth/SocialSignin";
import { PrimaryBtn } from "@/components/Button/PrimaryBtn";
import { AuthPagesWrapper } from "@/components/containers/AuthPagesWrapper";
import { colors } from "@/styles/colors";
import { KeyboardTypes } from "@/types/enums";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const Login = () => {
    return (
        <AuthPagesWrapper>
            <View>
                <AuthHeadingText text='Login' />
                <AuthtextInput
                    keyboard={KeyboardTypes.EMAIL_ADDRESS}
                    placeholder="Enter your email"
                    label="E-mail"
                />
                <AuthPasswordInput
                    keyboard={KeyboardTypes.VISIBLE_PASSWORD}
                    placeholder="Enter your password"
                    label="Password"
                />
                <Link
                    style={{
                        fontSize: 14,
                        color: colors.primary,
                        textAlign: 'center'
                    }}
                    href='/forgotPassword'>Forgot password?</Link>
                <View style={{ marginTop: 20 }}>
                    <PrimaryBtn text='LOGIN' maxWidth={240} />
                </View>
                <Text style={styles.signPrompt}>Don't have an account? <Link
                    style={styles.link}
                    href='/signup'>Sign Up</Link>
                </Text>
                <SocialSignIn
                    color='#5B5B5E'
                    line='#B3B3B380'
                    text='Sign up with'
                />
            </View>
        </AuthPagesWrapper>
    )
}

export default Login;

const styles = StyleSheet.create({
    signPrompt: {
        fontSize: 14,
        color: '#5B5B5E',
        textAlign: 'center',
        marginTop: 18
    },
    link: {
        textDecorationLine: 'underline',
        color: colors.primary,
    }
})