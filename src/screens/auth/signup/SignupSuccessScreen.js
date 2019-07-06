import React from "React";
import { View, Text, Button } from "react-native";
import AloreButton from "library/components/aloreButton/AloreButton";

export default class SignupSuccessScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    SignupSuccessScreen
                </Text>

                <AloreButton title="I want a demo"></AloreButton>
                <AloreButton title="Login" navTo="LoginScreen"></AloreButton>

            </View>
        );
    }
}