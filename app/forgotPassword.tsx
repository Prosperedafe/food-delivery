import { AuthHeadingText } from "@/components/auth/Heading";
import { AuthtextInput } from "@/components/auth/Inputs";
import { PrimaryBtn } from "@/components/Button/PrimaryBtn";
import { AuthPagesWrapper } from "@/components/containers/AuthPagesWrapper";
// import CustomNumericKeyboard from "@/components/KeyBoard/Numeric";
import { KeyboardTypes } from "@/types/enums";
// import { useState } from "react";
import { View, Text } from "react-native";

const ForgotPassword = () => {
    // const [inputValue, setInputValue] = useState('');

    // const handleKeyPress = (value: string) => {
    //     if (value === '⌫') {
    //         // Handle backspace
    //         setInputValue((prev) => prev.slice(0, -1));
    //     } else {
    //         // Append the pressed key to the input value
    //         setInputValue((prev) => prev + value);
    //     }
    // };
    return (
        <AuthPagesWrapper>
            <View>
                <AuthHeadingText text='Resset Password' />
                <Text style={{ color: '#9796A1', fontSize: 14 }}>Please enter your email address to request a password reset</Text>
                <AuthtextInput
                    keyboard={KeyboardTypes.EMAIL_ADDRESS}
                    placeholder="Enter your email"
                    label=""
                // value={inputValue}
                />
                <View style={{ marginTop: 20 }}>
                    <PrimaryBtn text='Send new password' maxWidth={240} />
                </View>
                {/* <CustomNumericKeyboard onKeyPress={handleKeyPress} /> */}
            </View>
        </AuthPagesWrapper>
    )
}

export default ForgotPassword;