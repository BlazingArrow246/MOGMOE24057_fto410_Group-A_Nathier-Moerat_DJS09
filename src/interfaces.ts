import {LoyaltyUser} from './enums'
import {Price, Country} from './types'

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface Property {
    title: string;
    image: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        country: string;
        code: number | string;
    };
    contact: [number | string];
    isAvailable: boolean;
}