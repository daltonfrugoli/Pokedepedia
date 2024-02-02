import React from "react";

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import { styles } from './Header.style'




export const Header = () => {

    return(

        <View style={ styles.headerContainer }>
            <View style={styles.buttonsMargin}>
                <TouchableOpacity 
                    style={ styles.blueButton }
                    onPress={() => {
                        console.log('blueButton')
                    }}
                >
                    <Text style={ styles.blueButtonText }>?</Text>
                </TouchableOpacity>
                <View style={[ styles.colorCircle, { backgroundColor: '#DB2F6D', marginLeft: 10 }]}/>
                <View style={[ styles.colorCircle, { backgroundColor: '#FFCD02'}]}/>
                <View style={[ styles.colorCircle, { backgroundColor: '#2FDB41'}]}/>
            </View>
        </View>    

    )
}