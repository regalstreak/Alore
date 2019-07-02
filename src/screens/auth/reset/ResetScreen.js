import React from "React";
import { View, Text, Button } from "react-native";

export default class ResetScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    ResetScreen
                </Text>

                <Button title="Reset password" onPress={() => this.props.navigation.navigate('ResetSuccessScreen')}></Button>
                <Button title="Login" onPress={() => this.props.navigation.navigate('LoginScreen')}></Button>
                <Button title="Signup" onPress={() => this.props.navigation.navigate('SignupNavigator')}></Button>
            </View>
        );
    }
}