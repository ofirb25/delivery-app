import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f7f6',
        marginBottom: 12,
        paddingBottom: 30,
    },
    cardContent: {
        paddingLeft: 12,
        paddingRight: 12,
    },
    idText: {
        fontSize: 8,
        color: '#999999',
        fontWeight: 'bold',
        paddingTop: 7,
    },
    cardHeader: {
        backgroundColor: '#2cb7a1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
    },
    headerRow: {
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'flex-end'
    },
    contentTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    contentSubtitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.8,
    },
    floatbutton: {
        height: 45,
        width: 45,
        borderRadius: 30,
        backgroundColor: '#39e5c8',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 25,
        bottom: 22
    }
});

