import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getListMovie } from '../store/moviesdb/actions'

import '../css/ListData.css'

class BoardCard extends Component {

  fetchDataMovies() {
    this.props.getListMovie()
  }

  componentWillMount() {
    this.fetchDataMovies()
  }

  render() {
    
    return (
    <div style={{paddingBottom:"50px"}}>
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
                        <Link to={`detail/${movie.id}`}>Detail?</Link>
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

const mapStateToProps = (state) => ({
  data: state.listMovie.data,
  loading: state.listMovie.loading,
  error: state.listMovie.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getListMovie,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCard);