import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const App = createBottomTabNavigator({
<<<<<<< HEAD
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
=======
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
>>>>>>> 4acac3f3ce1e4443990b92dbced3d9989843e87e
);

const AppContainer =createAppContainer(App);

export default AppContainer;

const styles = StyleSheet.create({
<<<<<<< HEAD
    icon:{
        width:26,
        height:26
    }
=======
  icon:{
    width:26,
    height:26
  }
>>>>>>> 4acac3f3ce1e4443990b92dbced3d9989843e87e
});

