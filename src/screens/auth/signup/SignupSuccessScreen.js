import React from "React";
import { View, StyleSheet, Text } from "react-native";

import AloreTextInput from "library/components/aloreTextInput/AloreTextInput"
import AloreButton from "library/components/aloreButton/AloreButton";
import AloreLogoText from "library/components/aloreLogoText/AloreLogoText";

import palette from "res/palette";
import colors from "res/colors";

export default class SignupSuccessSCreen extends React.Component {
    render() {
        return (
            <View>

                <View style={styles.container}>

                    <AloreLogoText></AloreLogoText>

                    <View style={palette.buttonTextContainer}>
                        <Text style={[palette.fonts.body, styles.signupSuccessText]}>
                        We have sent an email to your registered email address with instruction to sign up. 
                        
                        {"\n\n"}
                        
                        To ensure you experience al the features of Alore, please continue onboarding on Web browser and return here after completion of onboarding.
                        </Text>
                    </View>

                    <View style={[palette.buttonTextContainer, palette.twoButtonLinks, styles.signupSuccessLinks]}>
                        <AloreButton style={{ flex: 0.5 }} type="link" title="Sign in" navTo="LoginScreen"></AloreButton>
                        <AloreButton style={{ flex: 0.5, alignItems: "flex-end" }} type="link" title="I want a demo"></AloreButton>
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
    signupSuccessText: {
        color: colors.text.aloreDarkGrey70,
        fontSize: palette.fontSizes.signupSuccess,
        transform: [{ translateX: palette.fontSizes.body / 2 }],
    },
    signupSuccessLinks: {
        padding: palette.fontSizes.body / 2
    }
})