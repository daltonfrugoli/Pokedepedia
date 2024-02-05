import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tag: {
        width: '89%',
        height: 50,
        backgroundColor: '#302E82',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    tagNumberText: {
        fontFamily: '04b',
        color: '#ffffff',
        fontSize: 18
    },
    tagNameText: {
        fontFamily: 'Bebas Neue',
        color: '#ffffff',
        fontSize: 24
    },
    propsDot: {
        backgroundColor: '#ffffff',
        width: 8,
        height: 8,
        borderRadius: 10,
        marginRight: 10
    },
    propsBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    propsText: {
        color: 'white', 
        fontSize: 24,
        fontFamily: 'Bebas Neue'
    },
    cardContainer: {
        width: '90%',
        alignSelf: 'center',
        borderColor: '#ffffff',
        borderWidth: 5,
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: '#900C0C'
    }
})