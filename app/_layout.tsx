import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text as RNPText, Searchbar, SearchbarProps } from "react-native-paper"
import { WebView, WebViewProps } from "react-native-webview";
import { StatusBar, TextProps } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout () {

    (RNPText as React.ComponentType<Partial<TextProps>>).defaultProps = {
		...(RNPText as React.ComponentType<Partial<TextProps>>).defaultProps,
		allowFontScaling: false,
	};

	(Searchbar as React.ComponentType<Partial<SearchbarProps>>).defaultProps = {
		...(Searchbar as React.ComponentType<Partial<SearchbarProps>>).defaultProps,
		allowFontScaling: false,
	};

    (WebView as React.ComponentType<Partial<WebViewProps>>).defaultProps = {
        ...(WebView as React.ComponentType<Partial<WebViewProps>>).defaultProps,
        textZoom: 100,
    };

    const fullScreenOption = {
		headerShown: false,
		gestureEnabled: false
	}

	return (
		<SafeAreaProvider>
            <StatusBar animated={true} />
			<Stack screenOptions={fullScreenOption}>
				<Stack.Screen name="index" />
			</Stack>
		</SafeAreaProvider>
  	)
}