import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import MovieItem from './MovieItem';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    // const timeout = ms => new Promise(res => setTimeout(res, ms));
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=8c54b08b120d2d59bdffb9c090467daa';
    const response = await fetch(url);
    const data = await response.json();
    // await timeout(3000);
    this.setState({
      movies: data.results,
      loaded: true,
    });
  }

  render() {
    if (!this.state.loaded) {
      return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
          data={this.state.movies}
          renderItem={({ item }) => <MovieItem {...item} navigation={this.props.navigation} />}
        />
      </View>
    );
  }
}
