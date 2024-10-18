import { colors } from "@/styles/colors"
import { IPrimaryButton } from "@/types/interface"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const PrimaryBtn = ({ text, maxWidth }: IPrimaryButton) => {

    const styles = StyleSheet.create({
        button: {
            width: '100%',
            maxWidth,
            backgroundColor: colors.primary,
            marginHorizontal: 'auto',
            borderRadius: 28,
            paddingVertical: 15,
            paddingHorizontal: 4,
            // shadowColor: "##ffffff15",
            // shadowOffset: {
            //     width: 0,
            //     height: 5,
            // },
            // shadowOpacity: 10,
            // shadowRadius: 16.00,
            // elevation: 24,
        },
        text: {
            textAlign: 'center',
            color: '#fff',
            fontSize: 15,
            fontWeight: '600',
        }
    })

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}