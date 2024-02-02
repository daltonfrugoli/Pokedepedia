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
    displayText: {
        fontFamily: '04b',
        color: '#000000',
        fontSize: 25,
        marginLeft: 10
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
        borderRadius: 10
    },
    underButtonsContainer: {
        justifyContent: 'space-evenly'
    },
    underDisplayButtons: {
        width: 60,
        height: 15,
        marginTop: 8, 
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
        backgroundColor: '#055DE1',
        borderRadius: 50,
        borderColor: '#ffffff',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
    },
    searchButtonIcon: {
        color: '#ffffff',
        fontSize: 40,
    }
})