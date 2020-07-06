export const getMovieList =(movieId)=> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=432ea214d5481d224e14b555d6d5869b&language=en-US&page=1`
  return  fetch(url)
}
