import React from "React";
import { View, Text, Button } from "react-native";
import AloreButton from "library/components/aloreButton/AloreButton";

export default class SignupScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    SignupScreen
                </Text>

                <AloreButton title="Signup" navTo="SignupSuccessScreen"></AloreButton>
                <AloreButton title="Login" navTo="LoginScreen"></AloreButton>

            </View>
        );
    }
}