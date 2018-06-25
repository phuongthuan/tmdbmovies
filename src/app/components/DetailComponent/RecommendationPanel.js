import React from 'react';
import imageNa from '../../images/NotAvailable.png';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecommendationPanel = (props) => {

    const { recommendations } = props.data;

    function checkImage(imagePath) {
        if (imagePath == null) {
            return imageNa;
        }
        return `https://image.tmdb.org/t/p/w250_and_h141_face${imagePath}`;
    }

    function getRecommendations(payload) {
        if (payload) {
            var recommendations = payload.results.slice(0, 8);

            return recommendations.map(recommendation => (
                <div key={recommendation.id} className="item mini backdrop mini_card">
                    <div className="image_content">
                        <a href="/movie/238" title={recommendation.title}>
                            <img src={checkImage(recommendation.backdrop_path)} alt={recommendation.title} />
                            <div className="meta">
                                <span className="release_date"><FontAwesomeIcon icon="calendar-alt" />&nbsp;{moment(recommendation.release_date).format("MM/DD/YYYY")}</span>
                            </div>
                        </a>
                    </div>

                    <p className="movie flex">
                        <a className="title" href="/movie/238" title={recommendation.title}><bdi>{recommendation.title}</bdi></a>
                        <span className="vote_average">8.6 <FontAwesomeIcon icon="star" /></span>
                    </p>
                </div>
            ));
        }
    }

    return (
        <section className="panel recommendations scroller">
            <h3>Recommendations</h3>
            <div className="scroller">
                {getRecommendations(recommendations)}
            </div>
        </section>
    );
};

export default RecommendationPanel;
