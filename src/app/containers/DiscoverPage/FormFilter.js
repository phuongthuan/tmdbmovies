import React, {Component} from 'react';
import Select from 'react-select';
import * as Animated from 'react-select/lib/animated';
import './FormFilter.scss';
import requestApi from "../api";

const sort_by = [
    {value: 'Popularity Descending', label: 'Popularity Descending'},
    {value: 'Popularity Ascending', label: 'Popularity Ascending'},
    {value: 'Rating Descending', label: 'Rating Descending'},
    {value: 'Rating Ascending', label: 'Rating Ascending'},
    {value: 'Release Date Ascending', label: 'Release Date Ascending'},
    {value: 'Release Date Descending', label: 'Release Date Descending'},
    {value: 'Title (A-Z)', label: 'Title (A-Z)'},
    {value: 'Title (Z-A)', label: 'Title (Z-A)'}
];

class FormFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clearable: true,
            selectedGenres: '',
            selectedYear: '',
            sortedBy: 'Popularity Descending',
            years: [],
            genres: []
        };
    }

    componentDidMount() {
        this.getYear();
        this.fetchGenresList();
    }

    selectYearHandleChange = (selectedYear) => {
        if (selectedYear) {
            let year = selectedYear.value.toString().toLowerCase();
            requestApi.filterData('movie', year).then(response => {
                this.props.listMoviesByYear(response.data);
                this.setState({selectedYear: year});
            });
        }
    };

    selectGenreHandleChange = (selectedGenres) => {
        this.setState({ selectedGenres });
        if (selectedGenres) {
            console.log('You\'ve selected:', selectedGenres);
        }
    };

    selectsortedBy = (value) => {
        this.setState({sortedBy: value});
        if (value) {
            console.log('You\'ve selected:', value);
        }
    };

    // filterGenres = (selectedGenres)  => {
    //     const genres = this.genresOption();
    //     if (genres) {
    //         return genres.filter(genre =>
    //             genre.label.toLowerCase().includes(selectedGenres.toLowerCase())
    //         );
    //     }
    // };
    //
    // promiseOptions = (selectedGenres) => {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(this.filterGenres(selectedGenres));
    //         }, 1000);
    //     });
    // };


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

    // genresOption() {
    //     const options = [];
    //     const genres = this.props.genresList.genres;
    //     if (genres && genres instanceof Array) {
    //         genres.map(genre => options.push({ value: genre.id, label: genre.name}));
    //     }
    //     return options;
    // }

    render() {

        const { selectedYear, selectedGenres, sortedBy, genres, years } = this.state;

        return (
            <div className="filter_form">
                <span className="search_element full">
                    <label htmlFor="primary_release_year">Year</label>
                    <Select className="select search_year"
                                classNamePrefix="tmdb_select"
                                placeholder="Year..."
                                isSearchable="true"
                                value={selectedYear}
                                onChange={this.selectYearHandleChange}
                                options={years} />
                </span>

                <span className="search_element full">
                    <label htmlFor="sort_by">Sort By</label>
                    <Select className="select sort_by"
                            classNamePrefix="tmdb_select"
                            isSearchable="true"
                            defaultValue={sort_by[0].label}
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
                            defaultValue={[genres[1], genres[2]]}
                            onChange={this.selectGenreHandleChange}
                            options={genres} />
                </span>
            </div>
        );
    }
}

export default FormFilter;
