import React from "react";
import { KeyboardTypes } from "./enums";

export interface IAuthPagesWrapper {
    children: React.ReactNode;
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