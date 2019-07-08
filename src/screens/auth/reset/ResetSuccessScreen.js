import React from "React";
import { View, StyleSheet, Text } from "react-native";

import AloreTextInput from "library/components/aloreTextInput/AloreTextInput"
import AloreButton from "library/components/aloreButton/AloreButton";
import AloreLogoText from "library/components/aloreLogoText/AloreLogoText";

import palette from "res/palette";
import colors from "res/colors";

export default class ResetSuccessSCreen extends React.Component {
    render() {
        return (
            <View>

                <View style={styles.container}>

                    <AloreLogoText></AloreLogoText>

                    <View style={palette.buttonTextContainer}>
                        <Text style={[palette.fonts.body, styles.resetSuccessText]}>
                            We have sent an email to your registered email address with instruction to reset your pasword. Please check your email and come back to sign in.
                        </Text>
                    </View>

                    <AloreButton title="I have reset password"></AloreButton>

                    <View style={[palette.buttonTextContainer, palette.twoButtonLinks]}>
                        <AloreButton style={{ flex: 0.5 }} type="link" title="Sign in" navTo="LoginScreen"></AloreButton>
                        <AloreButton style={{ flex: 0.5, alignItems: "flex-end" }} type="link" title="Signup" navTo="SignupScreen"></AloreButton>
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
    resetSuccessText: {
        color: colors.text.aloreDarkGrey70,
        fontSize: palette.fontSizes.signupSuccess,
        transform: [{ translateX: palette.fontSizes.body / 2 }],
    }
})