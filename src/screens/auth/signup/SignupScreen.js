import React from "React";
import { View, StyleSheet, Text } from "react-native";

import AloreTextInput from "library/components/aloreTextInput/AloreTextInput"
import AloreButton from "library/components/aloreButton/AloreButton";
import AloreLogoText from "library/components/aloreLogoText/AloreLogoText";
import AloreErrorMessage from "library/components/aloreErrorMessage/AloreErrorMessage";

import palette from "res/palette";
import colors from "res/colors";

import { signup } from "library/networking/API";


export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    _emailValidate = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            return false;
        }
        else {
            return true;
        }
    }

    _handleSignupPress = () => {
        if (this.state.email && this.state.password) {

            if (this._emailValidate(this.state.email)) {

                signup(this.state.email, this.state.password).then(response => {
                    console.log(response)
                    if (response.responseCodeJson.message.toLowerCase() == "success"
                        && response.responseCodeJson.errorcode == 200) {

                        this.props.navigation.navigate("SignupSuccessScreen");
                    } else if (response.responseCodeJson.message) {
                        this.setState({
                            error: response.responseCodeJson.message
                        })
                    } else {
                        this.setState({
                            error: "An error has occured. Please try again."
                        })
                    }
                });
            } else {
                this.setState({
                    error: "Email is wrongly formatted. Please try again."
                })
            }
        } else {
            this.setState({
                error: "Email or password cannot be empty. Please try again."
            })
        }
    }

    render() {
        return (
            <View>
                <View style={styles.container}>

                    <AloreLogoText></AloreLogoText>

                    <AloreTextInput onChangeText={(text) => this.setState({ email: text })} value={this.state.email} type={"email"}></AloreTextInput>
                    <AloreTextInput onChangeText={(text) => this.setState({ password: text })} value={this.state.password} type={"password"}></AloreTextInput>

                    {/* <AloreButton title="Sign up" navTo="SignupSuccessScreen"></AloreButton> */}
                    <AloreButton title="Sign up" handlePress={this._handleSignupPress}></AloreButton>

                    <View style={[palette.buttonTextContainer, palette.twoButtonLinks]}>
                        <AloreButton type="link" title="Sign in" navTo="LoginScreen"></AloreButton>
                    </View>

                    <AloreErrorMessage value={this.state.error}></AloreErrorMessage>

                    <View style={palette.buttonTextContainer}>
                        <Text style={[palette.fonts.body, styles.privacyText]}>
                            By signing up with us, you agree with our T&C and Privacy policy.
                        </Text>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 104
    },
    privacyText: {
        color: colors.text.aloreDarkGrey70,
        fontSize: palette.fontSizes.link,
        marginTop: 104 / 3
    }
})