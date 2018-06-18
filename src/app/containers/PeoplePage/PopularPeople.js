import React, { Component } from 'react';
import movieApi from '../api';
import PersonList from './PersonList';
import './People.scss';

class PopularPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                page: 1,
                results: []
            }
        }
    }

    nextPage(e) {
        const page = this.state.data.page + 1;
        movieApi.fetchMoviePaginate('person', 'popular', page).then(response => {
            this.setState({data: response.data});
        });
    }

    prevPaginate(e) {
        const page = this.state.data.page - 1;
        movieApi.fetchMoviePaginate('person', 'popular', page).then(response => {
            this.setState({ data: response.data });
        });
    }

    componentDidMount() {
        movieApi.fetchMovie('person', 'popular').then(response => {
            this.setState({ data: response.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className="title">Popular People</h2>
                <PersonList
                    routeProps={this.props}
                    personsList={this.state.data}
                    />
            </div>

        );
    }
}

export default PopularPeople;