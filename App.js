import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const App = createBottomTabNavigator({
        Home:{
            screen:Home
        },
        Contato:{
            screen:Contato
        },
        Horarios:{
            screen:Horarios
        },
        Sobre:{
            screen:Sobre
        }
    },{
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('./assets/images/home_azul.png')
                                    : require('./assets/images/home_preto.png')
                            }
                            style={styles.icon}
                        />
                    );
                } else if (routeName === 'Contato') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('./assets/images/contato_azul.png')
                                    : require('./assets/images/contato_preto.png')
                            }
                            style={styles.icon}
                        />
                    );
                }else if (routeName === 'Horarios') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('./assets/images/horario_azul.png')
                                    : require('./assets/images/horario_preto.png')
                            }
                            style={styles.icon}
                        />
                    );
                }else if (routeName === 'Sobre') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('./assets/images/sobre_azul.png')
                                    : require('./assets/images/sobre_preto.png')
                            }
                            style={styles.icon}
                        />
                    );
                }
            },
        }),
    }
);

const AppContainer =createAppContainer(App);

export default AppContainer;

const styles = StyleSheet.create({
    icon:{
        width:26,
        height:26
    }
});

