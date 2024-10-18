import { AuthHeadingText } from "@/components/auth/Heading";
import { AuthPasswordInput, AuthtextInput } from "@/components/auth/Inputs";
import { SocialSignIn } from "@/components/auth/SocialSignin";
import { PrimaryBtn } from "@/components/Button/PrimaryBtn";
import { AuthPagesWrapper } from "@/components/containers/AuthPagesWrapper";
import { colors } from "@/styles/colors";
import { KeyboardTypes } from "@/types/enums";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const SignUp = () => {
    return (
        <AuthPagesWrapper>
            <View>
                <AuthHeadingText text='Sign Up' />
                <AuthtextInput
                    keyboard={KeyboardTypes.DEFAULT}
                    placeholder="Enter your full name"
                    label="Full name"
                />
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
                <View style={{ marginTop: 10 }}>
                    <PrimaryBtn text='SIGN UP' maxWidth={240} />
                </View>
                <Text style={styles.signPrompt}>Already have an account? <Link
                    style={styles.link}
                    href='/login'>Sign In</Link>
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

export default SignUp;

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