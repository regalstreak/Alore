import React from "react";
import { View, Text, Button } from "react-native";

import AloreTextInput from "library/components/aloreTextInput/AloreTextInput"
import AloreButton from "library/components/aloreButton/AloreButton";

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    LoginScreen
                </Text>

                <AloreButton title="Login" navTo="HomeScreen"></AloreButton>
                <AloreButton title="Forgot Password" navTo="ResetNavigator"></AloreButton>
                <AloreButton title="Signup" navTo="SignupScreen"></AloreButton>

                <AloreTextInput type={"email"}></AloreTextInput>
                <AloreTextInput type={"password"}></AloreTextInput>
                <AloreTextInput placeholder={"Normal text here"}></AloreTextInput>
            </View>
        );
    }
}