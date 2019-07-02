import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthNavigator from "../auth/AuthNavigator"
import HomeScreen from "../home/HomeScreen"

export default class MainNavigator extends React.Component {
    render() {
        return (
            <AppContainer></AppContainer>
        );
    }
}

const AppSwitchNavigator = createSwitchNavigator({
    AuthNavigator: {
        screen: AuthNavigator
    },
    HomeScreen: {
        screen: HomeScreen
    }
})

const AppContainer = createAppContainer(AppSwitchNavigator);
