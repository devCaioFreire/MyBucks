import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from "../pages/SignIn/signIn";
import SignUp from '../pages/SignUp/signUp'

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>

            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerTitle: 'Back',
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerTitleAlign: 'left',
                    headerTintColor: '#28A9CE',
                    headerTitleStyle: { marginLeft: -30, fontSize: 18 }
                }}
            />

        </AuthStack.Navigator>
    );
}

export default AuthRoutes;