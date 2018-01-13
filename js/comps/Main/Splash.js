import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './SplashStyle'

function Splash() {
    return (
        <View style={styles.splashContainer}>
            <MaterialCommunityIcons name="map-marker-outline" size={96} color="white" />
            <Text style={styles.title}>
                SUPPLIER DELIEVERY
                </Text>
        </View>
    )
}

export default Splash;