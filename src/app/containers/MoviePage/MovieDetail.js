import React from 'react';
import './MovieDetail.scss';
import requestApi from '../api';
import MenuDetail from '../../components/DetailComponent/MenuDetail';
import DetailHeader from '../../components/DetailComponent/DetailHeader';
import MediaPanel from '../../components/DetailComponent/MediaPanel';
import SocialPanel from '../../components/DetailComponent/SocialPanel';
import TopBilledPanel from '../../components/DetailComponent/TopBilledPanel';
import RecommendationPanel from '../../components/DetailComponent/RecommendationPanel';
import SideBarPanel from '../../components/DetailComponent/SideBarPanel';

class MovieDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        const movieId = (this.props.match.params.movie).replace(/(^\d+)(.+$)/i, '$1');
        requestApi.fetchDataById('movie', movieId)
            .then(response => {
                this.setState({movie: response.data});
            });
    }

    componentDidUpdate() {
        window.scrollTo(0,0);
    }

    getMoviebyId = (id) => {
        requestApi.fetchDataById('movie', id).then(response => {
            this.setState({movie: response.data});
        });
    };

    render() {
        return (
            <section className="inner_content">
                <DetailHeader data={this.state.movie}/>
                <div id="media_v4" className="media movie_v4 header_large">
                    <MenuDetail/>
                    <div className="column_wrapper">

                        {/*Main Content*/}
                        <div className="white_column">

                            <div>

                                {/*Top Billed Panel*/}
                                <TopBilledPanel data={this.state.movie}/>

                                {/*Social Panel*/}
                                <SocialPanel data={this.state.movie}/>

                                {/*Media Panel Component*/}
                                <MediaPanel data={this.state.movie}/>

                                {/*Recommendations Panel*/}
                                <RecommendationPanel type="movie" viewRec={this.getMoviebyId} data={this.state.movie}/>

                            </div>

                        </div>

                        {/*Side Bar*/}
                        <SideBarPanel data={this.state.movie}/>

                    </div>
                </div>
            </section>
        );
    }
}

export default MovieDetail;