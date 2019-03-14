import React, {Component} from 'react';
import {View,Image,TouchableHighlight, Text, StyleSheet, FlatList} from 'react-native';

export default class HomeList extends Component{

    static navigationOptions = {
        title: 'Restaurante Porrada Seca',
    };

    constructor(props){
        super(props);
        this.state={
            list:[

                {
                    key:'1',
                    title:'Prato Executivo',
                    img:require('../../assets/images/tipos/pe.png'),
                    description:'Pratos a pronta entrega',
                    bg:'#0080ff',
                    products:[
                        {key:'1', name:'Frango',img:require('../../assets/images/cardapio/pe/executivos_frang_.png')},
                        {key:'2', name:'Peixe',img:require('../../assets/images/cardapio/pe/executivos_peix_.png')},
                        {key:'3', name:'Picanha',img:require('../../assets/images/cardapio/pe/executivos_picanh_.png')}

                    ]
                },
                {
                    key:'2',
                    title:'Saladas',
                    img:require('../../assets/images/tipos/saladas.png'),
                    description:'Pratos a pronta entrega',
                    bg:'#00ff40',
                    products:[
                        {key:'1', name:'Salada de Frango',img:require('../../assets/images/cardapio/saladas/salada-fr.png')},
                        {key:'2', name:'Salada de Agua Doce',img:require('../../assets/images/cardapio/saladas/salada_aguadoc_.png')},
                        {key:'3', name:'Salada de Salmão',img:require('../../assets/images/cardapio/saladas/salada_salma.png')}

                    ]
                },
                {
                    key:'3',
                    title:'Bebidas',
                    img:require('../../assets/images/tipos/bebidas.png'),
                    description:'Bebidas de vários tipos',
                    bg:'#8904B1',
                    products:[
                        {key:'1', name:'Caipiroska',img:require('../../assets/images/cardapio/bebidas/capirosc_3.png')},
                        {key:'2', name:'Cookie Cream',img:require('../../assets/images/cardapio/bebidas/cookies_crea.png')},
                        {key:'3', name:'Morango Gelado',img:require('../../assets/images/cardapio/bebidas/morango_gd.png')},
                        {key:'4', name:'Patra Delicia',img:require('../../assets/images/cardapio/bebidas/patra.png')},
                        {key:'5', name:'Suco Fitness',img:require('../../assets/images/cardapio/bebidas/suco_fitines_gd.png')}

                    ]
                },
                {
                    key:'4',
                    title:'Sobremesas',
                    img:require('../../assets/images/tipos/sobremesa.png'),
                    description:'Sobremesas de vários tipos',
                    bg:'#fcb81c',
                    products:[
                        {key:'1', name:'Brownie',img:require('../../assets/images/cardapio/sobremesas/brownie_gd.png')},
                        {key:'2', name:'Creme Papaya',img:require('../../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                        {key:'3', name:'Delicia Gelada',img:require('../../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')}
                    ]
                }
            ]
        };
    }

    renderItem = ({item}) =>(
        <TouchableHighlight onPress = {()=>{this.props.navigation.navigate('HomeProducts', {title:item.title, products:item.products})}} style={[styles.listaItem,{backgroundColor:item.bg}]}>
            <View style={[styles.listaItem,{backgroundColor:item.bg}]}>
            <Image source={item.img} style={styles.listaImage}/>
            <View>
                <Text  style={styles.listaTitle}>{item.title}</Text>
                <Text  style={styles.listaDescription}>{item.description}</Text>
            </View>
            </View>
        </TouchableHighlight>
    )

    render(){
        return(
            <View>
               <FlatList
                    renderItem={this.renderItem}
                    data={this.state.list}
                    keyExtractor={item=>item.key}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({

    icone:{

        width:26,
        height:26
    },
    container:{
        flex:1,
        marginTop:10

    },
    listaItem:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        height:100
    },
    listaImage:{
        width:70,
        height:70,
        marginLeft:20,
        marginRight:20
    },
    listaTitle:{
        color: '#FFF',
        fontSize:25,
        fontWeight: 'bold'
    },
    listaDescription:{
        color: '#FFF',
        fontSize:16
    }


});