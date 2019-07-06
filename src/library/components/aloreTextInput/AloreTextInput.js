import React from "react";
import { StyleSheet, View, TextInput, Text, PixelRatio } from "react-native";

import colors from "res/colors";
import strings from "res/strings";

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

    _emailValidate = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            return false;
        }
        else {
            return true;
        }
    }

    _handleTextChange = (input) => {
        this.setState({ text: input })
        switch (this.props.type) {
            case "email": {
                this._emailValidate(input)
                this.setState({ text: input, secureTextEntry: false })
                break;
            }
            case "password": {
                this.setState({ text: input, secureTextEntry: true })
                break;
            }
            default: {
                this.setState({ text: input, secureTextEntry: false })
                break;
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...styles.textInputFlex, borderColor: this.state.inputBorderColor, }}>
                    <Text style={{ ...styles.text, ...styles.textInputLeft, color: this.state.placeholderTextColor }}>{this.state.textInputLeft}</Text>
                    <TextInput
                        style={{ ...styles.textInput, ...styles.text }}
                        onChangeText={(text) => this._handleTextChange(text)}
                        value={this.state.text}
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
    container: {
        marginLeft: 56, // 146px
        marginRight: 56, // 146px
        marginTop: 40, // 100px (8dp grid please)
        marginBottom: 0
    },
    textInputFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, // 2px
        borderRadius: 4, // 10px
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
        fontSize: 16, // 56px changed from 21
        fontFamily: "Arial",
        color: colors.aloreDarkGrey
    }
})