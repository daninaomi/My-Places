import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            senha: '',
            validacao: ''
        }
    }

    fazLogin = () => {
        this.props.login()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logoText}>pretty pics</Text>

                <TextInput style={styles.inputText}
                    placeholder='E-mail'
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    underlineColorAndroid='white'
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />

                <TextInput style={styles.inputText}
                    placeholder='Senha'
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    underlineColorAndroid='white'
                    onChangeText={(senha) => this.setState({ senha })}
                    secureTextEntry={true}
                    value={this.state.senha}
                />
                <TouchableOpacity style={styles.loginButton}
                    onPress={this.fazLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: height * 1,
        padding: 30,
        alignItems: 'center',
        backgroundColor: '#542C8A'
    },
    logoText: {
        marginTop: 140,
        marginBottom: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputText: {
        width: width * 0.8,
        marginBottom: 20,
        fontSize: 18
    },
    loginButton: {
        width: width * 0.8,
        marginTop: 60,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    textButton: {
        color: '#542C8A',
        textAlign: 'center',
        fontSize: 20
    }
})
