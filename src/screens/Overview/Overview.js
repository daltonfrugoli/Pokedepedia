import React, { useState, useEffect } from "react";

import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    Dimensions
} from "react-native"

import { styles } from './Overview.style'
import { Header } from '../../components/Header/Header';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Overview({navigation, route}) {

    var teste = route.params.data
    var types = teste.types
    var fotoLink = teste.sprites.front_default.toString()
    

    const [favorited, setFavorited] = useState(false)
    
    const windowDimensions = Dimensions.get('window');
    const screenDimensions = Dimensions.get('screen');
    
    
    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({window, screen}) => {
            setDimensions({window, screen});
            console.log(window.width)
            },
        );

        return () => subscription?.remove();


    });

    const tipos = [
        {
            id: 1,
            name: 'plant'
        },
        {
            id: 2,
            name: 'poison'
        },
    ]

    const renderItem = (item, index) => {
        
        var cor = item.item.name
        return(
            <View style={{
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                paddingVertical: 2,
                backgroundColor: cor == 'poison'? '#3985F8': '#F5C30E',
                marginRight: 15
            }}>
                <Text style={{
                    fontSize: 25,
                    fontFamily: 'Bebas Neue',
                    color: '#000000'
                }}>{item.item.name}</Text>
            </View>
        )
    }

    let numero = route.params.data.order;
    let numeroFormatado = numero.toString().padStart(4, '0');
    

    
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D62A2A', margin:0 }}>
            <ScrollView>
                <Header/>
                    <View style={ styles.displayContainer }>
                        <View style={ styles.display }>
                            <Image 
                                style={ styles.displayImage }
                                source={{uri: fotoLink}}
                            />
                        </View>
                        <View style={ styles.underDisplay }>
                            <View>
                                <View style={ styles.displayLines }/>
                                <View style={ styles.displayLines }/>
                                <View style={[ styles.displayLines, { width: 40 }]}/>
                            </View>
                            <TouchableOpacity 
                                style={ styles.favButton }
                                onPress={() => {
                                    if(favorited){
                                        setFavorited(false)
                                    }else{
                                        setFavorited(true)
                                    }
                                    console.log(route.params.data.height)
                                }}
                            >
                                <Ionicons style={[ styles.favIcon, { color: favorited? '#FFCD02' : '#ffffff' }]} name="star"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ styles.tag }>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={ styles.tagNumberText }>#{numeroFormatado}</Text>
                        </View>
                        <View style={{ 
                            height: 20, 
                            borderWidth: 2, 
                            borderColor: 'white',
                            position: 'absolute',
                            right: '50%'
                        }}/>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={ styles.tagNameText }>{route.params.data.name}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '85%', alignSelf: 'center' }}>
                        <View style={ styles.propsBox }>
                            <View style={ styles.propsDot }/>
                            <Text style={ styles.propsText }>WEIGHT: {route.params.data.weight}kg</Text>
                        </View>
                        <View style={ styles.propsBox }>
                            <View style={ styles.propsDot }/>
                            <Text style={ styles.propsText }>HEIGHT: {route.params.data.height}m</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'space-between', width: '85%', alignSelf: 'center' }}>
                        <View style={ styles.propsBox }>
                            <View style={ styles.propsDot }/>
                            <Text style={ styles.propsText }>TYPE:</Text>
                        </View>  
                          
                    </View>    
                    <View>     
                        <FlatList
                            horizontal = {true}
                            contentContainerStyle = {{ marginBottom: 30, marginTop: 10, marginLeft: dimensions.window.width*0.07, paddingRight: dimensions.window.width*0.10}}
                            data = {tipos}
                            keyExtractor = {item => item.id}
                            renderItem = {renderItem}
                        />
                    </View>   
                </ScrollView>
            <NavigationBar/>
        </SafeAreaView>
    )
    
    
}