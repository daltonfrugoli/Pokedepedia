import React from "react";

import {
    View,
    TouchableOpacity
} from 'react-native';

import { styles } from "./NavigationBar.style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


export const NavigationBar = () => {

    const navigation = useNavigation()

    return(
        <View style={ styles.navigationBarContainer }>
            <View style={ styles.navigationBarMargin }>
                <TouchableOpacity 
                    style={ styles.button }
                    onPress={() => {
                        navigation.navigate('Home')
                        console.log('home')
                    }}
                >
                    <Ionicons style={ styles.buttonIcon } name="home"/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={ styles.button }
                    onPress={() => {
                        navigation.navigate('Favorites')
                        console.log('favorites')
                    }}
                >
                    <Ionicons style={ styles.buttonIcon } name="star"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}