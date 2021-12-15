import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator()
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';


export function AppRoutes(){
    return(
        <Navigator>
            <Screen 
                name="Listagem"
                component={Dashboard}
            />
            <Screen 
                name="Cadastrar"
                component={Register}
            />
            <Screen 
                name="Resumo"
                component={Register}
            />

        </Navigator>
    )
}