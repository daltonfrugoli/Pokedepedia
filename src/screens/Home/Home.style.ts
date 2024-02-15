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
        width: 270,
        height: 105,
        marginTop: 20
    },
    displayTextContainer: {
        height: 205, 
        width: '80%', 
        position: 'absolute', 
        top: 43, 
        alignSelf: 'center', 
        borderRadius: 10, 
        borderColor: '#000000', 
        borderWidth: 3
    },
    displayText: {
        color :'#000000', 
        fontFamily: '04b', 
        fontSize: 25, 
        alignSelf: 'center', 
        marginTop: 125, 
        marginLeft: 10
    },
    underDisplayContainer: {
        height: 55, 
        position: 'absolute', 
        bottom: 15, 
        width: '90%', 
        alignSelf: 'center',
    },
    underDisplay: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    displayLines: {
        width: 80,
        marginTop: 10,
        borderColor: '#000000',
        borderTopWidth: 3,
        borderRadius: 10,
        marginLeft: 3
    },
    underButtonsContainer: {
        justifyContent: 'space-evenly'
    },
    underDisplayButtons: {
        width: 60,
        height: 15,
        marginTop: 8, 
        marginRight: 3,
        backgroundColor: '#2FDB41',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10
    },
    inputContainer: {
        width: '89%',
        alignSelf: 'center',
        marginTop: 50
    },
    inputLabel: {
        marginLeft: 2,
        fontFamily: '04b',
        color: '#FFCD02',
        marginBottom: 10
    },
    inputButtonLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        width: '95%',
        borderRadius: 8,
        borderColor: '#000000',
        borderWidth: 3,
        backgroundColor: '#801212',
        color: '#ffffff',
        justifyContent: 'space-between'
    },
    textInputText: {
        color: '#ffffff',
        fontSize: 20,
        marginBottom: 3,
        flex: 0,
    },
    searchButton: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: '#ffffff',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
    },
    searchButtonIcon: {
        fontSize: 32,
    },
    modal: {
        width: 280,
        height: 145,
        backgroundColor: '#A32323',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 20,
        alignSelf: 'center'
    },
    modalTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 15
    },
    modalText: {
        color: '#ffffff',
        marginVertical: 15,
        fontSize: 15,
        alignSelf: 'center'
    },
    modalButtonText: {
        color: '#ffffff',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
    networkStatus: {
        color :'#ffffff',
        marginTop: 5,
        opacity: 0.8,
        marginLeft: 2
    }
})