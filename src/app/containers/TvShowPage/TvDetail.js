import React, {Component} from 'react';
import '../MoviePage/MovieDetail.scss';
import requestApi from '../api';
import MenuDetail from '../../components/DetailComponent/MenuDetail';
import DetailHeader from '../../components/DetailComponent/DetailHeader';
import MediaPanel from '../../components/DetailComponent/MediaPanel';
import SocialPanel from '../../components/DetailComponent/SocialPanel';
import TopBilledPanel from '../../components/DetailComponent/TopBilledPanel';
import RecommendationPanel from '../../components/DetailComponent/RecommendationPanel';
import SideBarPanel from '../../components/DetailComponent/SideBarPanel';

class TvDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tv: {}
        }
    }

    componentDidMount() {
        const tvId = (this.props.match.params.tv).replace(/(^\d+)(.+$)/i, '$1');
        requestApi.fetchDataById('tv', tvId)
            .then(response => {
                this.setState({tv: response.data});
            });
    }

    componentDidUpdate() {
        window.scrollTo(0,0);
    }

    getTvbyId = (id) => {
        requestApi.fetchDataById('tv', id).then(response => {
            this.setState({tv: response.data});
        });
    };

    render() {
        return (
            <section className="inner_content">
                <DetailHeader data={this.state.tv}/>

                <div id="media_v4" className="media movie_v4 header_large">
                    <MenuDetail/>

                    <div className="column_wrapper">

                        {/*Main Content*/}
                        <div className="white_column">

                            <div>

                                {/*Top Billed Panel*/}
                                <TopBilledPanel data={this.state.tv}/>

                                {/*Social Panel*/}
                                <SocialPanel data={this.state.tv}/>

                                {/*Media Panel Component*/}
                                <MediaPanel data={this.state.tv}/>

                                {/*Recommendations Panel*/}
                                <RecommendationPanel type="tv" viewRec={this.getTvbyId} data={this.state.tv}/>

                            </div>

                        </div>

                        {/*Side Bar*/}
                        <SideBarPanel data={this.state.tv}/>

                    </div>

                </div>
            </section>
        );
    }
}

export default TvDetail;
