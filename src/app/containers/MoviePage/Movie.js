import React from 'react';
import {Link} from 'react-router-dom';
import image from '../../images/NoImage_Available.png';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Movie = (props) => {

    const movie = props.movie;
    const {id, overview, vote_average} = movie;

    let title = movie.hasOwnProperty('title') ? movie.title : movie.name;
    let release_date = movie.hasOwnProperty('release_date') ? movie.release_date : movie.first_air_date;

    const overviewTrim = overview.length > 200 ? overview.substring(0, 197) + '...' : overview;
    const titleRoute = title.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');

    let imageUrl = movie.poster_path == null ? image : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const imageStyle = {
        width: '185px',
        height: '278px'
    };

    return (
        <div className="ss_item ss_card">
            <div className="ss_image_content">
                <Link to={`/movie/${id}-${titleRoute}`}>
                    <img style={imageStyle} src={imageUrl} alt={title}/>
                    <div className="ss_meta">
                    </div>
                </Link>
            </div>
            <div className="ss_info">
                <div className="ss_wrapper">
                    {/*<div className="ss_consencus">*/}
                        {/*<div className="ss_outer_ring">*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="ss_wrapper_title">
                        <Link to={`/movie/${id}-${titleRoute}`}
                              className="ss_title_result">{title}
                        </Link>
                        <span>{moment(release_date).format("MMM DD, YYYY")}</span>
                    </div>

                    <div className="ss_consencus">
                        <div className="ss_outer_ring">
                            <span className="rate_average">{vote_average}<FontAwesomeIcon icon="star"/></span>
                        </div>
                    </div>
                </div>
                <p className="ss_overview">
                    {overviewTrim}
                </p>
                <p className="ss_view_more">
                    <Link
                        to={`/movie/${id}-${titleRoute}`}>
                        More Info
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Movie;