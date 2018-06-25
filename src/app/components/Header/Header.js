import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Header.scss';
import ResultSearch from "./ResultSearch";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            results: {}
        };
    }

    handleInputFocus = () => {
        this.setState({focus: true});
    };

    handleInputBlur = () => {
        this.setState({focus: false});
    };

    resultSearch = (data) => {
        this.setState({results:data});
    };

    render() {
        return (
            <header className="ss_header">
                <Navbar/>
                <SearchBar
                    data={this.resultSearch}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}/>
                {this.state.focus ? <ResultSearch data={this.state.results}/> : null}
                {/*<ResultSearch data={this.state.results} />*/}
            </header>
        );
    }
}

export default Header;