import React from "react";

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import { styles } from './Header.style'
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export const Header = (props) => {

    const navigation = useNavigation()

    return(
        <View style={ styles.headerContainer }>
            <View style={styles.buttonsMargin}>
                {props.modal? 
                    <TouchableOpacity 
                        style={ styles.blueButton }
                        onPress={() => {
                            console.log('modalInfo ')
                        }}
                    >
                        <Text style={ styles.blueButtonText }>?</Text>
                    </TouchableOpacity>

                    :
                    
                    <TouchableOpacity 
                        style={ styles.blueButton }
                        onPress={() => {
                            navigation.dispatch(CommonActions.goBack())
                        }}
                    >
                        <Ionicons style={ styles.blueButtonText } name= "caret-back-outline" />
                    </TouchableOpacity> 
                }
                
                <View style={[ styles.colorCircle, { backgroundColor: '#DB2F6D', marginLeft: 10 }]}/>
                <View style={[ styles.colorCircle, { backgroundColor: '#FFCD02'}]}/>
                <View style={[ styles.colorCircle, { backgroundColor: '#2FDB41'}]}/>
                <View style={{ flex: 1 }}/>
                <Text style={ styles.title }>{props.title}</Text>
            </View>
        </View>    
    )
}