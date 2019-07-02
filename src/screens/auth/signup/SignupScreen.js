import React from "React";
import { View, Text, Button } from "react-native";

export default class SignupScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    SignupScreen
                </Text>

                <Button title="Signup" onPress={() => this.props.navigation.navigate('SignupSuccessScreen')}></Button>
                <Button title="Sign in" onPress={() => this.props.navigation.navigate('LoginScreen')}></Button>
            </View>
        );
    }
}