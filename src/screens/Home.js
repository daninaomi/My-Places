
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            fotosCurated: [],
            fotos: [],
            msg: '',
            isLoading: true,
            fetching_Status: false
        }
        this.page = 1
    }

    componentDidMount() {
        fetch('https://api.unsplash.com/photos/curated?page=1&per_page=5&client_id=d2f9218a71fd93fb4b0cab51fd5b0bb3ec38100443ee5577787a278cd7b6d394')
            .then(res => res.json())
            .then(response => {
                // console.warn(response)
                this.setState({
                    ...this.state.fotosCurated,
                    fotosCurated: response
                })
            }
            )
            .catch(erro => {
                this.setState({
                    msg: erro
                })
            })

        fetch(`https://api.unsplash.com/photos?page=${this.page}&client_id=d2f9218a71fd93fb4b0cab51fd5b0bb3ec38100443ee5577787a278cd7b6d394`)
            .then(res => res.json())
            .then(response => {
                // console.warn(response)
                this.setState({
                    ...this.state.fotos,
                    fotos: response,
                    isLoading: false
                })
            }
            )
            .catch(erro => {
                this.setState({
                    msg: erro
                })
            })
    }

    loadMorePictures = () => {
        this.page = this.page + 1;

        this.setState({ fetching_Status: true }, () => {
            fetch(`https://api.unsplash.com/photos?page=${this.page}&client_id=d2f9218a71fd93fb4b0cab51fd5b0bb3ec38100443ee5577787a278cd7b6d394`)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        fotos: [ ...this.state.fotos, ...responseJson ],
                        fetching_Status: false
                    });
                })
                .catch((error) => {
                    console.error(error);
                });

        });
    }

    renderFooter = () => {
        return (
            <View style={styles.footerStyle}>

                <TouchableOpacity style={styles.buttonLoadMore}
                    activeOpacity={0.7}
                    onPress={this.loadMorePictures}
                >

                    <Text style={styles.buttonText}>Carregar mais fotos</Text>
                    {
                        (this.state.fetching_Status)
                            ?
                            <ActivityIndicator color="#fff" style={{ marginLeft: 6 }} />
                            :
                            null
                    }

                </TouchableOpacity>

            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <Text style={styles.title}>
                    Bem-vindo
                </Text>

                <Text style={styles.subtitle}>
                    Features
                </Text>

                <View style={styles.featuresSection}>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={this.state.fotosCurated}
                        horizontal={true}
                        renderItem={({ item }) =>

                            <View>
                                <Image style={styles.featuredPics}
                                    source={{ uri: item.urls.small }} />
                            </View>
                        }
                    />
                </View>

                {
                    (this.state.isLoading)
                        ?
                        (<ActivityIndicator size="large" />)
                        :
                        (

                            <FlatList
                                keyExtractor={item => item.id}
                                data={this.state.fotos}
                                numColumns='1'
                                ListFooterComponent={this.renderFooter}
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
                        )
                }

                <Text >
                    {this.state.msg}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    title: {
        margin: 15,
        marginBottom: 25,
        fontSize: 22
    },
    subtitle: {
        padding: 15,
        backgroundColor: '#5E5E5E',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    featuresSection: {
        padding: 15,
        backgroundColor: '#5E5E5E'
    },
    featuredPics: {
        width: width / 2,
        height: width / 2
    },
    photoCard: {
        // flexDirection: 'row',
        marginTop: 15,
        marginLeft: 15
    },
    photoDescription: {
        fontSize: 18
    },
    imagem: {
        width: (width) - 25,
        height: (width / 2) - 25
    },
    footerStyle:
    {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLoadMore:
    {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F44336',
        borderRadius: 5,
    },
    buttonText:
    {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    }
});
