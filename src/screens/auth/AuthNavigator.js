import { createStackNavigator } from "react-navigation";
import LoginScreen from "./login/LoginScreen";
import ResetNavigator from "./reset/ResetNavigator";
import SignupNavigator from "./signup/SignupNavigator";

const AuthNavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    ResetNavigator: {
        screen: ResetNavigator
    },
    SignupNavigator: {
        screen: SignupNavigator
    },
},
    {
        headerMode: "none"
    }
)

export default AuthNavigator;