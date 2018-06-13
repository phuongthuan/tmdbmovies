import React, { Component } from 'react';
import Icon from '@fortawesome/react-fontawesome';

class Pagination extends Component {
    render() {

        const dataPaginate = this.props.dataPaginate;
        const { page, total_pages, total_results } = dataPaginate;
        
        return (
            <div className="ss_pagination">
                <p className="left">Currently on page: {page} of {total_pages}
                    <span className="total_results grey">({total_results})</span>
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