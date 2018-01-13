import React from 'react';
import moment from 'moment';

import { View, Text, Button, TouchableOpacity } from 'react-native';
import FloatingButton from '../FloatingButton';

import { styles } from './CardStyles';

function Card(props) {
    var { data } = props;
    var date = new Date(data.from);
    return (
        <TouchableOpacity onPress={() => { props.handleCardPress(data) }}>
            <View style={[styles.shadow, styles.container]}>
                <View style={styles.cardHeader}>
                    <View style={styles.headerRow}>
                        <Text style={styles.title}>
                            {moment(date).format('dddd')}
                        </Text>
                        <Text style={styles.title}>
                            {moment(date).format('DD.MM.YYYY')}
                        </Text>
                    </View>
                    <View style={styles.headerRow}>
                        <Text style={styles.subtitle}>
                            Arrive between
                     </Text>
                        <Text style={styles.title}>
                            {moment(date).format('H:mm')} - {moment(data.to).format('H:mm')}
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContent}>
                    <Text style={styles.idText}>
                        ID {data.humanId}
                    </Text>
                    <Text style={styles.contentTitle}>
                        {data.client.name}
                    </Text>
                    <Text style={styles.contentSubtitle}>
                        {data.address.street} {data.address.number} ,{data.address.city}
                    </Text>
                </View>

                <FloatingButton iconName={'map-marker-outline'} />
            </View>
        </TouchableOpacity>
    )
}

export default Card