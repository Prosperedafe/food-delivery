import React from "react";
import { KeyboardTypes } from "./enums";
import { ImageSourcePropType } from "react-native";

export interface IAuthPagesWrapper {
    children: React.ReactNode;
    paddingX?: number
}

export interface InputLabelProps {
    label: string
    placeholder: string
    keyboard: KeyboardTypes
}

export interface IPrimaryButton {
    maxWidth: number,
    text: string
}

export type RestaurantFoodProps = {
    image: ImageSourcePropType;
    name: string;
    verified: boolean;
    delivery: string;
    rating: number;
    time: string;
    categories: string[];
    _id: string;
};

export type FoodItemProps = {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    reviewsCount: string;
    image: ImageSourcePropType;
    isFavorite: boolean;
};
