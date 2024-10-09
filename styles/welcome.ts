import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const welcome = StyleSheet.create({
    page: {
        flex: 1,
        height: 100,
    },
    bgImg: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    },
    gradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    wrapper: {
        paddingTop: 80,
        paddingBottom: 40,
        paddingHorizontal: 16,
        position: 'relative',
        zIndex: 2,
        gap: 60,
        justifyContent: 'space-between',
        flexGrow: 1
    },
    heading: {
        fontSize: 40,
        fontWeight: '700'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.secondary2,
        marginTop: 10
    }
})