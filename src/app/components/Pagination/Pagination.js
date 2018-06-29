import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const Pagination = (props) => {

    const { match } = props.routeProps;
    const dataPaginate = props.dataPaginate;
    const { page, total_pages, total_results } = dataPaginate;

    const paginate = () => {
        if (page === 1) {
            return (
                <p className="right">
                    <Link onClick={props.nextPaginate} to={`${match.url}?page=${page+1}`}>
                        <FontAwesomeIcon icon="arrow-alt-circle-right" />
                        <span />
                    </Link>
                </p>
            );

        } else if (page === total_pages) {
            return (
                <p className="right">
                    <Link onClick={props.prevPaginate} to={`${match.url}?page=${page-1}`}>
                        <FontAwesomeIcon icon="arrow-alt-circle-left" />
                        <span />
                    </Link>
                </p>
            );

        } else {
            return (
                <p className="right">
                    <Link onClick={props.prevPaginate} to={`${match.url}?page=${page-1}`}>
                        <FontAwesomeIcon icon="arrow-alt-circle-left" />
                        <span />
                    </Link>

                    <Link onClick={props.nextPaginate} to={`${match.url}?page=${page+1}`}>
                        <FontAwesomeIcon icon="arrow-alt-circle-right" />
                        <span />
                    </Link>
                </p>
            )
        }
    };

    return (
        <div className="ss_pagination">
            <p className="left">Currently on page: {page} of {total_pages}
                <span className="total_results grey">({total_results})</span>
            </p>
            {paginate()}
        </div>
    );
};

export default Pagination;