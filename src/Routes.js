
import React, { Component } from 'react';
import {
    StackNavigator,
    createBottomTabNavigator,
    createStackNavigator
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

    static navigationOptions = {
        title: 'Home'
    };
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         title: 'Home',
    //         headerRight: (
    //             <TouchableOpacity style={styles.searchButton}
    //                 onPress={() => navigation.navigate('SearchScreen')}>
    //                 <Icon name="search" size={20} color="white" />
    //             </TouchableOpacity>
    //         )
    //     }
    // }

    sair = () => {
        AsyncStorage.removeItem('usuario')
        // console.warn('deu logout')
        this.props.navigation.navigate('LoginScreen')
    }

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

// export default createBottomTabNavigator(
const Tabs = createBottomTabNavigator(
    {
        HomeScreen: {screen: HomeScreen},
        SearchScreen: {screen: SearchScreen},
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

const RootStack = createStackNavigator({
    
    LoginScreen: {
        screen: LoginScreen,
        
    },
    Tabs: {
        screen: Tabs
    }
}, {
        initialRouteName: 'Tabs', // função para ver se ta logado ou nao
        navigationOptions: {
            header: null
        }
        //     headerStyle: {
        //         backgroundColor: 'black',
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //         fontWeight: 'bold',
        //     }
        // }
    },
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