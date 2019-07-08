import React from "react";
import { View, StyleSheet } from "react-native";

import AloreTextInput from "library/components/aloreTextInput/AloreTextInput"
import AloreButton from "library/components/aloreButton/AloreButton";
import AloreLogoText from "library/components/aloreLogoText/AloreLogoText";

import palette from "res/palette";

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <AloreLogoText></AloreLogoText>

                <AloreTextInput type={"email"}></AloreTextInput>
                <AloreTextInput type={"password"}></AloreTextInput>

                <AloreButton title="Login" navTo="HomeScreen"></AloreButton>

                <View style={[palette.buttonTextContainer, palette.twoButtonLinks]}>
                    <AloreButton style={{ flex: 0.5 }} type="link" title="Forgot Password" navTo="ResetNavigator"></AloreButton>
                    <AloreButton style={{ flex: 0.5, alignItems: "flex-end" }} type="link" title="Signup" navTo="SignupScreen"></AloreButton>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 104
    },
})