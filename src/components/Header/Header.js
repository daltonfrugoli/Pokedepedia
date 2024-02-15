import React, { useState, useEffect } from "react";

import {
    View,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';

import { Canvas, Path, Skia, Group } from "@shopify/react-native-skia";
import { styles } from './Header.style'
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Header(props){
    
    const navigation = useNavigation()

     //variaveis que se atualizam com o valor da width e heigth da tela
     const windowDimensions = Dimensions.get('window');
     const screenDimensions = Dimensions.get('screen');
     const [dimensions, setDimensions] = useState({
         window: windowDimensions,
         screen: screenDimensions,
     });
 
     useEffect(() => {
 
         const subscription = Dimensions.addEventListener(
             'change',
             ({window, screen}) => {
                 setDimensions({window, screen});
                 console.log(window.width)
             },
         );
 
         return () => subscription?.remove();  
     });

    const path = Skia.Path.Make();
    path.moveTo(0, 0);
    path.lineTo(0, 75);
    path.lineTo(80, 75);
    path.lineTo(160, 50);
    path.lineTo(dimensions.window.width, 50);
    path.lineTo(dimensions.window.width, 0);
    path.close();

    const border = Skia.Path.Make();
    border.moveTo(0, 75);
    border.lineTo(80, 75);
    border.lineTo(160, 50);
    border.lineTo(dimensions.window.width, 50);


    return(
        <View style={{ width: '100%' , height: 80}}>
            <Canvas style={{ flex: 1 }}>
                <Group>
                    <Path
                        path={path}
                        color="#A32323"
                    />
                    <Path
                        path={border}
                        color="#6C0D0D"
                        style="stroke"
                        strokeJoin="round"
                        strokeWidth={8}
                    />
                </Group> 
            </Canvas>
            <View style={ styles.headerContainer }>
                <View style={styles.buttonsMargin}>
                    {props.modal? 
                        <TouchableOpacity 
                            style={ styles.blueButton }
                            onPress={() => {
                                console.log('modalInfo ')
                                props.renderModal(true)
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
                    
                    <View style={[ styles.colorCircle, { backgroundColor: '#DB2F6D', marginLeft: 15 }]}/>
                    <View style={[ styles.colorCircle, { backgroundColor: '#FFCD02'}]}/>
                    <View style={[ styles.colorCircle, { backgroundColor: '#2FDB41'}]}/>
                    <View style={{ flex: 1 }}/>
                    <Text style={ styles.title }>{props.title}</Text>
                </View>
            </View> 
        </View>
    )
}