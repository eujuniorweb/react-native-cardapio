import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Sobre extends Component{

    static navigationOptions = {
      title:"Sobre"
    };

    render(){
        return(
            <View>
                <Text>Sobre</Text>
            </View>
        );
    }

}

