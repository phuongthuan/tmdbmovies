import React, {Component} from 'react';
import Select from 'react-select';
import * as Animated from 'react-select/lib/animated';
import './FormFilter.scss';
import requestApi from "../api";

const sort_by = [
        {value: 'popularity.desc', label: 'Popularity Descending'},
        {value: 'popularity.asc', label: 'Popularity Ascending'},
        {value: 'vote_average.desc', label: 'Rating Descending'},
        {value: 'vote_average.asc', label: 'Rating Ascending'},
        {value: 'primary_release_date.asc', label: 'Release Date Ascending'},
        {value: 'primary_release_date.desc', label: 'Release Date Descending'},
        {value: 'title.asc', label: 'Title (A-Z)'},
        {value: 'title.desc', label: 'Title (Z-A)'}
];

class FormFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clearable: true,
            selectedGenres: '',
            selectedYear: {value: '2018', label: '2018'},
            sortedBy: {value: 'popularity.desc', label: 'Popularity Descending'},
            years: [],
            genres: []
        };
    }

    componentDidMount() {
        this.getYear();
        this.fetchGenresList();
    }

    selectYearHandleChange = (selectedYear) => {
        const sorted_by = this.state.sortedBy.value.toString().replace(/\s+/g, '-').toLowerCase();
        if (selectedYear) {
            let year = selectedYear.value.toString().toLowerCase();
            requestApi.filterData('discover/movie', year, sorted_by, 'movie').then(response => {
                this.props.listMoviesByYear(response.data);
                this.setState({selectedYear});
                this.props.selectedYear(year);
            });
        }
    };

    selectsortedBy = (sortedBy) => {
        let year = this.state.selectedYear.value.toString().toLowerCase();
        if (sortedBy) {
            let sorted_by = sortedBy.value.toString().replace(/\s+/g, '-').toLowerCase();
            requestApi.filterData('discover/movie', year, sorted_by, 'movie').then(response => {
                this.props.listMoviesByYear(response.data);
                this.setState({sortedBy});
                this.props.sortedType(sorted_by);
            });
        }
    };

    selectGenreHandleChange = (selectedGenres) => {
        this.setState({ selectedGenres });
        if (selectedGenres) {
            console.log('You\'ve selected:', selectedGenres);
        }
    };

    getYear() {
        const currentYear = new Date().getFullYear(), years = [], options = [];
        let startYear = 1900;
        while ( startYear <= currentYear ) years.push(startYear++);
        for (let i=0; i<years.length; i++) {
            options.push({value: years[i], label: years[i]});
        }
        this.setState({years: options.reverse()});
    }

    fetchGenresList() {
        var options = [];
        requestApi.fetchGenres('movie').then(response => {
            var genres = response.data.genres;
            if (genres) {
                genres.map(genre => options.push({label: genre.name, value: genre.id}));
            }
            this.setState({genres: options});
        });
    }

    render() {

        const { selectedYear, selectedGenres, sortedBy, genres, years } = this.state;

        return (
            <div className="filter_form">
                <span className="search_element full">
                    <label htmlFor="primary_release_year">Year</label>
                    <Select
                        className="select search_year"
                        classNamePrefix="tmdb_select"
                        placeholder="Year..."
                        isSearchable="true"
                        value={selectedYear}
                        onChange={this.selectYearHandleChange}
                        options={years} />
                </span>

                <span className="search_element full">
                    <label htmlFor="sort_by">Sort By</label>
                    <Select
                        className="select sort_by"
                        classNamePrefix="tmdb_select"
                        isSearchable="true"
                        value={sortedBy}
                        onChange={this.selectsortedBy}
                        options={sort_by} />
                </span>

                <span className="search_element full">
                    <label htmlFor="genres">Genres</label>
                    <Select
                        className="select genres"
                        classNamePrefix="tmdb_select"
                        placeholder="Genre..."
                        isMulti
                        isSearchable="true"
                        isClearable="true"
                        components={Animated}
                        onChange={this.selectGenreHandleChange}
                        options={genres} />
                </span>
            </div>
        );
    }
}

export default FormFilter;
