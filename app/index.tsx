import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Home = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>What would you like
                to order</Text>
            <Link href='/welcome'>Welcome</Link>
        </View>
    );
};

export default Home;

