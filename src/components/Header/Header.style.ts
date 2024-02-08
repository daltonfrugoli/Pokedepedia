import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 60,
        position: 'absolute',
        top: 12,
        left: 15
    },
    buttonsMargin: {
        width: '90%',
        flexDirection: 'row',
    },
    blueButton: {
        width: 50,
        height: 50,
        backgroundColor: '#3985F8',
        borderRadius: 30,
        borderColor: '#ffffff',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueButtonText: {
        color: '#ffffff',
        fontFamily: '04b'
    },
    colorCircle: {
        width: 18,
        height: 18,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 2,
        marginHorizontal: 4
    },
    title: {
        color: '#FFCD02',
        fontFamily: '04b',
        fontSize: 20
    }
})