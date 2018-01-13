import React from 'react';
import { View, Text, Sty } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = {
    container: {
        backgroundColor: '#426190',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 59,
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    bold: {
        fontWeight: 'bold',
    }
}

function Nav() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="map-marker-outline" size={36} color="white" />
            <Text style={{ ...styles.title, ...styles.bold }}>
                FUTURE ORDERS
            </Text>
            <MaterialCommunityIcons name="menu" size={36} color="white" />

        </View>
    )
}



export default Nav