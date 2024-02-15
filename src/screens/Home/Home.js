import React, { useState, useEffect } from "react";

import {
    View,
    SafeAreaView,
    Text,
    TouchableHighlight,
    ScrollView,
    Alert,
    Dimensions,
    StatusBar
} from "react-native";

import { styles } from './Home.style';
import { Header } from '../../components/Header/Header';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { GetPokeInfo, GetPokenames } from "../../services/Https";
import { useIsFocused } from '@react-navigation/native';
import { Canvas, Group, RoundedRect, useImage, ImageShader, BlurMask } from "@shopify/react-native-skia";
import { addEventListener } from "@react-native-community/netinfo";
import Spinner from "react-native-loading-spinner-overlay";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';




export function Home({navigation, route}) {

    // infos Pokemons
    const [pokemonName, setPokemonName] = useState('') 
    const [avaiablePokemonList, setAvaiablePokemonList] = useState([])
    const logotipo = useImage(require('../../assets/images/pokemonLogo.png'))

    // screen configs
    const [spinnerIsVisible, setSpinnerIsVisible] = useState(false)
    const isFocused = useIsFocused()
    const [networkConect, setNetworkConect] = useState()

    // Dimensions
    const windowDimensions = Dimensions.get('window');
    const screenDimensions = Dimensions.get('screen');
    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });


    // busca os pokemons disponiveis e atualiza Dimensions 
    useEffect(() => {
        
        GetPokenames()
        .then((res) => {        
            var avaiables = []
            res.data.results.map((nomes, index) => {
                avaiables.push(nomes.name)
            })

            setAvaiablePokemonList(avaiables)
        })

        .catch((error) => {
            console.log(error.error)
        })

        const subscription = Dimensions.addEventListener(
            'change',
            ({window, screen}) => {
                setDimensions({window, screen});
            },
        );

        return () => subscription?.remove(); 

    }, [isFocused])


    // verifica status de rede
    useEffect(() => {
        
        const unsubscribe = addEventListener(state => {
            setNetworkConect(state.isConnected)
        });
        
        return () => {
            unsubscribe();
        }

    }, [isFocused])


    // alerta para caso de erro
    const validationAlert = (titulo, texto) => Alert.alert(titulo, texto)

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D62A2A' }}>
            <StatusBar backgroundColor={'#580707'}/>
            <ScrollView>
                <Header screen={ 'Home' }/>
                <View style={{ height: 315 }}> 
                    <View style={{ width: '100%', height: 320, alignSelf: 'center' }}>
                        <Canvas style={{ flex: 1 }}>
                            <Group>
                                <RoundedRect
                                    x={dimensions.window.width * 0.05}
                                    y={25}
                                    width={dimensions.window.width * 0.9}
                                    height={288}
                                    r={10}
                                    color="#000000"
                                >
                                    <BlurMask blur={5} style={"outer"}/>
                                </RoundedRect>
                                <RoundedRect
                                    x={dimensions.window.width * 0.05}
                                    y={25}
                                    width={dimensions.window.width * 0.9}
                                    height={288}
                                    r={10}
                                    color="#616161"
                                >
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
                                        color="#ffffff"
                                    >
                                    </RoundedRect>
                                    <RoundedRect
                                        x={(dimensions.window.width) * 0.1}
                                        y={43}
                                        width={dimensions.window.width * 0.8}
                                        height={205}
                                        r={10}
                                        color="#ffffff"
                                    >
                                        <ImageShader
                                            image={logotipo}
                                            fit='fitHeight'
                                            rect={{ 
                                                x: 0, 
                                                y: -10, 
                                                width: dimensions.window.width, 
                                                height: 255 
                                            }} 
                                        />
                                    </RoundedRect>  
                                </Group>
                            </Group>
                        </Canvas>
                        <View style={ styles.displayTextContainer }>
                            <Text style={ styles.displayText }>Pokepedia</Text>
                        </View>
                        <View style={ styles.underDisplayContainer }>
                            <View style={ styles.underDisplay }>
                                <View>
                                    <View style={ styles.displayLines }/>
                                    <View style={ styles.displayLines }/>
                                    <View style={[ styles.displayLines, { width: 40 }]}/>
                                </View>
                                <View style={ styles.underButtonsContainer }>
                                    <View style={ styles.underDisplayButtons }/>
                                    <View style={[ styles.underDisplayButtons, { backgroundColor: '#DB2F6D' }]}/>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                </View>
                <View style={ styles.inputContainer }>
                    <Text style={ styles.inputLabel }>Pokemon Name</Text>
                    <View style={ styles.inputButtonLine }>
                        <SelectDropdown
                            buttonStyle={ styles.textInput }
                            buttonTextStyle={[ styles.textInputText, { opacity: networkConect? 1 : 0.7 }]}                      
                            data={ avaiablePokemonList }
                            defaultButtonText={'Search here'}
                            disabled={networkConect? false : true}
                            renderDropdownIcon={ isOpened => {
                                return( 
                                    <Ionicons 
                                        style={{marginRight: 50}}
                                        name={isOpened ? 'chevron-up' : 'chevron-down'} 
                                        color={'#ffffff'} 
                                        size={25}
                                    />
                                )    
                            }}
                            dropdownIconPosition= "right"
                            selectedRowStyle={{ backgroundColor: '#888888' }}
                            showsVerticalScrollIndicator={ true }
                            onSelect={(selectedItem, index) => {
                                setPokemonName(selectedItem)
                            }}
                            search
                        />
                        <TouchableHighlight 
                            style={[ styles.searchButton, { backgroundColor: networkConect? '#055DE1' : '#133B77' }]}
                            underlayColor={'#3B86F5'}
                            disabled={networkConect? false : true}
                            onPress={() => {
                                if(pokemonName != ''){
                                    setSpinnerIsVisible(true)
                                    GetPokeInfo(pokemonName)
                                    .then((res) => {
                                        if(res.data != null){
                                            navigation.navigate('Overview', { data: res.data })
                                        }
                                    
                                        setTimeout(() => {
                                            setSpinnerIsVisible(false)
                                        }, 1000)
                                    })
                            
                                    .catch((error) => {
                                        console.log(error.error)
                                        validationAlert("Atenção!", "Ocorreu um erro inesperado, tente novamente mais tarde.")
                                    })
                                }else{
                                    return validationAlert("Oops...", "No Pokemon selected!")
                                } 
                            }}
                        > 
                            <Ionicons style={[ styles.searchButtonIcon, { color: networkConect? '#ffffff' : '#B4CEF6' }]} name="search-outline"></Ionicons>
                        </TouchableHighlight>    
                    </View>
                    <Text style={ styles.networkStatus}>{networkConect? null : 'You are disconnected, check your network'}</Text>
                </View>
                <View style={{ height: 20 }}/>
            </ScrollView>
            <NavigationBar screen={ 'HOME' }/>
            <Spinner visible={ spinnerIsVisible }/>
        </SafeAreaView>
    )
}