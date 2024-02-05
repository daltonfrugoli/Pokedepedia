import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#A32323',
        width: '100%',
        height: 60,
        borderBottomColor: '#6C0D0D',
        borderBottomWidth: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsMargin: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    blueButton: {
        width: 40,
        height: 40,
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
        marginHorizontal: 2
    },
    title: {
        color: '#FFCD02',
        fontFamily: '04b',
        fontSize: 20
    }
})