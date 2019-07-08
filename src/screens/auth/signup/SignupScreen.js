import React from "React";
import { View, StyleSheet, Text } from "react-native";

import AloreTextInput from "library/components/aloreTextInput/AloreTextInput"
import AloreButton from "library/components/aloreButton/AloreButton";
import AloreLogoText from "library/components/aloreLogoText/AloreLogoText";

import palette from "res/palette";
import colors from "res/colors";

export default class SignupScreen extends React.Component {
    render() {
        return (
            <View>

                <View style={styles.container}>

                    <AloreLogoText></AloreLogoText>

                    <AloreTextInput type={"email"}></AloreTextInput>
                    <AloreTextInput type={"password"}></AloreTextInput>

                    <AloreButton title="Sign up" navTo="SignupSuccessScreen"></AloreButton>

                    <View style={[palette.buttonTextContainer, palette.twoButtonLinks]}>
                        <AloreButton type="link" title="Sign in" navTo="LoginScreen"></AloreButton>
                    </View>

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
        marginTop: 104 / 2
    }
})