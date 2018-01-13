import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'
function FloatingButton(props) {
    return (
        <View style={[styles.floatbutton, styles.shadow, props.style]}>
           {props.feather ? 
           <Feather name={props.iconName} size={props.iconSize || 32} color="white" /> :
           <MaterialCommunityIcons name={props.iconName} size={props.iconSize || 32} color="white" />}
        </View>
    )
}

const styles = StyleSheet.create({
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
        position: 'absolute',
        right: 25,
        bottom: 22
    }
});

export default FloatingButton