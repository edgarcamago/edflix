import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  TextInput,
  ImageBackground,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MovieDetails from './screens/MovieDetails';
import NowPlaying from './screens/NowPlaying';
import Popular from './screens/Popular';
import TopRated from './screens/TopRated';
import Upcoming from './screens/Upcoming';
import LoginScreen from './screens/LoginScreen';

// import SearchMovies

class MovieList extends React.Component {
  static navigationOptions = {
    title: 'EdFLIX',
    headerStyle: {
      backgroundColor: 'black',
      borderBottomWidth: 0,
    },
    headerLeft: null,
    headerTintColor: 'red',
  };

  render() {
    return (
      <ImageBackground
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: '#0b0606',
        }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <TextInput
            placeholder="Search Movie"
            placeholderTextColor="grey"
            style={{
              color: 'white',
              flex: 0.2,
              fontWeight: '700',
              backgroundColor: 'black',
            }}
          />
          <Text style={styles.text}>NOW PLAYING</Text>
          <NowPlaying navigation={this.props.navigation} />
          <Text style={styles.text}>POPULAR</Text>
          <Popular navigation={this.props.navigation} />
          <Text style={styles.text}>TOP RATED</Text>
          <TopRated navigation={this.props.navigation} />
          <Text style={styles.text}>UPCOMING</Text>
          <Upcoming navigation={this.props.navigation} />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  text: {
    paddingBottom: 5,
    paddingTop: 10,
    fontWeight: '700',
    color: 'white',
  },
});

const RootStack = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    MovieList: MovieList,
    Details: MovieDetails,
  },

  // {
  //   initialRouteName: "MovieList"
  // }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
