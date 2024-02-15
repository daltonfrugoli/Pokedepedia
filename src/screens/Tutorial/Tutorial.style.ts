import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D62A2A'
    },
    dotsContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    dotsRootContainer: {
        position: 'absolute',
        height: '30%',
        top: 0,
        right: 20
    },
    dot: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginHorizontal: 10,
        width: 10,
        height: 10
    },
    titleText: {
        color: '#ffCD02',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: '04b',
        width: '80%',
        marginVertical: 40
    },
    contentText: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Bebas Neue',
        width: '90%',
        marginVertical: 40
    },
    contentImage: {
        width: '85%',
        height: '90%',
        maxWidth: 400,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#000000'
    }
})