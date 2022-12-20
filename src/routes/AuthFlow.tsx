import { createStackNavigator } from "@react-navigation/stack";
import { RecoverPasswordScreen } from "../screens/PasswordRecover";
import { SignInScreen } from "../screens/SignIn";
import { SignUpScreen } from "../screens/SignUp";

const Stack = createStackNavigator();

export function AuthFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
    </Stack.Navigator>
  );
}
