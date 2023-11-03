import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './pages/Chats';
import Contatos from './pages/Contatos';
import Perfil from './pages/Perfil';
import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#8D918B',
                    borderTopColor: 'trasparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                 
                },
                tabBarActiveTintColor: '#57EB5F',
                tabBarInactiveTintColor: '#FFF',
                


            }}

        >

            <Tab.Screen
                name="Chats"
                component={Chats}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="chat" size= {size} color={color} />
                    )
                }} />

            <Tab.Screen
                name="Contatos"
                component={Contatos} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="phone" size= {size} color={color} />
                    )
                }}
                />

            <Tab.Screen
                name="Perfil"
                component={Perfil} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size= {size} color={color} />
                    )
                }}
                />

        </Tab.Navigator>
    )
}