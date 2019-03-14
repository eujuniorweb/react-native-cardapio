import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

export default class HomeProducts extends Component{

        static navigationOptions = ({navigation})=> ({
            title:navigation.state.params.title
        });
        
            constructor(props){
        super(props);
        this.state={
            list:props.navigation.state.params.products
        };
    }
    
        renderItem = ({item}) =>(
            <View style={styles.productItem}>
            <Image resizeMode="contain" source={item.img} style={styles.productImage}/>
                <Text style={styles.productName}>{item.name}</Text>
            </View>

    )

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        backgroundColor:'#CCC'

    },
    icon:{
        width:26,
        height:26
    },
    productItem:{
        height:100,
        backgroundColor:'#FFF',
        margin:10,
        borderRadius:5,
        padding:10,
        flex:1,
        flexDirection:'row',
        alignItems:"center"
    },
    productImage:{
        width:150,
        height:80
        
    },
    productName:{
        fontSize:16
    }
});