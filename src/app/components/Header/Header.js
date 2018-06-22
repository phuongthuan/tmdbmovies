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
            show: {

            }
        };
    }


    handleInputFocus = () => {
        this.setState({ focus: true });
    };

    handleInputBlur = () => {
        this.setState({ focus: false });
    };

    render() {
        return (
            <header className="ss_header">
                <Navbar/>
                <SearchBar
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur} />
                {this.state.focus ? <ResultSearch /> : null}
                {/*<ResultSearch status={this.state.show} />*/}
            </header>
        );
    }
}

export default Header;