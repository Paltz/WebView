import React, { useState } from "react";
import { View, StyleSheet, Keyboard, Alert, ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import { WebView } from 'react-native-webview';
import { ControlledInputs, DefaultErrorPage } from "@/components";
import { useForm } from "react-hook-form";
import { Formatter } from "@/helper";

export default function WebViewSample () {

    const [webUrl, setWebUrl] = useState<any>("https://google.com");
    const [loading, setIsLoading] = useState<boolean>(false);

    type IUseForm = {
        searchUrl?: string;
    }

    const { handleSubmit, control } = useForm<IUseForm>({
        defaultValues: {
            searchUrl: ""
        },
    });

    const onSearch = (data: any) => {
        
        setIsLoading(true);

        try {
            setWebUrl(Formatter.validateUrl(data.searchUrl));
        } catch (error) {
            Alert.alert(
                "Invalid URL",
                "Please enter a valid website URL. Example: https://example.com",
                [{ text: "OK", onPress: () => console.log("Alert closed") }]
            );

            setWebUrl("");
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    return (
        
        <View style={{ ...styles.mainContainer }}>

            {loading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
            
            <ControlledInputs 
                control={control}
                fieldName={"searchUrl"}
                fieldLabel={"Search URL"}
                placeHolder={"Enter a valid url"}
                keyboardType={"url"}
                returnKeyType={"search"}
                onSearchPress={handleSubmit((data) => {
                    Keyboard.dismiss();
                    onSearch(data);
                })}
            />

            <View style={{ ...styles.subContainer }} >
                <WebView
                    originWhitelist={['*']}
                    source={webUrl ? { uri: webUrl } : { html: DefaultErrorPage }}
                    scalesPageToFit={false}
                    style={{ width: '100%', height: '100%' }}
                    onLoadStart={() => setIsLoading(true)}
                    onLoad={() => setIsLoading(false)}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({ 
    mainContainer: {
        flex: 1,
        marginHorizontal: '6%',
        marginTop: '15%'
    },
    subContainer: {
        flex: 1,
        marginVertical: '10%',
    },
    loaderContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
    },
})