
import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'; 
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home'
import Search from './screens/Search'


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

const styles = StyleSheet.create({
    searchButton: {
        marginRight: 20
    }
})

export default createBottomTabNavigator(
    {
      HomeScreen: HomeScreen,
      SearchScreen: SearchScreen,
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
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
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