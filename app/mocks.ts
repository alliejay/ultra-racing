import { CarPart } from './car-part';

export const CARPARTS: CarPart[] = [{
    'id': 1,
    'name': "Super Tires",
    'description': 'These tires are the very best',
    'inStock': 5,
    'price': 4.99,
    'image': 'app/img/tire.png',
    featured: false,
    quantity: 0
    },
    {
        'id': 2,
        'name': "Reinforced Shocks",
        'description': 'Shocks made from kyptonite',
        'inStock': 4,
        'price': 10.99,
        'image': 'app/img/shocks.png',
        featured: true,
        quantity: 0
    },
    {
        'id': 3,
        'name': "Padded Seats",
        'description': 'Super soft seats for smooth ride',
        'inStock': 0,
        'price': 24.99,
        'image': 'app/img/seat.png',
        featured: false,
        quantity: 0
    }];