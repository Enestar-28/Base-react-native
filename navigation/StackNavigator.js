import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import AddScreen from '../screens/AddScreen';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Add"
                    component={AddScreen}
                    options={{ headerShown: false }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StackNavigator;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});