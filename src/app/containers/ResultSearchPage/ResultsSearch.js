import React, {Component} from 'react';

class ResultsSearch extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="ss_media">
                    <nav>
                        <ul>
                            <li><a id="movie" href="/search/movie?query=Love" className="search_tab active" title="Movies" alt="Movies">Movies <span>6599</span></a></li>
                            <li><a id="tv" href="/search/tv?query=Love" className="search_tab " title="TV Shows" alt="TV Shows">TV Shows <span>1128</span></a></li>
                            <li><a id="person" href="/search/person?query=Love" className="search_tab " title="People" alt="People">People <span>591</span></a></li>
                            <li><a id="keyword" href="/search/keyword?query=Love" className="search_tab " title="Keywords" alt="Keywords">Keywords <span>138</span></a></li>
                            <li><a id="company" href="/search/company?query=Love" className="search_tab " title="Companies" alt="Companies">Companies <span>55</span></a></li>
                            <li><a id="collection" href="/search/collection?query=Love" className="search_tab " title="Collections" alt="Collections">Collections <span>20</span></a></li>
                            <li><a id="network" href="/search/network?query=Love" className="search_tab " title="Networks" alt="Networks">Networks <span>0</span></a></li>
                        </ul>
                        <p className="search_tip">Tip: You can use the 'y:' filter to narrow your results by year. Example: 'star wars y:1977'.</p>
                    </nav>
                    <section className="content">
                        <h2 className="title">Search: Movie Results</h2>
                    </section>
                </div>
            </div>
        );
    }
}

export default ResultsSearch;
