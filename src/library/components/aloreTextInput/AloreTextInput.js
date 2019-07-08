import React from "react";
import { StyleSheet, View, TextInput, Text, PixelRatio } from "react-native";

import colors from "res/colors";
import strings from "res/strings";
import palette from "res/palette";

const devicePixelRatio = PixelRatio.get();
// OnePlus 5T devicePixelRatio = 2.625;

export default class AloreTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            secureTextEntry: false,
            inputBorderColor: colors.aloreGrey,
            placeholderTextColor: colors.text.aloreDarkGrey50,
            placeholderText: "",
            textContentType: "none",
            textInputLeft: "",
        };

        // Set correct content type of TextInput
        switch (this.props.type) {
            case "email": {
                this.state.textContentType = "emailAddress";
                this.state.textInputLeft = strings.components.aloreTextInput.email;
                break;
            }
            case "password": {
                this.state.textContentType = "password";
                this.state.textInputLeft = strings.components.aloreTextInput.password;
                break;
            }
            default: {
                this.state.textContentType = "none";
                this.state.textInputLeft = "";
                this.state.placeholderText = this.props.placeholder;
                break;
            }
        }
    }

    _handleOnFocus = () => {
        this.setState({ inputBorderColor: colors.aloreBlue, placeholderTextColor: colors.text.aloreDarkGrey70 })
    }

    _handleOnBlur = () => {
        this.setState({ inputBorderColor: colors.aloreGrey, placeholderTextColor: colors.text.aloreDarkGrey50 })
    }

    // _handleTextChange = (input) => {
    //     this.setState({ text: input })
    //     switch (this.props.type) {
    //         case "email": {
    //             this.setState({ text: input, secureTextEntry: false })
    //             this.props.textCallback("email", input);
    //             break;
    //         }
    //         case "password": {
    //             this.setState({ text: input, secureTextEntry: true })
    //             this.props.textCallback("email", this.state.text);
    //             break;
    //         }
    //         default: {
    //             this.setState({ text: input, secureTextEntry: false })
    //             this.props.textCallback("none", this.state.text);
    //             break;
    //         }
    //     }
    // }

    render() {
        return (
            <View style={palette.buttonTextContainer}>
                <View style={{ ...styles.textInputFlex, borderColor: this.state.inputBorderColor, }}>
                    <Text style={{ ...styles.text, ...styles.textInputLeft, color: this.state.placeholderTextColor }}>{this.state.textInputLeft}</Text>
                    <TextInput
                        style={{ ...styles.textInput, ...styles.text }}
                        onChangeText={this.props.onChangeText}
                        value={this.props.value}
                        onFocus={this._handleOnFocus}
                        onBlur={this._handleOnBlur}
                        secureTextEntry={this.state.secureTextEntry}
                        placeholder={this.state.placeholderText}
                        placeholderTextColor={this.state.placeholderTextColor}
                        textContentType={this.state.textContentType}
                    // selectionColor={colors.aloreBlue}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, // 2px
        borderRadius: palette.dims.borderRadius,
        paddingLeft: 8, // 32px
        paddingRight: 8, // 32px
    },
    textInput: {
        flex: 1,
    },
    textInputLeft: {
        paddingRight: 8, // 32px
    },
    text: {
        ...palette.fonts.body,
        color: colors.aloreDarkGrey
    }
})