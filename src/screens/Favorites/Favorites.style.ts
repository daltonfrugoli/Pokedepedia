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
    tagDivLine: { 
        height: 20, 
        borderWidth: 2, 
        borderColor: 'white',
        position: 'absolute',
        right: '50%'
    },
    upperPropsRow: {
        marginTop: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '85%', 
        alignSelf: 'center'
    },
    underPropsRow: {
        marginTop: 15, 
        marginBottom: 20, 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '85%', 
        alignSelf: 'center'
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