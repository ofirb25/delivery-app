import React from 'react';
import deliveryService from '../../../service/DeliveryService';
import { View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants, Location, Permissions } from 'expo';

import Nav from '../Nav/Nav';
import Card from '../Card/Card';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationResult: null,
            routeResult : null,
            deliveries : []
        }
    }
    componentDidMount() {
        deliveryService.getData()
        .then(data=>this.setState({deliveries:data}))
        this._getLocationAsync();
    }
    
    handleCardPress = (delivery) => {
        this.props.navigation.navigate('Details',
         { delivery, currLocation: JSON.parse(this.state.locationResult),
         handleCompleted : this.handleCompleted.bind(this) })
    }
    handleRouteResults = (result) => {
        this.setState({routeResult:result});
    }
    handleCompleted = (id) => {
        var delivs = this.state.deliveries.slice();
        delivs.splice(delivs.findIndex(del=>del.id === id),1);
        this.setState({deliveries:delivs});
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });
    };

    render() {
        var { deliveries } = this.state
        return (
            <ScrollView style={styles.container}>
                <Nav />
                <View style={styles.contentContainer}>
                    {deliveries.map(del => {
                        return (
                            <Card key={del.id} data={del}
                                handleCardPress={(delivery) => { this.handleCardPress(delivery) }}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignSelf: 'stretch',
    },
    contentContainer: {
        paddingTop: 26,
        paddingLeft: 16,
        paddingRight: 16
    }
}

export default Main;