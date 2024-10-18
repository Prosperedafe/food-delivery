import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomNumericKeyboardProps {
    onKeyPress: (value: string) => void;
}

const CustomNumericKeyboard = ({ onKeyPress }: CustomNumericKeyboardProps) => {
    const keys = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '0', '.', '⌫'
    ];

    return (
        <View style={styles.container}>
            <View style={styles.keyboard}>
                {keys.slice(0, 3).map((key) => (
                    <TouchableOpacity
                        activeOpacity={.8}
                        key={key}
                        style={styles.key}
                        onPress={() => onKeyPress(key)}
                    >
                        <Text style={styles.keyText}>{key}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.keyboard}>
                {keys.slice(3, 6).map((key) => (
                    <TouchableOpacity
                        activeOpacity={.8}
                        key={key}
                        style={styles.key}
                        onPress={() => onKeyPress(key)}
                    >
                        <Text style={styles.keyText}>{key}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.keyboard}>
                {keys.slice(6, 9).map((key) => (
                    <TouchableOpacity
                        activeOpacity={.8}
                        key={key}
                        style={styles.key}
                        onPress={() => onKeyPress(key)}
                    >
                        <Text style={styles.keyText}>{key}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.keyboard}>
                {keys.slice(9, 12).map((key) => (
                    <TouchableOpacity
                        activeOpacity={.8}
                        key={key}
                        style={styles.key}
                        onPress={() => onKeyPress(key)}
                    >
                        <Text style={styles.keyText}>{key}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2D5DBE5',
        // position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    keyboard: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    key: {
        flexGrow: 1,
        flexBasis: 50,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    keyText: {
        fontSize: 24,
    },
});

export default CustomNumericKeyboard;
