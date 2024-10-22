import { PagesContainer } from '@/components/containers/PagesContainer';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Index = () => {

    return (
        <PagesContainer>
            <View>
                <Text style={{
                    fontSize: 30,
                    fontWeight: '700'
                }}>What would you like
                    to order</Text>
                <Link href='/welcome'>Welcome</Link>
            </View>
        </PagesContainer>
    );
};

export default Index;

