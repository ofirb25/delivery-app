import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scheduluedTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    timeRange: {
        backgroundColor: '#f4788b',
        padding: 9
    },
    roundButton: {
        padding: 15,
        backgroundColor: '#426190',
        borderRadius: 30,
        width: 295,
        height: 50,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 21
    },
    roundButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17
    },
    mapContainer: {
        flex: 0.48,
        backgroundColor: 'lightblue'
    },
    detailsContainer: {
        flex: 0.52,
        paddingHorizontal: 25
    },
    idText: {
        fontSize: 8,
        color: '#999999',
        fontWeight: 'bold',
        paddingTop: 49
    },
    originMarker: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#426190'
    },
    destinationMarker: {
        height: 21,
        width: 21,
        borderRadius: 21 / 2,
        backgroundColor: '#39e5c8'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    distance: {
        color: '#f4788b',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 7,
    },
    separator: {
        height: 3,
        backgroundColor: '#dee0dc',
        marginTop: 15,
        marginBottom: 12
    },
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.8,
    }
});