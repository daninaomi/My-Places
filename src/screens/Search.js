
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Image,
    Text,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('screen').width;

export default class Search extends Component {

    constructor() {
        super()
        this.state = {
            term: '',
            fotos: []
        }
    }

    onSubmit = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${this.state.term}&client_id=d2f9218a71fd93fb4b0cab51fd5b0bb3ec38100443ee5577787a278cd7b6d394`)
            .then(res => res.json())
            .then(response => {
                // console.warn(response)
                this.setState({
                    ...this.state.fotos,
                    fotos: response.results,
                    term: ''
                    // isLoading: false
                })
            }
            )
            .then(res => Keyboard.dismiss())
            .catch(erro => {
                this.setState({
                    msg: erro
                })
            })
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    {/* <Text style={styles.title}>Unsplash</Text> */}
                    <View style={styles.searchContainer}>
                        <TextInput style={styles.searchInput}
                            placeholder='o que procura?'
                            underlineColorAndroid='transparent'
                            placeholderTextColor='white'
                            onChangeText={term => this.setState({ term: term })}
                            value={this.state.term}
                        />
                    </View>
                    <TouchableOpacity style={styles.searchButton}
                        onPress={this.onSubmit}
                    >
                        <Icon name="search" size={20} color="white" />
                    </TouchableOpacity>
                </View>


                <FlatList
                    keyExtractor={item => item.id}
                    data={this.state.fotos}
                    numColumns='1'
                    // ListFooterComponent={this.renderFooter}
                    renderItem={({ item }) =>

                        <View style={styles.photoCard}>
                            <Image style={styles.imagem}
                                source={{ uri: item.urls.small }} />

                            <Text style={styles.photoDescription}>
                                {item.user.name}
                            </Text>
                        </View>
                    }
                />
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'grey'
    },
    searchInput: {
        flex: 1,
        color: 'white'
    },
    searchButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#542C8A',
        marginLeft: 10,
        borderRadius: 5
    },
    photoCard: {
        marginTop: 15,
        marginLeft: 15
    },
    photoDescription: {
        fontSize: 18
    },
    imagem: {
        width: (width) - 30,
        height: (width / 2) - 25
    }
})