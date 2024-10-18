import { Text } from "react-native";
import React from "react";

interface AuthHeadingTextProps {
    text: string;
}

export const AuthHeadingText = ({ text }: AuthHeadingTextProps) => {
    return (
        <Text style={{
            fontSize: 35,
            fontWeight: '600',
            marginBottom: 30
        }}>
            {text}
        </Text>
    );
};
