import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: 'black',
      borderBottomWidth: 0,
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          WHO WATCHIN?!
        </Text>
        <Animatable.View animation="zoomIn" iterationCount={1}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('MovieList')}>
            <Image style={styles.image} source={require('../profileavatar.png')} />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 5,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Edgar
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});
