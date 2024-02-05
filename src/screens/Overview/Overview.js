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
import { db } from "../../App.js";

export function Overview({navigation, route}) {


    const pokeInfo = route.params.data
    const photoLink = pokeInfo.sprites.front_default.toString()

    const [favorited, setFavorited] = useState()
    
    const windowDimensions = Dimensions.get('window');
    const screenDimensions = Dimensions.get('screen');
    
    
    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });

    useEffect(() => {

        db.transaction((qr) => {
            qr.executeSql(
                "SELECT * FROM favPokemons WHERE id = ?",
                [pokeInfo.id],
                (_, results) => {
                    console.log(results)

                    if(results.rows.length > 0){
                        setFavorited(true)
                    } else {
                        setFavorited(false)
                    } 
                }
            )
        })

        const subscription = Dimensions.addEventListener(
            'change',
            ({window, screen}) => {
                setDimensions({window, screen});
                console.log(window.width)
            },
        );

        return () => subscription?.remove();  
    });

    const types = pokeInfo.types

    const renderItem = (item, index) => {
        
        var cor = item.item.type.name


        var typeColors = ''

        switch (cor) {
            case 'normal': 
                typeColors = '#A7A7A7'
                break;

            case 'grass':
                typeColors = '#43C825'
                break;

            case 'fire': 
                typeColors = '#DF8110'
                break;

            case 'water':
                typeColors = '#0C82B5'
                break;

            case 'flying':
                typeColors = '#0FDA8D'
                break;

            case 'fighting':
                typeColors = '#CF530C'
                break;

            case 'poison':
                typeColors = '#C955E6' 
                break;

            case 'eletric':
                typeColors = '#E7E31C'
                break;

            case 'ground': 
                typeColors = '#805F10'
                break;

            case 'rock':
                typeColors = '#A4A70E'
                break;

            case 'psychic':
                typeColors = '#FC528D'
                break;

            case 'ice':
                typeColors = '#2FD1F1'
                break;

            case 'bug':
                typeColors = '#359741'
                break;

            case 'ghost':
                typeColors = '#B052AD'
                break;

            case 'steel':
                typeColors = '#ABABAB'
                break;

            case 'dragon': 
                typeColors = '#FA5656'
                break

            case 'dark': 
                typeColors = '#747474'
                break;

            case 'fairy':
                typeColors = '#FF93E0'
                break;
        
            default:
                typeColors = '#A7A7A7'
                break;
        }


        return(
            <View style={{
                borderRadius: 8,
                borderWidth: 2,
                borderColor: '#000000',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                paddingVertical: 2,
                backgroundColor: typeColors,
                marginRight: 15
            }}>
                <Text style={{
                    fontSize: 25,
                    fontFamily: 'Bebas Neue',
                    color: '#000000'
                }}>{item.item.type.name}</Text>
            </View>
        )
    }
  
    let numeroFormatado = pokeInfo.game_indices[3].game_index.toString().padStart(4, '0');
     
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D62A2A', margin:0 }}>
            <ScrollView>
                <Header/>
                    <View style={ styles.displayContainer }>
                        <View style={ styles.display }>
                            <Image 
                                style={ styles.displayImage }
                                source={{uri: photoLink}}
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
                                    db.transaction((qr) => {
                                        qr.executeSql(
                                            "SELECT * FROM favPokemons WHERE id = ?",
                                            [pokeInfo.id],
                                            (qr2, results) => {
                                                console.log(results)
                                                
                                                if(results.rows.length > 0){
                                                    qr2.executeSql(
                                                        "DELETE FROM favPokemons WHERE id = ?",
                                                        [pokeInfo.id]
                                                    )
                                                    setFavorited(false)
                                                } else {
                                                    qr2.executeSql(
                                                        "INSERT INTO favPokemons (id, orderNum, name, weight, height, types) VALUES (?, ?, ?, ?, ?, ?)",
                                                        [pokeInfo.id, numeroFormatado, pokeInfo.name, pokeInfo.weight / 10, pokeInfo.height / 10, JSON.stringify(pokeInfo.types)]
                                                    )
                                                    setFavorited(true)
                                                } 
                                                
                                            }
                                        )
                                    });
                                    
                                    
                                   /* db.transaction((qr) => {
                                        qr.executeSql(
                                            "SELECT id FROM favPokemons",
                                            [],
                                            (_, results) => { console.log(results.rows.raw()) } 
                                        )
                                    })*/
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
                            <Text style={ styles.tagNameText }>{pokeInfo.name}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '85%', alignSelf: 'center' }}>
                        <View style={ styles.propsBox }>
                            <View style={ styles.propsDot }/>
                            <Text style={ styles.propsText }>WEIGHT: { pokeInfo.weight / 10 }kg</Text>
                        </View>
                        <View style={ styles.propsBox }>
                            <View style={ styles.propsDot }/>
                            <Text style={ styles.propsText }>HEIGHT: { pokeInfo.height / 10 }m</Text>
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
                            contentContainerStyle = {{ marginBottom: 30, marginTop: 10, marginLeft: dimensions.window.width*0.07}}
                            data = {types}
                            keyExtractor = {item => item.slot}
                            renderItem = {renderItem}
                        />
                    </View>   
                </ScrollView>
            <NavigationBar/>
        </SafeAreaView>
    )
    
    
}