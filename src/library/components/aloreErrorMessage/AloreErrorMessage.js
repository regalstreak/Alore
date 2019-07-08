import React from "react";
import { StyleSheet, Text, View } from "react-native";

import palette from "res/palette";
import colors from "res/colors";



export default class AloreErrorMessage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={palette.buttonTextContainer}>
                <Text style={[palette.fonts.body, styles.errorText]}>
                    {this.props.value}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    errorText: {
        color: colors.aloreRed,
        fontSize: palette.fontSizes.link
    }
})