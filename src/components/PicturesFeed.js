import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class PicturesFeed extends Component {

    render() {
        return (
            <ScrollView>
                <FlatList
                    keyExtractor={item => item.id}
                    data={this.props.fotos}
                    numColumns='1'
                    // ListFooterComponent={this.props.footer}
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

                {
                    this.props.fetchingStatus ?
                        <ActivityIndicator color="#542C8A" style={{ marginTop: 10 }} />
                        :
                        null
                }

                <View style={styles.footerStyle}>
                    <TouchableOpacity style={styles.buttonLoadMore}
                        activeOpacity={0.7}
                        onPress={this.props.loadMorePictures}
                    >
                        <Text style={styles.buttonText}>Carregar mais fotos</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    photoCard: {
        // flexDirection: 'row',
        marginTop: 15,
        marginLeft: 15
    },
    photoDescription: {
        marginBottom: 10,
        fontSize: 16,
        fontStyle: 'italic',
        color: 'white',
        // textDecorationLine: 'underline',
    },
    imagem: {
        width: (width) - 25,
        height: (width / 2) - 25
    },
    footerStyle: {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLoadMore: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#542C8A',
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    }
});