import React, { useState, useEffect } from "react";

import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions
} from "react-native"

import { styles } from './Overview.style'
import { Header } from '../../components/Header/Header';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { db } from "../../App.js";
import { Canvas, Group, vec, Line, RoundedRect, LinearGradient, Image, useImage, ImageShader, BlurMask } from "@shopify/react-native-skia";
import Ionicons from 'react-native-vector-icons/Ionicons';


export function Overview({navigation, route}) {

    //infos gerais do pokemon
    const pokeInfo = route.params.data


    //imagem de fundo e front_default pokemon
    const landscape = useImage(require('../../assets/images/pokeLandscape.jpg'))
    const pokePhotoLink = useImage(pokeInfo.sprites.front_default.toString())
    const [pokePhoto, setPokePhoto] = useState()
  
    //botão de favoritos
    const [favorited, setFavorited] = useState()

    //Numeração do pokemon
    const [formatNumber, setFormatNumber] = useState(pokeInfo.id.toString().padStart(4, '0'))
    
    //variaveis que se atualizam com o valor da width e heigth da tela
    const windowDimensions = Dimensions.get('window');
    const screenDimensions = Dimensions.get('screen');
    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });

    useEffect(() => {

        setPokePhoto(pokePhotoLink)

        db.transaction((qr) => {
            qr.executeSql(
                "SELECT * FROM favPokemons WHERE id = ?",
                [pokeInfo.id],
                (_, results) => {
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

            case 'electric':
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
  
    
     
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D62A2A', margin:0 }}>
            <ScrollView>
            <Header/>
            <View style={{ height: 315}}> 
                <View 
                    style={{ 
                        width: '100%',
                        height: 320,
                        alignSelf: 'center' 
                    }}
                >
                    <Canvas style={{ flex: 1 }}>
                        <Group>
                            <RoundedRect
                                x={dimensions.window.width * 0.05}
                                y={25}
                                width={dimensions.window.width * 0.9}
                                height={280}
                                r={10}
                                color="#000000"
                            >
                                <BlurMask blur={5} style={"outer"}></BlurMask>
                            </RoundedRect>
                            <RoundedRect
                                x={dimensions.window.width * 0.05}
                                y={25}
                                width={dimensions.window.width * 0.9}
                                height={280}
                                r={10}
                                color="#D9D9D9"
                            >
                            </RoundedRect>
                            <Group>
                                <RoundedRect
                                    x={(dimensions.window.width) * 0.1}
                                    y={43}
                                    width={dimensions.window.width * 0.8}
                                    height={205}
                                    r={10}
                                >
                                    <BlurMask blur={30} style={"inner"}></BlurMask>
                                    <ImageShader
                                        image={landscape}
                                        fit="cover"
                                        rect={{ x: 0, y: 0, width: dimensions.window.width, height: 255 }}
                                    />
                                </RoundedRect>
                                <Image image={pokePhoto} y={40} fit="fitHeight" height={205} width={dimensions.window.width}></Image>
                            </Group>
                        </Group>
                    </Canvas>
                    <View style={{ height: 205, width: '80%', position: 'absolute', top: 43, alignSelf: 'center', borderRadius: 10, borderColor: '#000000', borderWidth: 3 }}/>

                    
                    <View style={{ height: 55, position: 'absolute', bottom: 15, width: '90%', alignSelf: 'center'}}>
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
                                                        [pokeInfo.id, formatNumber, pokeInfo.name, pokeInfo.weight / 10, pokeInfo.height / 10, JSON.stringify(pokeInfo.types)]
                                                    )
                                                    setFavorited(true)
                                                } 
                                                
                                            }
                                        )
                                    })
                                }}
                            >
                                <Ionicons style={[ styles.favIcon, { color: favorited? '#FFCD02' : '#ffffff' }]} name="star"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            </View>

            <View>
                <View style={ styles.tagBack }/>
                <View style={ styles.tag }>
                    <Canvas style={{ flex: 1}}>
                        <Group>
                            <Line
                                p1={vec(dimensions.window.width * 0.1,85)}
                                p2={vec(((dimensions.window.width * 0.1) + 100), -15)}
                                color="#4441A7"
                                style="stroke"
                                strokeWidth={26}
                            />
                            <Line
                                p1={vec(((dimensions.window.width * 0.1) + 30) ,85)}
                                p2={vec(((dimensions.window.width * 0.1) + 130), -15)}
                                color="#4441A7"
                                style="stroke"
                                strokeWidth={8}
                            />
                            <Line
                                p1={vec(dimensions.window.width * 0.6,85)}
                                p2={vec(((dimensions.window.width * 0.6) + 100), -15)}
                                color="#4441A7"
                                style="stroke"
                                strokeWidth={34}
                            />
                        </Group>   
                        <Group blendMode={'hue'}>
                            <RoundedRect
                                x={0}
                                y={0}
                                width={dimensions.window.width * 0.9}
                                height={70}
                                r={10} 
                            >
                                <LinearGradient
                                    start={vec(dimensions.window.width * 0.9, 0)}
                                    end={vec(0, 70)}
                                    colors={["#302E82", "#1E1D52"]}
                                />
                            </RoundedRect>
                        </Group>
                    </Canvas>
                </View>
                <View style={ styles.tagOver }>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={ styles.tagNumberText }>#{formatNumber}</Text>
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