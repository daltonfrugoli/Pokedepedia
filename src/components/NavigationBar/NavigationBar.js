import React from "react";

import {
    View,
    TouchableOpacity
} from 'react-native';

import { styles } from "./NavigationBar.style";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';



export const NavigationBar = (props) => {

    const navigation = useNavigation()

    return(
        <View style={ styles.navigationBarContainer }>
            <View style={ styles.navigationBarMargin }>
                <View style={ styles.buttonBack }/>
                <TouchableOpacity 
                    style={ styles.button }
                    onPress={() => {
                        navigation.navigate('Home')                    
                    }}
                >
                    <Ionicons   
                        style={{
                            color: props.screen == 'HOME' ? '#ffCD02' : '#ffffff',
                            fontSize: 25     
                        }} 
                        name="home"
                    />
                </TouchableOpacity>
                <View style={[ styles.buttonBack, { right: 0 }]}/>
                <TouchableOpacity 
                    style={ styles.button }
                    onPress={() => {
                        navigation.navigate('Favorites')
                    }}
                >
                    <Ionicons   
                        style={{
                            color: props.screen == 'FAVORITES' ? '#ffCD02' : '#ffffff',
                            fontSize: 25     
                        }} 
                        name="star"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}