import React, { useState, useEffect } from "react";

import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    FlatList
} from "react-native";

import { styles } from './Home.style';
import { Header } from '../../components/Header/Header';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { GetPokeInfo, GetPokenames } from "../../services/Https";
import { useIsFocused } from '@react-navigation/native';
import Spinner from "react-native-loading-spinner-overlay";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import Modal from 'react-native-modal';



export function Home({navigation, route}) {

    const [pokemonName, setPokemonName] = useState('') 
    const [spinnerIsVisible, setSpinnerIsVisible] = useState(false)
    const [avaiablePokemonList, setAvaiablePokemonList] = useState([])
    const validationAlert = (titulo, texto) => Alert.alert(titulo, texto)
    const isFocused = useIsFocused()
    const [modalIsVisible, setModalIsVisible] = useState(false)

    useEffect(() => {
        
        GetPokenames()
        .then((res) => {
            
            var disponiveis = []
            res.data.results.map((nomes, index) => {
                disponiveis.push(nomes.name)
            })

            setAvaiablePokemonList(disponiveis)
        })

        .catch((error) => {
            console.log(error.error)
        })
        
    }, [isFocused])



    const renderModal = () => (
        
        <Modal   
            isVisible = {modalIsVisible}
            onBackButtonPress = {() => {
                setModalIsVisible(false)  
            }}
            onBackdropPress = {() => {
                setModalIsVisible(false)
            }}
        >
            <View style = {styles.modal}>
                <Text style = {styles.modalTitle}>How to use Pokepedia</Text>
                <Text style = {styles.modalText}>the best way to find out all about your favorite pokemons</Text>
                <TouchableOpacity
                    onPress={() => {
                        setModalIsVisible(false) 
                    }}
                >
                    <Text style = {styles.modalButtonText}>Ok</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D62A2A'}}>
            <ScrollView>
                <Header modal={ true } renderModal={(visible) => setModalIsVisible(visible)}/>
                <View style={ styles.displayContainer }>
                    <View style={ styles.display }>
                        <Image 
                            style={ styles.displayImage }
                            source={require('../../assets/images/pokemonLogo.png')}
                        />
                        <Text style={ styles.displayText }>Pokepedia</Text>
                    </View>
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
                <View style={ styles.inputContainer }>
                    <Text style={ styles.inputLabel }>Pokemon Name</Text>
                    <View style={ styles.inputButtonLine }>
                        <SelectDropdown
                            buttonStyle={ styles.textInput }
                            buttonTextStyle={ styles.textInputText }                      
                            data={ avaiablePokemonList }
                            renderDropdownIcon={ isOpened => {
                                return( 
                                    <Ionicons 
                                        style={{ marginRight: 50 }}
                                        name={ isOpened ? 'chevron-up' : 'chevron-down' } 
                                        color={ '#ffffff' } 
                                        size={ 25 }
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
                            searchPlaceHolder={ 'Search here' }
                        />
                        <TouchableOpacity 
                            style={ styles.searchButton }
                            onPress={() => {
                                if(pokemonName != ''){
                                    //setSpinnerIsVisible(true)
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
                                    })
                                }else{
                                    return validationAlert("Oops...", "No Pokemon selected!")
                                } 
                            }}
                        >
                            <Ionicons style={ styles.searchButtonIcon } name="search-outline"></Ionicons>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 20 }}/>
            </ScrollView>
            <NavigationBar screen={ 'HOME' }/>
            {renderModal()}
            <Spinner visible={ spinnerIsVisible }/>
        </SafeAreaView>
    )
}