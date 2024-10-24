import { View, TextInput, Text, StyleSheet } from "react-native"
import { colors } from '@/styles/colors'
import { InputLabelProps } from "@/types/interface"
import { useState } from "react"
import Svg, { Path } from "react-native-svg"

export const AuthtextInput = ({ placeholder, label, keyboard }: InputLabelProps) => {
    return (
        <View>
            <Text style={inputSyles.label}>
                {label}
            </Text>
            <TextInput
                style={inputSyles.textInput}
                placeholder={placeholder}
                keyboardType={keyboard}
            />
        </View>
    )
}

export const AuthPasswordInput = ({ placeholder, label, keyboard }: InputLabelProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <View>
            <Text style={inputSyles.label}>
                {label}
            </Text>
            <View style={{ position: 'relative' }}>
                <TextInput
                    style={inputSyles.textInput}
                    placeholder={placeholder}
                    keyboardType={keyboard}
                    secureTextEntry={!showPassword}
                />
                <Svg
                    onPress={() => setShowPassword(!showPassword)}
                    style={{
                        position: 'absolute',
                        top: '28%',
                        right: 18,
                    }}
                    width="18" height="13" viewBox="0 0 18 13" fill="none">
                    <Path d="M11.5739 6.06257C11.5739 6.79342 11.2835 7.49434 10.7667 8.01113C10.25 8.52792 9.54903 8.81825 8.81818 8.81825C8.08733 8.81825 7.38641 8.52792 6.86962 8.01113C6.35283 7.49434 6.0625 6.79342 6.0625 6.06257C6.0625 5.33171 6.35283 4.6308 6.86962 4.11401C7.38641 3.59721 8.08733 3.30688 8.81818 3.30688C9.54903 3.30688 10.25 3.59721 10.7667 4.11401C11.2835 4.6308 11.5739 5.33171 11.5739 6.06257Z" fill="#D0D2D1" />
                    <Path fillRule="evenodd" clipRule="evenodd" d="M0 6.0625C0 6.0625 3.30682 0 8.81818 0C14.3295 0 17.6364 6.0625 17.6364 6.0625C17.6364 6.0625 14.3295 12.125 8.81818 12.125C3.30682 12.125 0 6.0625 0 6.0625ZM8.81818 9.92045C9.84138 9.92045 10.8227 9.51399 11.5462 8.79049C12.2697 8.06698 12.6761 7.08569 12.6761 6.0625C12.6761 5.03931 12.2697 4.05802 11.5462 3.33451C10.8227 2.61101 9.84138 2.20455 8.81818 2.20455C7.79499 2.20455 6.8137 2.61101 6.0902 3.33451C5.36669 4.05802 4.96023 5.03931 4.96023 6.0625C4.96023 7.08569 5.36669 8.06698 6.0902 8.79049C6.8137 9.51399 7.79499 9.92045 8.81818 9.92045Z" fill="#D0D2D1" />
                </Svg>
            </View>
        </View>
    )
}

const inputSyles = StyleSheet.create({
    textInput: {
        fontSize: 17,
        color: colors.dark,
        fontWeight: '500',
        borderColor: '#d9d9d9',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 18,
        paddingVertical: 12,
        marginBottom: 20
    },
    label: {
        color: '#9796A1',
        fontSize: 16,
        marginBottom: 7
    }
})