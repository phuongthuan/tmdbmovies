import React, {Component} from 'react';
import ResultsList from './ResultsList';
import './ResultsSearchPage.scss';
import SideBar from './SideBar';
import querySearch from "stringquery";
import requestApi from "../api";

class ResultsSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {page: 1, results: []},
            results: []
        };
    }

    nextPage = () => {
        const page = this.state.data.page + 1;
        const url = this.props.location.pathname;
        const param = querySearch(this.props.location.search);
        requestApi.fetchResultsSearchPaginate(url, page, param.query).then(response => {
            this.setState({data: response.data});
        });
    };

    prevPaginate = () => {
        const page = this.state.data.page - 1;
        const url = this.props.location.pathname;
        const param = querySearch(this.props.location.search);
        requestApi.fetchResultsSearchPaginate(url, page, param.query).then(response => {
            this.setState({data: response.data});
        });
    };

    componentDidMount() {
        this.setState({data: this.props.location.state.results});
        this.searchByGivingUrlParams();
    }

    searchByGivingUrlParams = () => {
        const param = querySearch(this.props.location.search);
        const url = this.props.location.pathname;
        requestApi.search(url, param.query).then(response => {
            this.setState({ data: response.data});
        });
    };

    render() {

        // const param = querySearch(this.props.location.search);
        // console.log(param.query);

        // console.log('Props', this.props);

        // const location = this.props.location.pathname;
        // console.log(location);

        // console.log(this.props.location);
        // console.log(location);
        // console.log('Results Search state', this.state.data);

        // console.log('Results Search State', this.state.results);

        // const results = this.addRecordtoList();
        // console.log('RecordList', results);


        return (
            <div className="container">
                <div className="ss_media results_search flex">
                    <SideBar data={this.props} />
                    <section className="content">
                        <div className="search_results_movie">
                            <h2 className="title">Search: Movie Results</h2>
                        </div>

                        <ResultsList
                            resultsList={this.state.data}
                            prevPaginate={this.prevPaginate}
                            nextPaginate={this.nextPage}
                            routeProps={this.props}/>
                    </section>
                </div>
            </div>
        );
    }
}

export default ResultsSearch;
