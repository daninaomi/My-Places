
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('screen').width;

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            fotosCurated: [],
            fotos: [],
            msg: ''
        }
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

        fetch('https://api.unsplash.com/photos?page=1&client_id=d2f9218a71fd93fb4b0cab51fd5b0bb3ec38100443ee5577787a278cd7b6d394')
            .then(res => res.json())
            .then(response => {
                // console.warn(response)
                this.setState({
                    ...this.state.fotos,
                    fotos: response
                })
            }
            )
            .catch(erro => {
                this.setState({
                    msg: erro
                })
            })


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

                <FlatList
                    keyExtractor={item => item.id}
                    data={this.state.fotos}
                    numColumns='1'
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
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    featuresSection: {
        padding: 15,
        backgroundColor: 'black'
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
    }
});
