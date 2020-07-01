import React, { Component } from 'react';
import PageviewIcon from '@material-ui/icons/Pageview';
import { searchMovie,fetchMovies } from '../../actions/searchActions';
import { connect } from 'react-redux';

export class Searchform extends Component {

    handleData = (e) => {
        // console.log("testing ")
        this.props.searchMovie(e.target.value);
        console.log(e)
    }

    onSubmit = e =>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        console.log(this.props.text)
    }
    render() {
        return (
            <div className=" container jumbotron jumbotron-fluid mt-5 text-center">
                <div className="">
                    <h1 className="display-4 mb-3">
                        <PageviewIcon style={{ fontSize: 70 }} color="primary" /> Search for Movies and Tv Series...
                </h1>
                    <form className="container" id = "searchForm" onSubmit = {this.onSubmit}>
                        <input className="form-control mr-sm-2 mb-3" type="text" placeholder="Search" aria-label="Search"
                            onChange={(e) => this.handleData(e)}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text

})


export default connect(mapStateToProps, { searchMovie, fetchMovies})(Searchform);
