import React from 'react';
import imageNa from '../../images/NotAvailable.png';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const RecommendationPanel = (props) => {

    const { recommendations } = props.data;

    function route(id, routeName) {
        return '/' + props.type + '/' + id + '-' + (routeName.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-'));
    }

    function checkImage(imagePath) {
        if (imagePath == null) return imageNa;
        return `https://image.tmdb.org/t/p/w250_and_h141_face${imagePath}`;
    }

    function getRecommendations(payload) {
        if (payload) {
            var recommendations = payload.results.slice(0, 8);
            return recommendations.map(rec => (
                <div key={rec.id} className="item mini backdrop mini_card">
                    <div className="image_content">
                        <Link to={route((rec.id), (rec.title || rec.name)) }
                            title={rec.title || rec.name}>

                            <img
                                src={checkImage(rec.backdrop_path)}
                                alt={rec.title || rec.name} />
                            <div className="meta">
                                <span className="release_date"><FontAwesomeIcon icon="calendar-alt" />&nbsp;{moment(rec.release_date || rec.first_air_date).format("MM/DD/YYYY")}</span>
                            </div>
                        </Link>
                    </div>

                    <p className="movie flex">
                        <Link className="title"
                               to={route((rec.id), (rec.title || rec.name)) }
                               title={rec.title || rec.name}>

                            <bdi>{rec.title || rec.name}</bdi>
                        </Link>
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
