import React from "react";
import { View, Text, Button } from "react-native";

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    LoginScreen
                </Text>
                <Button title="Login" onPress={() => this.props.navigation.navigate('HomeScreen')}></Button>
                <Button title="Forgot Password" onPress={() => this.props.navigation.navigate('ResetNavigator')}></Button>
                <Button title="Signup" onPress={() => this.props.navigation.navigate('SignupScreen')}></Button>
            </View>
        );
    }
}