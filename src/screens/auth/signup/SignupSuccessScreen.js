import React from "React";
import { View, Text, Button } from "react-native";

export default class SignupSuccessScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    SignupSuccessScreen
                </Text>

                <Button title="I want a demo"></Button>
                <Button title="Sign in" onPress={() => this.props.navigation.navigate('LoginScreen')}></Button>
            </View>
        );
    }
}