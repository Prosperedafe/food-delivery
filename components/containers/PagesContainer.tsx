import { IAuthPagesWrapper } from "@/types/interface"
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native"


export const PagesContainer = ({ children }: IAuthPagesWrapper) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <ScrollView contentContainerStyle={styles.container}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 40,
        flexGrow: 1,
        justifyContent: 'center',
    },
})
