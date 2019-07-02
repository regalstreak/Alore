import React from "React";
import { View, Text, Button } from "react-native";

export default class ResetSuccessScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    ResetSuccessScreen
                </Text>

                <Button title="I have reset password"></Button>
                <Button title="Sign in" onPress={() => this.props.navigation.navigate('LoginScreen')}></Button>
                <Button title="Signup" onPress={() => this.props.navigation.navigate('SignupNavigator')}></Button>
            </View>
        );
    }
}