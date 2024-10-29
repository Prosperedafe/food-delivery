import mcdonald from '@/assets/images/mcdonalds-bugger.png'
import starbuck from '@/assets/images/starbucks.png'
import redPizza from '@/assets/images/Red Pizza.png'
import chickenHawali from '@/assets/images/chickenHawali.png'

export const featured = [
    {
        _id: 'mcdonald',
        image: mcdonald,
        name: 'McDonald’s',
        verified: true,
        delivery: 'Free delivery',
        rating: 4.5,
        time: '10- 15 mins',
        categories: ['burger', 'chicken', 'fast food'],
        type: 'restaurants'
    },
    {
        _id: 'starbuck',
        image: starbuck,
        name: 'Starbuck',
        verified: true,
        delivery: 'Free delivery',
        rating: 4.7,
        time: '10- 15 mins',
        categories: ['burger', 'chicken', 'fast food'],
        type: 'restaurants'
    },
    {
        _id: 'red-hot-pizza',
        image: redPizza,
        name: 'Red N Hot Pizza',
        verified: false,
        delivery: 'Free delivery',
        rating: 4.8,
        time: '10- 15 mins',
        categories: ['Chicken', 'Chill'],
        type: 'restaurants'
    },
    {
        _id: 'chicken-hawaiian',
        image: chickenHawali,
        name: 'Chicken Hawaiian',
        verified: true,
        delivery: 'Free delivery',
        rating: 4.5,
        time: '10- 15 mins',
        categories: ['chill', 'chicken'],
        type: 'restaurants'
    },
]