import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getListMovie } from '../store/moviesdb/actions'

import '../css/ListData.css'

class Todo extends Component {

  fetchDataMovies() {
    this.props.getListMovie()
  }

  componentWillMount() {
    this.fetchDataMovies()
  }

  render() {
    if(this.props.loading) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      if(this.props.error.status) {
        return (
          <div>
            <h1>Error!</h1>
            <p>{this.props.error.message}</p>
          </div>
        )
      } else {
        return (
        <div style={{paddingBottom:"50px"}}>
          <h1>Your Waiting List</h1>
          <div className="container" style={{display:"flex", 'flexWrap':"wrap"}}>
        {
          this.props.data.map((movie, index) =>
            <div key={index}>
                <div className="grid-item" style={{height:"20px"}}>
                  <div className="example-2 card">
                    <div className="wrapper">
                    <img src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path} alt={movie.title} />
                      <div className="date">
                        <span className="day">Release</span>
                        <span className="month">{movie.release_date}</span>
                      </div>
                      <div className="data">
                        <div className="content">
                          <h4 className="title">{movie.title}</h4>
                          <p className="text">
                            <span><Link to={`detail/${movie.id}`}>Detail</Link></span>
                          </p>
                        </div>
                        <input type="checkbox" id="show-menu" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          </div>
        </div>
        )
      }
    }
  }
}

const mapStateToProps = (state) => ({
  data: state.movies.listMovie,
  loading: state.movies.loading,
  error: state.movies.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getListMovie,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);