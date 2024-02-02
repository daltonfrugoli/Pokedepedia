import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    displayContainer: {
        width: '89%',
        height: 260,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 25
    },
    display: {
        width: '90%',
        height: 185,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 18,
        borderColor: '#000000',
        borderWidth: 3,
        borderRadius: 10
    },
    displayImage: {
        width: 330,
        height: 165
    },
    underDisplay: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    displayLines: {
        width: 80,
        marginTop: 10,
        borderColor: '#000000',
        borderTopWidth: 3,
        borderRadius: 10
    },
    favButton: {
        backgroundColor: '#962222',
        width: 35,
        height: 35,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#ffffff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',  
        marginBottom: 3,
        marginRight: 2
    },
    favIcon: {
        fontSize: 22,
        marginBottom: 2,
    },
    tag: {
        width: '89%',
        height: 70,
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
        fontSize: 22
    },
    tagNameText: {
        fontFamily: 'Bebas Neue',
        color: '#ffffff',
        fontSize: 28
    },
    propsDot: {
        backgroundColor: '#ffffff',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 10
    },
    propsBox: {
        flexDirection: 'row',
        alignItems: 'center',
      
    },
    propsText: {
        color: 'white', 
        fontSize: 30,
        fontFamily: 'Bebas Neue'
    }

})