import { AuthHeadingText } from "@/components/auth/Heading";
import { AuthPagesWrapper } from "@/components/containers/AuthPagesWrapper";
import { colors } from "@/styles/colors";
import { KeyboardTypes } from "@/types/enums";
import { View, Text, TextInput, StyleSheet } from "react-native";

const VerifyCode = () => {

    return (
        <AuthPagesWrapper>
            <View>
                <AuthHeadingText text='Vefification Code' />
                <Text style={{ color: '#9796A1', fontSize: 14 }}>Please type the verification code sent to prelookstudio@gmail.com</Text>
                <View style={styles.codeContainer}>
                    <TextInput
                        style={styles.textInput}
                        keyboardType={KeyboardTypes.NUMERIC}
                    />
                    <TextInput
                        style={styles.textInput}
                        keyboardType={KeyboardTypes.NUMERIC}
                    />
                    <TextInput
                        style={styles.textInput}
                        keyboardType={KeyboardTypes.NUMERIC}
                    />
                    <TextInput
                        style={styles.textInput}
                        keyboardType={KeyboardTypes.NUMERIC}
                    />
                </View>
            </View>
        </AuthPagesWrapper>
    )
}

export default VerifyCode;

const styles = StyleSheet.create({
    codeContainer: {
        marginTop: 30,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        maxWidth: 350,
        marginHorizontal: 'auto'
    },
    textInput: {
        flexGrow: 1,
        fontSize: 27,
        color: colors.primary,
        fontWeight: '500',
        borderColor: '#d9d9d9',
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        width: 60,
        textAlign: 'center'
    }
})