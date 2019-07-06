import React from "React";
import { View, Text, Button } from "react-native";
import AloreButton from "library/components/aloreButton/AloreButton";

export default class ResetScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    ResetScreen
                </Text>

                <AloreButton title="Reset Password" navTo="ResetSuccessScreen"></AloreButton>
                <AloreButton title="Login" navTo="LoginScreen"></AloreButton>
                <AloreButton title="Signup" navTo="SignupNavigator"></AloreButton>
            </View>
        );
    }
}