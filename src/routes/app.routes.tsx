import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import {MaterialIcons} from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ?  20 : 0,
                    backgroundColor: theme.colors.shape,
                }

            }}
        >
            <Screen 
                name="Listagem"
                component={Dashboard}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons name='format-list-bulleted' size={24} color={color}/>
                    )
                }}
            />
            <Screen 
                name="Cadastrar"
                component={Register}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons name='attach-money' size={24} color={color}/>
                    )
                }}
            />
            <Screen 
                name="Resumo"
                component={Register}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons name='pie-chart' size={24} color={color}/>
                    )
                }}
            />
        </Navigator>
    )
}