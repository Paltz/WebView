import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { IDefaultText } from "..";
import { themeColor } from "@/theme";

export default function DefaultText ({
    children,
    style
}:IDefaultText) {
    return (
        <Text
            style={{ 
                ...styles.mainContainer,
                ...style 
            }}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({ 
    mainContainer: {
        color: themeColor.COLOR_BLACK
    }
})