import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


import HomeList from "./HomeList";
import HomeProducts from "./HomeProducts";



const Navigator = createStackNavigator({
        HomeList:{
            screen:HomeList
        },
        HomeProducts

    });

export default Navigator;