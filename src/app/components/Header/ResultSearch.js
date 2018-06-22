import React from 'react';
import Icon from '@fortawesome/react-fontawesome';

const ResultSearch = (props) => {

    const resultsList = props.data.results;

    function showResult(results) {
        if (results && results.length > 0) {
            var size = Object.keys(results).length;
            if (results.length >= 10) {
                results.slice(0, 10);
            } else {
                results.slice(0, size);
            }

            return results.map(result => (
                <li key={result.id} className="item-search">
                    <div className="slim_search">
                        <div className="container">
                            <Icon icon="search" />
                            <p>{result.name || result.title}</p>
                        </div>
                    </div>
                </li>
            ));
        }
    }

    return (
        <div className="results_search" style={props.status}>
            <div className="results_popup">

                {(resultsList && resultsList.length > 0) &&
                    <div className="trending_search">
                        <div className="container">
                            <h2>Result Searches</h2>
                        </div>
                    </div>
                }

                <div className="ss_list_scroller">
                    <ul className="ss_list_result">
                        {showResult(resultsList)}
                    </ul>
                </div>

                {(resultsList && resultsList.length <= 0) &&
                    <div className="results_popup">
                        <div className="ss_nodata">
                            <div className="slim_search">
                                <div className="container">
                                    <h2>No Result</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ResultSearch;
