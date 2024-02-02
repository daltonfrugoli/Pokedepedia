import React from "react";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import { styles } from './Favorites.style'
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";

export function Favorites({navigation, route}) {


    return(
        <SafeAreaView>
            <NavigationBar></NavigationBar>
        </SafeAreaView>
    )
}