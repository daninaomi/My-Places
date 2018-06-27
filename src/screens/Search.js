
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PicturesFeed from '../components/PicturesFeed'

const width = Dimensions.get('screen').width;

export default class Search extends Component {

    constructor() {
        super()
        this.state = {
            term: '',
            fotos: [],
            isLoading: true,
            fetchingStatus: false
        }
        this.page = 1
    }

    onSubmit = () => {
        fetch(`https://api.unsplash.com/search/photos?page=${this.page}&query=${this.state.term}&client_id=d2f9218a71fd93fb4b0cab51fd5b0bb3ec38100443ee5577787a278cd7b6d394`)
            .then(res => res.json())
            .then(response => {
                // console.warn(response)
                this.setState({
                    ...this.state.fotos,
                    fotos: response.results,
                    // term: '',
                    isLoading: false
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

    loadMorePictures = () => {
        this.page = this.page + 1;

        this.setState({ fetchingStatus: true }, () => {
            fetch(`https://api.unsplash.com/search/photos?page=${this.page}&query=${this.state.term}&client_id=d2f9218a71fd93fb4b0cab51fd5b0bb3ec38100443ee5577787a278cd7b6d394`)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        fotos: [...this.state.fotos, ...responseJson.results],
                        fetchingStatus: false
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    render() {
        return (
            <View>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput}
                        placeholder='o que procura?'
                        underlineColorAndroid='transparent'
                        placeholderTextColor='white'
                        onChangeText={term => this.setState({ term: term })}
                        value={this.state.term}
                    />
                    <TouchableOpacity style={styles.searchButton}
                        onPress={this.onSubmit}
                    >
                        <Icon name="search" size={20} color="white" />
                    </TouchableOpacity>
                </View>

                {
                    this.state.fotos.length !== 0 ?
                        <ScrollView style={styles.resultsList}>
                            <PicturesFeed fotos={this.state.fotos}
                                loadMorePictures={this.loadMorePictures}
                                fetchingStatus={this.state.fetchingStatus}
                            />
                        </ScrollView>
                        :
                        null

                }


            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        padding: 15
    },
    title: {
        fontSize: 22,
        color: 'white',
        flex: 1
    },
    searchInput: {
        flex: 1,
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'grey'
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
    },
    resultsList: {
        marginBottom: 80
    }
})