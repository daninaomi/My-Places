
import React, { Component } from 'react';
import {
    StackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home'
import Search from './screens/Search'
import Login from './screens/Login'


class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerRight: (
                <TouchableOpacity style={styles.searchButton}
                    onPress={() => navigation.navigate('SearchScreen')}>
                    <Icon name="search" size={20} color="white" />
                </TouchableOpacity>
            )
        }
    }

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


const styles = StyleSheet.create({
    searchButton: {
        marginRight: 20
    }
})

// const MainNav = StackNavigator({
//     Home: { screen: HomeScreen },
//     Search: { screen: SearchScreen },
// });

// const TopLevelNav = StackNavigator({
//     Login: { screen: LoginScreen },
//     Main: { screen: MainNav },
// }, {
//         headerMode: 'none',
//     });

export default createBottomTabNavigator(
    {
        HomeScreen: HomeScreen,
        SearchScreen: SearchScreen,
        LoginScreen: LoginScreen,
        // TopLevelNav: TopLevelNav
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
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
            inactiveTintColor: 'gray',
        },
    }
);



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

// class Header extends Component {

//     pesquisa = () => {
//         this.props.navigation.navigate('SearchScreen')
//     }

//     render() {
//         return (
//             // <HeaderBar />
//             <View>
//                 <TouchableOpacity
//                     onPress={this.pesquisa}>
//                     <Icon name="search" size={20} color="white" />
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }


// const RootStack = createStackNavigator(
//     {
//         HomeScreen: HomeScreen,
//         SearchScreen: SearchScreen
//         // LoginScreen: LoginScreen
//     },
//     {
//         initialRouteName: 'HomeScreen',
//         navigationOptions: {
//             // headerRight: <Header />,
//             headerStyle: {
//                 backgroundColor: 'black',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             }
//         }
//     },
// );

// export default RootStack