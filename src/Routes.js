
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Unsplash'
    };

    // sair = () => {
    //     this.props.navigation.navigate('LoginScreen')
    // }

    render() {
        return (
            <Home />
            // <Home logout={this.sair} />
        )
    }
}


const RootStack = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        // LoginScreen: LoginScreen
    },
    {
        initialRouteName: 'HomeScreen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

export default RootStack