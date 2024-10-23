import { PagesContainer } from '@/components/containers/PagesContainer';
import { CategoryBar } from '@/components/Filter/CategoryBar';
import { Sidenav } from '@/components/Navigation/Sidenav';
import { FoodSearchBar } from '@/components/SearchBar';
import { View, Text } from 'react-native';

const Index = () => {

    return (
        <PagesContainer>
            <Sidenav />
            <View style={{ paddingVertical: 15 }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: '700',
                    color: '#323643'
                }}>What would you like
                    to order</Text>
                <FoodSearchBar />
                <CategoryBar />
            </View>
        </PagesContainer>
    );
};

export default Index;

