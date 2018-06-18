import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

const Item = (props) => {
    const movie = props.movie;
    const { id, overview } = movie;

    var title;
    title = movie.hasOwnProperty('title') ? movie.title : movie.name;

    var release_date;
    release_date = movie.hasOwnProperty('release_date') ? movie.release_date : movie.first_air_date;

    const overviewTrim = overview.length > 200 ? overview.substring(0, 197) + '...' : overview;
    const titleRoute = title.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
    
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const imageStyle = {
        width: '185px',
        height: '278px'
    };

    return (
        <div className="ss_item ss_card">
            <div className="ss_image_content">
                <Link to={`/movie/${id}-${titleRoute}`}>
                    <img style={imageStyle} src={imageUrl} alt="The Shawshank Redemption" />
                    <div className="ss_meta">
                    </div>
                </Link>
            </div>
            <div className="ss_info">
                <div className="ss_wrapper">
                    <div className="ss_consencus">
                        <div className="ss_outer_ring">
                        </div>
                    </div>
                    <div className="ss_wrapper_title">
                        <Link to={`/movie/${id}-${titleRoute}`} className="ss_title_result">{title}</Link>
                        <span><Moment format="MMM DD,YYYY">{release_date}</Moment></span>
                    </div>
                </div>
                <p className="ss_overview">
                    {overviewTrim}
                </p>
                <p className="ss_view_more">
                    <a href="">More Info</a>
                </p>
            </div>
        </div>
    );
};

export default Item;