
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.title}>Unsplash</Text> */}
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="white" />
                    <TextInput style={styles.searchInput}  />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
    },
    title: {
        fontSize: 22,
        color: 'white',
        flex: 1
    },
    searchContainer: {
        // width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'black'
    },
    searchInput: {
        // width: 150
    }
})