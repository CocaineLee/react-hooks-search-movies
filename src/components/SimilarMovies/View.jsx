import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import { fetchMoviesList, setMovies } from '../../action/similarMovies'
class SimilarMovies extends Component {


  componentDidMount() {
    this.props.fetchMoviesList(this.props.movieId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movieId !== this.props.movieId) {
      this.props.fetchMoviesList(this.props.movieId)
    }
    if (prevProps.movieId && !this.props.movieId) {
      this.props.setMovies([])
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount ....");
  }

  render() {
    const { movies, loading ,movieId} = this.props

    if (loading) {
      return <CircularProgress />
    }

    if (!movieId || movies.length === 0) {
      return (
        <span>
          No similar movies found
        </span>
      )
    }
    return (
      <div className='similar-movies-container'>
        <GridList cols={4} spacing={10}>
          {movies.map((movie) => (
            <GridListTile
              key={movie.id}
              className='movie'
              onClick={() => window.open(`https://www.themoviedb.org/movie/${movie.id}`, '_blank')} >
              <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
              <GridListTileBar
                title={movie.title}
                subtitle={<span>{movie.overview}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  movieId: state.movieSuggest.selectedMovieId,
  loading: state.similarMovies.loading,
  movies: state.similarMovies.movies
});

export default connect(mapStateToProps, { fetchMoviesList, setMovies })(SimilarMovies);
