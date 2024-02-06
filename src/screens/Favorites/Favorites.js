import React, { useState, useEffect } from "react";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    FlatList
} from 'react-native'

import { styles } from './Favorites.style'
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { Header } from "../../components/Header/Header"; 
import { db } from "../../App.js";

export function Favorites({navigation, route}) {

    const [pokemonsData, setPokemonsData] = useState([])
    

    useEffect(() => {
        favoritesPokemons()
    }, [])

    const favoritesPokemons = () => {
        db.transaction((qr) => {
            qr.executeSql(
                "SELECT * FROM favPokemons",
                [],
                (_, results) => { 
                    setPokemonsData(results.rows.raw())
                } 
            )
        })
    }

    const renderType = ({item, index}) => {

        var cor = item.type.name
        


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
                    fontSize: 19,
                    fontFamily: 'Bebas Neue',
                    color: '#000000'
                }}>{cor}</Text>
            </View>
        )
    }

    const renderItem = ({item, index}) => {

        var types = [item.typeMain, item.typeSecond]
        var convertType = JSON.parse(item.types)

        return(
            <View style={styles.cardContainer}>
                <View style={ styles.tag }>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={ styles.tagNumberText }>#{item.orderNum}</Text>
                    </View>
                    <View 
                        style={{ 
                            height: 20, 
                            borderWidth: 2, 
                            borderColor: 'white',
                            position: 'absolute',
                            right: '50%'
                    }}/>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={ styles.tagNameText }>{item.name}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '85%', alignSelf: 'center' }}>
                    <View style={ styles.propsBox }>
                        <View style={ styles.propsDot }/>
                        <Text style={ styles.propsText }>WEIGHT: {item.weight}kg</Text>
                    </View>
                    <View style={ styles.propsBox }>
                        <View style={ styles.propsDot }/>
                        <Text style={ styles.propsText }>HEIGHT: {item.height}m</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15, marginBottom: 20, flexDirection: 'row', alignItems: 'center', width: '85%', alignSelf: 'center' }}>
                    <View style={ styles.propsBox }>
                        <View style={ styles.propsDot }/>
                        <Text style={ styles.propsText }>Types:</Text>
                    </View>
                    <FlatList
                        horizontal = {true}
                        contentContainerStyle = {{ marginLeft: 10 }}
                        data = {convertType}
                        keyExtractor = {item => item.slot}
                        renderItem = {renderType}
                    />
                </View>  
            </View>
        )
    }


    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#D62A2A'}}>
            <Header title = {'FAVORITES'}/>
            <View style={{flex: 1}}>
                {pokemonsData.length < 1? 
                <View style={{width: '90%', alignSelf: 'center', marginTop: 25}}>
                    <Text style={{ fontFamily: '04b', color: '#ffffff', fontSize: 30 }}>Oops...</Text>
                    <Text style={{ color: '#ffffff', fontSize: 20, marginTop: 15 }}>No favorite Pokemon so far</Text>
                </View>
                
                :
                <FlatList
                    contentContainerStyle = {{ paddingBottom: 100 }}
                    data = {pokemonsData}
                    keyExtractor = {item => item.id}
                    renderItem = {renderItem}
                    numColumns = {1}
                />
                }
            </View>
            <NavigationBar screen={ 'FAVORITES' }/>
        </SafeAreaView>
    )
}