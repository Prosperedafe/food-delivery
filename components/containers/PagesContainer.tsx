import { IAuthPagesWrapper } from "@/types/interface"
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native"

export const PagesContainer = ({ children, paddingX }: IAuthPagesWrapper) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <ScrollView contentContainerStyle={{
                ...styles.container,
                paddingHorizontal: paddingX
            }}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flexGrow: 1,
        backgroundColor: '#fff',
    },
})
