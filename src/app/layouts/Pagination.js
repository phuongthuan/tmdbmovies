import React, { Component } from 'react';
import Icon from '@fortawesome/react-fontawesome';

class Pagination extends Component {
    render() {
        return (
            <div className="ss_pagination">
                <p className="left">Currently on page: 1 of 288
                    <span className="total_results grey">(5,756 results)</span>
                </p>
                <p className="right">
                    <a href="">
                        <Icon icon="arrow-alt-circle-right" />
                        <span />
                    </a>
                </p>
            </div>
        );
    }
}

export default Pagination;