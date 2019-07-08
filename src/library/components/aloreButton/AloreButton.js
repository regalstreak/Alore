import React from "react";
import { Platform, StyleSheet, TouchableOpacity, TouchableNativeFeedback, View, Text } from "react-native";
import { withNavigation } from 'react-navigation';

import palette from "res/palette"
import colors from "res/colors"

const paddingButton = 2 + palette.fontSizes.body / 2;
const Touchable =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

class AloreButton extends React.Component {
    constructor(props) {
        super(props);
    }

    _handlePress = () => {
        if (this.props.navTo) {
            this.props.navigation.navigate(this.props.navTo);
        }
    }
    render() {
        if (this.props.type === "button" || !this.props.type) {
            return (
                <Touchable onPress={this._handlePress}>
                    <View style={[styles.button, palette.buttonTextContainer, this.props.style]}>
                        <Text style={styles.buttonText}>
                            {this.props.title || "Button"}
                        </Text>
                    </View>
                </Touchable>
            )
        } else if (this.props.type === "link") {
            return (
                <Touchable onPress={this._handlePress}>
                    <View style={this.props.style}>
                        <Text style={styles.buttonLinkText}>
                            {this.props.title || "Button"}
                        </Text>
                    </View>
                </Touchable>
            )
        } else {
            return (
                <Text>Some problem with button, set 'type' prop to "link" or "button".</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.aloreBlue,
        alignItems: "center",
        borderRadius: palette.dims.borderRadius,
        paddingTop: paddingButton,
        paddingBottom: paddingButton

    },
    buttonText: {
        color: colors.white,
        ...palette.fonts.body,
    },
    buttonLinkText: {
        color: colors.aloreBlue,
        fontSize: palette.fontSizes.link
    }
})

export default withNavigation(AloreButton);
