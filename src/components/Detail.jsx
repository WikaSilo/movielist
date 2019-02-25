import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SyncLoader } from 'react-spinners'
import { getDetailMovie } from '../store/moviesdb/actions'

import '../css/Detail.css'

class Detail extends Component {
  fetchDataMovieDetail() {
    let id = this.props.match.params.id
    this.props.getDetailMovie(id)
  }

  componentDidMount() {
    this.fetchDataMovieDetail();
  }

  render() {
    let {original_title, poster_path, tagline, release_date, runtime, vote_average, vote_count, overview} = this.props.data
    if(this.props.loading) {
      return (
        <div className="container" style={{
          display: 'center',
          justifyContent: 'center',
          paddingTop: '50px'
        }}>
          <div className='sweet-loading'>
            <SyncLoader
              color={'#7A69C7'} 
              loading={this.props.loading} 
            />
          </div>
        </div>
      )
    } else {
      if(this.props.error) {
        return (
          <h1>Error...</h1>
        )
      } else {
        return (
          <div className="container">
            <div className="row">
              <div className="example-1 card">
                <div className="wrapper">
                <img src={`https://image.tmdb.org/t/p/w400/` + poster_path} alt="" />
                  <div className="date">
                    <span className="day">Release</span>
                    <span className="month">{release_date}</span>
                  </div>
                  <div className="data">
                    <div className="content">
                      <span className="author">{original_title}</span>
                      <label htmlFor="show-menu" className="menu-button"><span></span></label>
                    </div>
                    <input type="checkbox" id="show-menu" />
                    <ul className="menu-content">
                      <li><a className="fa fa-bookmark-o"><span>{runtime} min</span></a></li>
                      <li><a className="fa fa-heart-o"><span>Star: {vote_average}</span></a></li>
                      <li><a className="fa fa-comment-o"><span>Vote: {vote_count}</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <h1 className="title">{tagline}</h1>
              <p className="text">{overview}</p>
            </div>
          </div>
        )
      }
    }
  }
}

const mapStateToProps = (state) => ({
  data: state.movies.detailMovie,
  loading: state.movies.loading,
  error: state.movies.error.status
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDetailMovie,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);