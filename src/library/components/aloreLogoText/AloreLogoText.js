import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import images from "res/images";
import palette from "res/palette";
import colors from "res/colors";

export default class AloreLogoText extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.imageContainer}>
                    <Image style={styles.blueLogoImage} source={images.blueLogo} />
                </View>

                <View style={styles.aloreTextContainer}>
                    <Text style={styles.aloreText}>
                        Alore - {" "}
                        <Text style={styles.growthText}>
                            Growth {" "}
                            <Text style={styles.osText}>
                                OS
                        </Text>
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center"
    },
    blueLogoImage: {
        height: 64,
        width: 64
    },
    aloreTextContainer: {
        alignItems: "center"
    },
    aloreText: {
        ...palette.fonts.body,
        color: colors.text.aloreDarkGrey70,
    },
    growthText: {
        ...palette.fonts.body,
        color: colors.aloreBlue
    },
    osText: {
        ...palette.fonts.body,
        color: colors.aloreYellow
    },
})