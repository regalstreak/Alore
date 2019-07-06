import React from "react";
import { Button } from "react-native";
import { withNavigation } from 'react-navigation';

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
        return (
            <Button
                title={this.props.title || "Button"}
                onPress={this._handlePress}>
            </Button>
        )
    }
}

export default withNavigation(AloreButton);
