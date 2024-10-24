import { PagesContainer } from '@/components/containers/PagesContainer';
import { CategoryBar } from '@/components/Filter/CategoryBar';
import { Sidenav } from '@/components/Navigation/SideNav/Sidenav';
import { PopularFoodCard } from '@/components/Popular/Card';
import { FeaturedRestaurants } from '@/components/Restaurants/Featured';
import { FoodSearchBar } from '@/components/SearchBar';
import { popularFood } from '@/data/popular';
import { View, Text, ScrollView } from 'react-native';

const Index = () => {

    return (
        <PagesContainer>
            <View style={{ paddingHorizontal: 16 }}>
                <Sidenav />
            </View>
            <View style={{ paddingVertical: 15, paddingHorizontal: 16 }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: '700',
                    color: '#323643'
                }}>What would you like
                    to order</Text>
                <FoodSearchBar />
            </View>
            <CategoryBar />
            <FeaturedRestaurants />
            <View
                style={{
                    paddingHorizontal: 16
                }}>
                <Text style={{
                    color: '#323643',
                    fontSize: 18,
                    fontWeight: '600'
                }}>Popular Items</Text>
                <View
                    style={{
                        paddingVertical: 16,
                        flexDirection: 'row',
                    }}>
                    {popularFood.map((food) =>
                        <PopularFoodCard
                            {...food}
                            key={food?.id}
                        />
                    )}
                </View>
            </View>
        </PagesContainer>
    );
};

export default Index;

