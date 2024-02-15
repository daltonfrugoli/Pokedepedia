import React, { useState, useEffect } from "react";

import {
    View,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './Header.style';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import { Canvas, Group, BlurMask, Path, Skia } from "@shopify/react-native-skia";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Header(props){
    
    const navigation = useNavigation()

    // Dimensions
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
            }
        );

        return () => subscription?.remove();  
    });


    // path do corpo da Header
    const path = Skia.Path.Make();
    path.moveTo(0, 0);
    path.lineTo(0, 75);
    path.lineTo(80, 75);
    path.lineTo(160, 50);
    path.lineTo(dimensions.window.width, 50);
    path.lineTo(dimensions.window.width, 0);
    path.close();

    // path da sombra da Header
    const shadow = Skia.Path.Make();
    shadow.moveTo(0, 0);
    shadow.lineTo(0, 78);
    shadow.lineTo(80, 78);
    shadow.lineTo(160, 53);
    shadow.lineTo(dimensions.window.width, 53);
    shadow.lineTo(dimensions.window.width, 0);
    shadow.close();

    // path da linha inferior da Header
    const border = Skia.Path.Make();
    border.moveTo(0, 75);
    border.lineTo(80, 75);
    border.lineTo(160, 50);
    border.lineTo(dimensions.window.width, 50);


    return(
        <View style={{ width: '100%' , height: 90}}>
            <Canvas style={{ flex: 1 }}>
                <Group>
                    <Path
                        path={path}
                        color="#801212"
                    />
                    <Path
                        path={shadow}
                        color="#000000"
                    >
                        <BlurMask blur={5} style={"outer"}/>
                    </Path>
                    <Path
                        path={border}
                        color="#580707"
                        style="stroke"
                        strokeJoin="round"
                        strokeWidth={8}
                    />
                </Group>
            </Canvas>
            <View style={ styles.headerContainer }>
                <View style={styles.buttonsMargin}>
                    {props.screen == 'Home' ? 
                        <TouchableOpacity 
                            style={ styles.blueButton }
                            onPress={() => {
                                navigation.navigate('Tutorial')
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

                    <View style={{ flex: 1 }}/>
                
                    {props.screen == 'Tutorial'? 
                        null
                    :
                        <View style={{ flexDirection: 'row', marginRight: 15 }}>
                            <View style={[ styles.colorCircle, { backgroundColor: '#DB2F6D'}]}/>
                            <View style={[ styles.colorCircle, { backgroundColor: '#FFCD02'}]}/>
                            <View style={[ styles.colorCircle, { backgroundColor: '#2FDB41'}]}/>
                        </View>
                    }
                </View>
            </View> 
        </View>
    )
}