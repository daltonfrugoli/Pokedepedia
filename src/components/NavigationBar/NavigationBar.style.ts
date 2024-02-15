import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    navigationBarContainer: {
        backgroundColor: '#801212',
        borderTopWidth: 3,
        borderColor: '#580707'
    },
    navigationBarMargin: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 15
    },
    button: {
        width: 180,
        height: 40,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    buttonBack: {
        position: 'absolute', 
        width: 180,
        height: 45,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})