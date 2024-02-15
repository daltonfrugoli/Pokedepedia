import React, { useEffect, useState, useRef } from "react";

import {
    SafeAreaView,
    View,
    Text,
    Animated,
    Image,
    Dimensions,
    ScrollView
} from "react-native";

import { styles } from "./Tutorial.style";
import { useIsFocused } from '@react-navigation/native';
import { Header } from "../../components/Header/Header";


export function Tutorial({navigation, route}) {

    const isFocused = useIsFocused()


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
            },
        );

        return () => subscription?.remove(); 
            
    }, [isFocused])

   
    // conteudo das telas
    const contents = [
        {
            title: 'Welcome to Pokepedia!',
            content: 'Type the name of the Pokemon you want to meet in the search bar and click to search!',
            image: require('../../assets/images/tutorialPrint.png')
        },
        {
            title: 'Favorite the Pokemons!',
            content: 'Just click on the "star" icon and the Pokemon will be saved in your favorites area',
            image: require('../../assets/images/tutorialPrint2.png')
        },
        {
            title: 'Your favorite Pokemons at any time',
            content: 'Click on the "favorites" button in the lower navigation bar and see your favorite Pokemons at any time, even without internet!',
            image: require('../../assets/images/tutorialPrint3.png')
        }
    ]

    const scrollX = new Animated.Value(0);

    const renderContent = () => {

        return(
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                decelerationRate={0}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX }}},
                ], { useNativeDriver: false })}
            >
                {contents.map((item, index) => (
                    <View
                        key={index}
                        style={{ width: dimensions.window.width, height: dimensions.window.height }}
                    >
                        <View style={{ backgroundColor: '#D62A2A', alignItems: 'center' }}>
                            <Text style={ styles.titleText }>{item.title}</Text>
                            <Text style={ styles.contentText }>{item.content}</Text>
                        </View>
                        <View style={{ alignItems: 'center', height: 200}}>
                            <Image
                                source={item.image}
                                resizeMode= 'contain'
                                style={ styles.contentImage }
                            />
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        )
    }

    const renderDots = () => {

        const dotPosition = Animated.divide(scrollX, dimensions.window.width)

        return(
            <View style={ styles.dotsContainer }>
                {contents.map((item, index) => {

                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [10, 15, 10],
                        extrapolate: 'clamp'
                    })

                    return(
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[ styles.dot, {width: dotSize, height: dotSize}]}
                        />
                    )
                })}
            </View>
        )
    }

    return(
        <SafeAreaView style={ styles.safeArea }> 
            <Header screen={'Tutorial'}/>
            <View style={ styles.dotsRootContainer }>
                {renderDots()}
            </View>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View>
                        {renderContent()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>   
    )
}