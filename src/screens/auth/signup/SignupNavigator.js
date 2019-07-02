import { createSwitchNavigator } from "react-navigation";
import SignupScreen from "./SignupScreen";
import SignupSuccessScreen from "./SignupSuccessScreen";

const SignupNavigator = createSwitchNavigator({
    SignupScreen: {
        screen: SignupScreen
    },
    SignupSuccessScreen: {
        screen: SignupSuccessScreen
    },
})

export default SignupNavigator;