import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    displayContainer: {
        width: '90%',
        height: 280,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 25
    },
    display: {
        width: '90%',
        height: 205,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 18,
        borderColor: '#000000',
        borderWidth: 3,
        borderRadius: 10
    },
    displayImage: {
        width: '80%',
        height: '100%'
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
        marginRight: 2,
        elevation: 4
    },
    favIcon: {
        fontSize: 22,
        marginBottom: 2,
        color:'#ffffff'
    },
    tag: {
        width: '90%',
        height: 70,
        backgroundColor: '#1E1D52',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 25,
        flexDirection: 'row', 
        position: "absolute"
    },
    tagBack: {
        width: '90%',
        height: 70,
        backgroundColor: '#18173A',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    tagOver: {
        width: '90%',
        height: 70,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 25,
        flexDirection: 'row', 
        position: "absolute",
        alignItems: 'center'
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