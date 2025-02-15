import React from "react";
import { View, StyleSheet } from "react-native";
import { IControlledInputs, DefaultText } from "..";
import { useController, UseControllerReturn, FieldValues } from "react-hook-form";
import { TextInput } from "react-native-paper"
import { themeColor } from "@/theme";

export default function ControlledInputs ({
    fieldName,
    fieldLabel,
    placeHolder,
    control,
    validateField,
    required,
    onBlurText,
    onChangeText,
    isRight,
    keyboardType = 'default',
    returnKeyType = 'default',
    onSearchPress
} : IControlledInputs) {

    const {
        field: { onChange, onBlur, value },
        fieldState: { invalid },
        formState: { errors }
    }: UseControllerReturn<FieldValues> = useController({
        name: fieldName, 
        control,         
        rules: {
          validate: validateField, 
          ...(required ? { required: 'This field is required' } : {}),  
        },
        defaultValue: ''
    });

    return (
        <View>
            {fieldLabel && (
                <DefaultText style={{ ...styles.mainContainer }}>
                    { fieldLabel }
                </DefaultText>
            )}

            <TextInput
                value={value}
                mode={"outlined"}
                onEndEditing={(val) => {
					if (onBlurText) {
						onBlurText(val);
					}
					onBlur();
				}}
                onChangeText={(val) => {
                    if (onChangeText) {
                        onChangeText(val);
                    }
                    onChange(val);
				}}
                onSubmitEditing={onSearchPress}
                placeholder={placeHolder}
                placeholderTextColor={themeColor.COLOR_LIGHT_DARK_GRAY}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                right={
                    <TextInput.Icon
                        icon="magnify" // Search icon
                        onPress={onSearchPress} // 🔹 Trigger handleSubmit
                    />
                }
                contextMenuHidden={true}
                contentStyle={{
                    color: themeColor.COLOR_BLACK,
                    ...styles.contentStyle
                }}
                outlineStyle={{ 
                    borderColor: invalid ? themeColor.COLOR_RED : themeColor.COLOR_GRAY,
                    ...styles.outlineStyle
                }}
                style={{ 
                    textAlign: isRight ? 'right' : 'left',
                    height: 45
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 5,
        fontFamily: 'Inter-Medium',
        fontSize: 12
    },
    contentStyle: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        top: 0 
    },
    outlineStyle: {
        borderRadius: 20,
        height: 45,
    },
})