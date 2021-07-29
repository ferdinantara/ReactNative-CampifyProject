import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import InitialScreen from '../screens/initialScreen';
import homeScreen from '../screens/homeScreen';
import chooseMateriScreen from '../screens/chooseMateriScreen';
import materiScreen from '../screens/materiScreen';
import videoScreen from '../screens/videoScreen';
import pidatoScreen from '../screens/pidatoScreen';
import quizScreen from '../screens/quizScreen';
import pembahasanScreen from '../screens/pembahasanScreen';

const InitialNavigator = createStackNavigator(
    {
        InitialScreen: {screen: InitialScreen},
        Login: {screen: LoginScreen},
        Register: {screen: RegisterScreen}
    },
    {
        initialRouteName: 'InitialScreen',
    }
);

const MenuNavigator = createStackNavigator(
    {
        Home: {
            screen: homeScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        Quiz: {
            screen: quizScreen
        },
        ChooseMateri: {
            screen: chooseMateriScreen
        },
        Materi: {
            screen: materiScreen
        },
        Video: {
            screen: videoScreen
        },
        Pidato: {
            screen: pidatoScreen
        },
        Pembahasan: {
            screen: pembahasanScreen
        },
    },
    {
        headerStyle: {
            shadowColor: 'transparent',
            elevation: 0
        }
    }
);

const MainNavigator = createSwitchNavigator(
    {
        // Account: AccountNavigator,
        Initial: InitialNavigator,
        Menu: MenuNavigator
    },
    {
        initialRouteName: 'Initial',
    }
);
  
  export default createAppContainer(MainNavigator);