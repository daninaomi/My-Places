
import React, { Component } from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home'
import Search from './screens/Search'
import Login from './screens/Login'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    // sair = () => {
    //     AsyncStorage.removeItem('usuario')
    //     this.props.navigation.navigate('LoginScreen')
    // }

    render() {
        return (
            <Home
            // logout={this.sair} 
            />
        )
    }
}

class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Pesquisar'
    };

    render() {
        return (
            <Search />
        )
    }
}

class LoginScreen extends Component {
    entrar = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            <Login login={this.entrar} />
        )
    }
}


const Tabs = createBottomTabNavigator(
    {
        HomeScreen: {screen: HomeScreen},
        SearchScreen: {screen: SearchScreen}
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'HomeScreen') {
                    iconName = `home`;
                } else if (routeName === 'SearchScreen') {
                    iconName = `search`;
                }

                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#542C8A',
            inactiveTintColor: '#B2B2B2',
            inactiveBackgroundColor: '#D9D9D9'
        },
    }
)

const RootStack = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    Tabs: {
        screen: Tabs
    }
}, {
        initialRouteName: 'Tabs', // função para ver se ta logado ou nao
        navigationOptions: {
            header: null
        }
    },
);

export default RootStack

