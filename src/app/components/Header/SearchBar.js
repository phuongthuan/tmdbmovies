import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requestApi from '../../containers/api';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.timeout = 0;
        this.state = {
            result: {}
        }
    }

    handleSearch = (e) => {
        const query = e.target.value;
        if(this.timeout) clearTimeout(this.timeout);
        if (query.trim() === '') return; // If text empty return immedialy.
        this.timeout = setTimeout(() => {
            requestApi.searchMultiData('search/multi', query)
                .then(response => {
                    this.props.data(response.data);
                })
                .catch(error => console.log(error));
        }, 300);
    };

    render() {
        return (
            <div className="search_bar">
                <section className="search">
                    <div className="sub_media container">
                        <form method="GET" action="" id="search_form">
                            <FontAwesomeIcon icon="search"/>
                            <span className="autocomplete">
                                <input
                                    onFocus={this.props.onFocus}
                                    onBlur={this.props.onBlur}
                                    onChange={this.handleSearch}
                                    autoCorrect="off"
                                    autoComplete="off"
                                    name="query"
                                    type="text"
                                    placeholder="Search for a movie, tv show, person..."/>
                            </span>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default SearchBar;