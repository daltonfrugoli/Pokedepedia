import React, { useState, useEffect } from "react";

import {
    SafeAreaView,
    View,
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

    // busca Pokemons favoritos no DB local
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

    // renderiza os cards de tipo
    const TypeList = (list) => {

        const typeColors = {
            normal: '#A7A7A7',
            grass: '#43C825',
            fire: '#DF8110',
            water: '#0C82B5',
            flying: '#0FDA8D',
            fighting: '#CF530C',
            poison: '#C955E6',
            electric: '#E7E31C',
            ground: '#805F10',
            rock: '#A4A70E',
            psychic: '#FC528D',
            ice: '#2FD1F1',
            bug: '#359741',
            ghost: '#B052AD',
            steel: '#ABABAB',
            dragon: '#FA5656',
            dark: '#747474',
            fairy: '#FF93E0'
        };

        return list.map(item => {

            return (
                <View key={item.type.name} style={{
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: '#000000',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    backgroundColor: typeColors[item.type.name] || '#A7A7A7',
                    marginLeft: 5
                }}>
                    <Text style={{
                        fontSize: 19,
                        fontFamily: 'Bebas Neue',
                        color: '#000000'
                    }}>{item.type.name}</Text>
                </View>
            )
        })
    }



    // renderiza os cards completos dos pokemons favoritos
    const renderItem = ({item, index}) => {

        var convertType = JSON.parse(item.types)

        return(
            <View style={styles.cardContainer}>
                <View style={ styles.tag }>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={ styles.tagNumberText }>#{item.orderNum}</Text>
                    </View>
                    <View style={ styles.tagDivLine }/>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={ styles.tagNameText }>{item.name}</Text>
                    </View>
                </View>
                <View style={ styles.upperPropsRow }>
                    <View style={ styles.propsBox }>
                        <View style={ styles.propsDot }/>
                        <Text style={ styles.propsText }>WEIGHT: {item.weight}kg</Text>
                    </View>
                    <View style={ styles.propsBox }>
                        <View style={ styles.propsDot }/>
                        <Text style={ styles.propsText }>HEIGHT: {item.height}m</Text>
                    </View>
                </View>
                <View style={ styles.underPropsRow }>
                    <View style={ styles.propsBox }>
                        <View style={ styles.propsDot }/>
                        <Text style={ styles.propsText }>Types:</Text>
                    </View>
                    {TypeList(convertType)}
                </View>  
            </View>
        )
    }


    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#D62A2A'}}>
            { pokemonsData.length < 1 ? <Header/> : null }
            <View style={{flex: 1}}>
                {pokemonsData.length < 1? 
                    <View style={{width: '90%', alignSelf: 'center', marginTop: 25}}>
                        <Text style={{ fontFamily: '04b', color: '#ffffff', fontSize: 30 }}>Oops...</Text>
                        <Text style={{ color: '#ffffff', fontSize: 20, marginTop: 15 }}>No favorite Pokemon so far</Text>
                    </View>
                
                :

                    <FlatList
                        ListHeaderComponent={Header}
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