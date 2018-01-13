import React from 'react';
import moment from 'moment';
import call from 'react-native-phone-call';
import {MAPS_ROUTE_KEY} from '../../../service/DeliveryService';

import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, Button, Linking } from 'react-native';
import FloatingButton from '../FloatingButton';

import { styles } from './DetailsScreenStyle';

export class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        const { delivery, currLocation } = this.props.navigation.state.params;
        const deliveryDest = delivery.address.geometry.coordinates;
        const date = new Date(delivery.from);

        const origin = {
            latitude: currLocation.coords.latitude,
            longitude: currLocation.coords.longitude
        };

        const destination = {
            latitude: deliveryDest[1],
            longitude: deliveryDest[0]
        }
        const routeDetails = null;
        this.setState({
            origin, destination, routeDetails,  delivery
        })
    }
    handleRouteResults = (result) => {
        routeDetails = { distance: result.distance, duration: result.duration }
        this.setState({ routeDetails })
    }
    handleLayout = () => {
        this.mapRef.fitToCoordinates([this.state.origin, this.state.destination], { edgePadding: { top: 100, right: 100, bottom: 100, left: 100 }, animated: false })
    }
    handleCall = () => {
        call({ number: this.state.delivery.client.phone }).catch(console.error)
    }
    handleCompleted = () => {
        const { params } = this.props.navigation.state;
        params.handleCompleted(this.state.delivery.id)
        this.props.navigation.goBack()
    }
    LaunchMaps = () => {
        const { address } = this.state.delivery
        const query = `${address.street} ${address.number} ${address.city}`
        Linking.openURL(`https://maps.google.com?q=${query}`)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MapView
                    ref={mapRef => this.mapRef = mapRef}
                    onLayout={this.handleLayout}
                    style={styles.mapContainer}
                    initialRegion={{
                        ...this.state.origin,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0022
                    }}>
                    <MapView.Marker coordinate={this.state.origin}>
                        <View style={styles.originMarker} />
                    </MapView.Marker>
                    <MapView.Marker coordinate={this.state.destination}>
                        <View style={[styles.shadow, styles.destinationMarker]} />
                    </MapView.Marker>
                    <MapViewDirections
                        onReady={(result) => {
                            this.handleRouteResults(result)
                        }}
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={MAPS_ROUTE_KEY}
                        strokeWidth={4}
                        strokeColor={'#39e5c8'}
                    />
                </MapView>

                <View style={styles.detailsContainer}>
                    <TouchableOpacity onPressOut={this.handleCompleted}
                        style={{ position: 'absolute', zIndex: 2, marginTop: -35 }}>
                        <View>
                            <FloatingButton
                                style={{
                                    width: 70, height: 70, left: 19, top: 0, borderRadius: 35,
                                }} iconName={'gift'} iconSize={40} />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.idText}>
                            ID {this.state.delivery.humanId}
                        </Text>
                        <Text style={styles.title}>
                            {this.state.delivery.client.name}
                        </Text>
                        <Text style={styles.subtitle}>
                            {this.state.delivery.address.street} {this.state.delivery.address.number} ,{this.state.delivery.address.city}
                        </Text>
                        <Text style={styles.distance}>
                            {this.state.routeDetails ? `${(this.state.routeDetails.distance + '').substring(0, 3)} KM away` : 'Unkown Distance'}
                        </Text>
                    </View>
                    <TouchableOpacity onPressOut={this.handleCall} style={{ right: -17 }}>
                        <View>
                            <FloatingButton feather={true} iconName={'phone'} iconSize={30}
                                style={{ backgroundColor: '#426190', width: 51, height: 51 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator}></View>
                    <View style={styles.scheduluedTime}>
                        <Text style={styles.title}>
                            {moment(this.state.delivery.from).format('dddd')}
                        </Text>
                        <View style={[styles.shadow, styles.timeRange]}>
                            <Text style={[styles.title, { color: 'white' }]}>
                                {moment(this.state.delivery.from).format('H:mm')} - {moment(this.state.delivery.to).format('H:mm')}
                            </Text>
                        </View>

                    </View>
                    <Text style={styles.title}>
                        {moment(this.state.delivery.from).format('DD.MM.YYYY')}
                    </Text>
                    <Text style={styles.distance}>
                        {this.state.routeDetails ? `Estimated Arrival Time ${moment().add(this.state.routeDetails.duration, 'minutes').format('H:mm')}` : 'Unkown Duration'}

                    </Text>
                    <TouchableOpacity onPress={this.LaunchMaps} style={[styles.shadow, styles.roundButton]}>
                        <Text style={styles.roundButtonText}>
                            Open in Google Maps
                    </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default DetailsScreen;


