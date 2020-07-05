import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core'
import './App.css';
import MovieSuggest from './components/MovieSuggest/View';
import SimilarMovies from './components/SimilarMovies/View';
import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   selectedMovieId: null,
  // };

  // handleMovieSelect = movieId => {
  //   this.setState({ selectedMovieId: movieId });
  // };

  render() {
    return (
      <Container maxWidth="xl" className='App'>
        <Grid container spacing={5}>
          <Grid item xs>
            <MovieSuggest ></MovieSuggest>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs>
            {
              this.props.selectedMovieId && <SimilarMovies ></SimilarMovies>
            }
          </Grid>
        </Grid>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  selectedMovieId: state.movieSuggest.selectedMovieId,
});
export default connect(mapStateToProps)(App);
