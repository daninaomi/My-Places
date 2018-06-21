/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

const url = 'https://maps.googleapis.com/maps/api/place/photo?'
const urlFoto = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyDkBXbmvqlnaINSdDhVT89Y5Zc6sk5ny3k'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      locais: [],
      fotosArray: [],
      fotoref: [],
      images: [],
      msg: ''
    }
  }

  loadFotos(photos) {
    photos.map((photo) => {
      console.warn(photo.photo_reference)
      fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyDkBXbmvqlnaINSdDhVT89Y5Zc6sk5ny3k`)
        // .then(res => res.json())
        .then(json => {
          this.setState({
            ...this.state.images,
            images: json
            
          })
        }).catch(erro => {
          this.setState({
            msg: erro
          })
        })
    })
  }

  preparaArrayDeFotos(locais) {
    locais.map(element => {
      this.setState({
        ...this.state.fotoref,
        fotosArray:element.photos
      })
    })
    this.loadFotos(this.state.fotosArray)
  }

  componentDidMount() {

    fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDkBXbmvqlnaINSdDhVT89Y5Zc6sk5ny3k')
      .then(res => res.json())
      .then(json => {
        this.setState({
          locais: json.results
        })
        this.preparaArrayDeFotos(this.state.locais)
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
      <View style={styles.container}>

        <FlatList
          keyExtractor={item => item.id}
          data={this.state.locais}
          renderItem={({ item }) =>
            <View>
              <Text>
                {item.name}
              </Text>
              {/* <Image
                source={{ uri: item.icon }}
                style={styles.imagem} /> */}
            </View>
          }
        />
          
        {/* <FlatList
          data={this.state.images}
          renderItem={({ item }) =>
            
              <Image style={styles.imagem}
                source={{ uri: item }} />
                
          }
        /> */}

        <Text >
          {this.state.msg}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imagem: {
    width: 200,
    height: 200
  }
});
