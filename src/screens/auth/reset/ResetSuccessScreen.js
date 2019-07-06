import React from "React";
import { View, Text, Button } from "react-native";
import AloreButton from "library/components/aloreButton/AloreButton";

export default class ResetSuccessScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    ResetSuccessScreen
                </Text>

                <AloreButton title="I have reset password"></AloreButton>
                <AloreButton title="Sign in" navTo="LoginScreen"></AloreButton>
                <AloreButton title="Signup" navTo="SignupNavigator"></AloreButton>

            </View>
        );
    }
}