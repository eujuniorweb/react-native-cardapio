import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


import HomeList from "./HomeList";
import HomeProducts from "./HomeProducts";



const Navigator = createStackNavigator({
    HomeList,
        HomeProducts

    }
);

const AppContainer = createAppContainer(Navigator);
export default AppContainer;