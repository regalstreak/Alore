import { createSwitchNavigator } from "react-navigation";
import ResetScreen from "./ResetScreen";
import ResetSuccessScreen from "./ResetSuccessScreen";
import SignupNavigator from "../signup/SignupNavigator";

const ResetNavigator = createSwitchNavigator({
    ResetScreen: {
        screen: ResetScreen
    },
    ResetSuccessScreen: {
        screen: ResetSuccessScreen
    },
    SignupNavigator: {
        screen: SignupNavigator
    }
})

export default ResetNavigator;