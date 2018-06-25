import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.login}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}