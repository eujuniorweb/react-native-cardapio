import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';

import Home from './Home';
import Contato from './Contato';
import Horarios from './Horarios';
import Sobre from './Sobre';

const AppTabNavigator = createBottomTabNavigator({
       Home,
        Contato,
        Horarios,
        Sobre
    },{
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/images/home_azul.png')
                                    : require('../../assets/images/home_preto.png')
                            }
                            style={styles.icon}
                        />
                    );
                } else if (routeName === 'Contato') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/images/contato_azul.png')
                                    : require('../../assets/images/contato_preto.png')
                            }
                            style={styles.icon}
                        />
                    );
                }else if (routeName === 'Horarios') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/images/horario_azul.png')
                                    : require('../../assets/images/horario_preto.png')
                            }
                            style={styles.icon}
                        />
                    );
                }else if (routeName === 'Sobre') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/images/sobre_azul.png')
                                    : require('../../assets/images/sobre_preto.png')
                            }
                            style={styles.icon}
                        />
                    );
                }
            },
        }),
    }

);

export default AppTabNavigator;

const styles = StyleSheet.create({
    icon:{
        width:26,
        height:26
    }
});

