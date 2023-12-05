import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen.js'
import WorkoutScreen from './screens/WorkoutScreen.js'
import FitScreen from './screens/FitScreen.js'
import RestScreen from './screens/RestScreen.js'
import WelcomeScreen from './screens/WelcomeScreen.js'

const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}} />
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
                <Stack.Screen name='Workout' component={WorkoutScreen} options={{headerShown:false}} />
                <Stack.Screen name='Fit' component={FitScreen} options={{headerShown:false}} />
                <Stack.Screen name='Rest' component={RestScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
    }

export default AppNavigator

const styles = StyleSheet.create({})