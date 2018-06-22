
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home'
import HeaderBar from './components/HeaderBar'
import Search from './screens/Search'

class Header extends Component {

    pesquisa = () => {
        this.props.navigation.navigate('SearchScreen')
    }

    render() {
        return (
            // <HeaderBar />
            <View>
                <TouchableOpacity
                    onPress={this.pesquisa}>
                    <Icon name="search" size={20} color="white" />
                </TouchableOpacity>
            </View>
        );
    }
}

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

class SearchScreen extends Component {
    // static navigationOptions = {
    //     title: 'Unsplash'
    // };

    render() {
        return (
            <Search />
        )
    }
}


const RootStack = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        SearchScreen: SearchScreen
        // LoginScreen: LoginScreen
    },
    {
        initialRouteName: 'HomeScreen',
        navigationOptions: {
            headerRight: <Header />,
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

// navigationOptions = ({ navigation }) => {
//             return {
//                 headerRight: (
//                     <TouchableOpacity
//                         onPress={navigation.navigate('SearchScreen')}>
//                         <Icon name="search" size={20} color="white" />
//                     </TouchableOpacity>
//                 ),
//                 headerStyle: {
//                     backgroundColor: 'black',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                 }
//             }
//         }