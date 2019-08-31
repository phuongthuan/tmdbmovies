import React from 'react';
import Record from './Record';
import Pagination from '../../components/Pagination/Pagination';

const ResultsList = (props) => {
    const resultsList = props.resultsList.results;
    // console.log('Results List', props.resultsList);
    return (
        <div className="ss_results flex">
            {resultsList.map(record => (<Record record={record} key={record.id} />))}
            <Pagination
                routeProps={props.routeProps}
                prevPaginate={props.prevPaginate}
                nextPaginate={props.nextPaginate}
                dataPaginate={props.resultsList}
                />
        </div>
    );
};

export default ResultsList;
