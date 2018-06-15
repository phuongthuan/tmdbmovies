import React from 'react';
import Icon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
    const { match } = props.routeProps;
    const dataPaginate = props.dataPaginate;
    const { page, total_pages, total_results } = dataPaginate;
    
    const paginate = () => {
        if (page > 1) {
            return (
                <Link onClick={props.prevPaginate} to={`${match.url}?page=${page-1}`}>
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
                {paginate()}
                <Link onClick={props.nextPaginate} to={`${match.url}?page=${page+1}`}>
                    <Icon icon="arrow-alt-circle-right" />
                    <span />
                </Link>
            </p>
        </div>
    );
}

export default Pagination;