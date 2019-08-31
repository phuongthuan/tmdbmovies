import React from 'react';
import image from '../../images/NoImage_Available.png';
import { Link } from 'react-router-dom';
import moment from "moment/moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Record = (props) => {

    const record = props.record;

    console.log(props.record);

    // console.log('Record', record);

    const { id, overview, media_type, vote_average} = props.record;

    let title = record.hasOwnProperty('title') ? record.title : record.name;

    const overviewTrim = overview.length > 200 ? overview.substring(0, 197) + '...' : overview;

    let release_date = record.hasOwnProperty('release_date') ? record.release_date : record.first_air_date;

    const titleRoute = title.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');

    let imageUrl = record.poster_path == null ? image : `https://image.tmdb.org/t/p/w500${record.poster_path}`;

    const imageStyle = {
        width: '185px',
        height: '278px'
    };

    return (
        <div className="ss_item ss_card">
            <div className="ss_image_content">
                <Link to={`/movie/${id}-${titleRoute}`}>
                    <img style={imageStyle} src={imageUrl} alt=""/>
                    <div className="ss_meta">
                    </div>
                </Link>
            </div>

            <div className="ss_info">
                <div className="ss_wrapper">
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

                <p className="ss_overview">{overviewTrim}</p>
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

export default Record;
