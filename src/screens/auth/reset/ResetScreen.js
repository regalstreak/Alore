import React from "React";
import { View, StyleSheet, Text } from "react-native";

import AloreTextInput from "library/components/aloreTextInput/AloreTextInput"
import AloreButton from "library/components/aloreButton/AloreButton";
import AloreLogoText from "library/components/aloreLogoText/AloreLogoText";
import AloreErrorMessage from "library/components/aloreErrorMessage/AloreErrorMessage"

import palette from "res/palette";
import colors from "res/colors";

export default class ResetScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <AloreLogoText></AloreLogoText>

                <AloreTextInput type={"email"}></AloreTextInput>

                <AloreButton title="Reset Password" navTo="ResetSuccessScreen"></AloreButton>

                <View style={[palette.buttonTextContainer, palette.twoButtonLinks]}>
                    <AloreButton style={{ flex: 0.5 }} type="link" title="Sign in" navTo="LoginScreen"></AloreButton>
                    <AloreButton style={{ flex: 0.5, alignItems: "flex-end" }} type="link" title="Signup" navTo="SignupNavigator"></AloreButton>
                </View>

                <AloreErrorMessage value="It seems you have not registered with Alore. Please sign up to continue"></AloreErrorMessage>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 104
    },

})