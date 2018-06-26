import React from 'react';
import Tv from './Tv';
import Pagination from '../../components/Pagination/Pagination';

const TvList = (props) => {

    const tvshows = props.tvshowsList.results;
    const getTv = props.tv;

    return (
        <div className="ss_results">
            {tvshows.map(tv => (<Tv
                                    viewDetail={() => getTv(tv.id)}
                                    tv={tv}
                                    key={tv.id} />) )}
            <Pagination
                routeProps={props.routeProps}
                prevPaginate={props.prevPaginate}
                nextPaginate={props.nextPaginate}
                dataPaginate={props.tvshowsList} />
        </div>
    );
};

export default TvList;