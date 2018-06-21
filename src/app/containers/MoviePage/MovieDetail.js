import React from 'react';
import './MovieDetail.scss';

import MenuDetail from '../../components/DetailComponent/MenuDetail';
import DetailHeader from '../../components/DetailComponent/DetailHeader';
import MediaPanel from '../../components/DetailComponent/MediaPanel';
import SocialPanel from '../../components/DetailComponent/SocialPanel';
import TopBilledPanel from '../../components/DetailComponent/TopBilledPanel';
import RecommendationPanel from '../../components/DetailComponent/RecommendationPanel';

import SideBarPanel from '../../components/DetailComponent/SideBarPanel';


const MovieDetail = (props) => {

    return (
        <section className="inner_content">
            <DetailHeader data={props.data} />
            <div id="media_v4" className="media movie_v4 header_large">
                <MenuDetail />
                <div className="column_wrapper">

                    {/*Main Content*/}
                    <div className="white_column">
                        <div>

                            {/*Top Billed Panel*/}
                            <TopBilledPanel data={props.data} />
                            {/*End Top Billed Panel*/}


                            {/*Social Panel*/}
                            <SocialPanel data={props.data} />
                            {/*End Socical Panel*/}

                            {/*Media Panel Component*/}
                            <MediaPanel data={props.data} />

                            {/*Recommendations Panel*/}
                            <RecommendationPanel data={props.data} />
                            {/*End Recommendations Panel*/}

                        </div>
                    </div>

                    {/*Side Bar*/}
                    <SideBarPanel data={props.data} />

                </div>
            </div>
        </section>
    );
};

export default MovieDetail;