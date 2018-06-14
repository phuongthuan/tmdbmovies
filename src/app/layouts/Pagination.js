import React, { Component } from 'react';
import Icon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Pagination extends Component {

    render() {

        const dataPaginate = this.props.dataPaginate;
        const { page, total_pages, total_results } = dataPaginate;
        const paginate = () => {
            if (page > 1) {
                return (
                    <Link to={`/movie/top-rated?page=${page}`}>
                        <Icon icon="arrow-alt-circle-left" />
                        <span />
                    </Link>
                );
            }
        }

        return (
            <div className="ss_pagination">
                <p className="left">Currently on page: {page} of {total_pages}
                    <span className="total_results grey">({total_results})</span>
                </p>
                <p className="right">
                    <Link to={`/movie/top-rated?page=${page}`}>
                        <Icon icon="arrow-alt-circle-right" />
                        <span />
                    </Link>
                    {/* {paginate} */}
                </p>
            </div>
        );
    }
}

export default Pagination;