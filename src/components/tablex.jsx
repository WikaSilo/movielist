import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import ReactTable from "react-table";
import 'react-table/react-table.css'

class ListData extends Component {
  fetchDataMovie() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8ac1df0620b6a7b94d74d0e0f7e9dbf6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(response => {
        this.props.getAllListData(response.data.results)
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchDataMovie();
  }

  render() {
    const columns = [{
      Header: 'Title',
      accessor: 'title',
      id: 'id',
      Cell: row => (
        <div key={row.original.id}>
          <Link to={`detail/${row.original.id}`}>{row.value}</Link>
        </div>
      )
    },{
      Header: 'Poster',
      accessor: 'backdrop_path',
      Cell: row => (
        <img src={`https://image.tmdb.org/t/p/w300/` + row.value} alt="" />
      )
    }]
    return (
    <div style={{paddingBottom:"200px"}}>
      <ReactTable
        data={this.props.data}
        columns={columns}
        defaultPageSize={5}
      />
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.listMovie
})

const mapDispatchToProps = (dispatch) => ({
  getAllListData: (data) => dispatch({
    type: "LIST_MOVIES",
    payload: data
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListData);