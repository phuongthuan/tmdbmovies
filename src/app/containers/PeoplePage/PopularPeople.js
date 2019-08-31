import React, { Component } from 'react';
import requestApi from '../api';
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
        requestApi.fetchDataPaginate('person/popular', page).then(response => {
            this.setState({data: response.data});
        });
    }

    prevPaginate(e) {
        const page = this.state.data.page - 1;
        requestApi.fetchDataPaginate('person/popular', page).then(response => {
            this.setState({ data: response.data });
        });
    }

    componentDidMount() {
        requestApi.fetchData('person/popular').then(response => {
            this.setState({ data: response.data });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="ss_media">
                    <h2 className="title">Popular People</h2>
                    <PersonList
                        routeProps={this.props}
                        prevPaginate={this.prevPaginate.bind(this)}
                        nextPaginate={this.nextPage.bind(this)}
                        personsList={this.state.data} />
                </div>
            </div>
        );
    }
}

export default PopularPeople;