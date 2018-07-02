import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import ResultsSearch from "./ResultsSearch";

class ResultSearchPage extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/search" component={ResultsSearch} />} />
                <Route exact path="/search/movie" component={ResultsSearch} />} />
                <Route exact path="/search/tv" component={ResultsSearch} />} />
            </Switch>
        );
    }
}

export default ResultSearchPage;
