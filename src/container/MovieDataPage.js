import React, { Component } from "react"
import Axios from "axios"
import MovieInfo from "../components/MovieInfo"

class MovieDataPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: {},
      inputBox: ""
    }
  }

  search = () => {
    Axios.get(`http://www.omdbapi.com/?t=${this.state.inputBox}&apikey=fd82d3db`)
      .then((response) => {
        console.log(response)
        this.setState({ movieData: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Movie Data</h1>
        <input id="inputBox" type="text" placeholder="Title" onChange={this.handleChange} />
        <button onClick={this.search} disabled={this.state.inputBox === ""}>
          Search
        </button>
        <br />
        <MovieInfo movieData={this.state.movieData} />
      </div>
    )
  }
}

export default MovieDataPage
