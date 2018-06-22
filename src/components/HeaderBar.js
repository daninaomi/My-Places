
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


class HeaderBar extends Component {
    render() {
        // const { navigation } = this.props.onSearch

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={navigation.navigate('SearchScreen')}>
                    <Icon name="search" size={20} color="white" />
                </TouchableOpacity>
            </View>
        )
    }
}

export default withNavigation(HeaderBar);


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    title: {
        fontSize: 22,
        color: 'white',
        flex: 1
    },
    searchContainer: {
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,.3)'
    },
    searchInput: {
        width: 150
    }
})