import React from 'react';
import {Link} from 'react-router-dom';
import image from '../../images/NoImage_Available.png';
import moment from 'moment';

const Tv = (props) => {

    const tv = props.tv;
    const {id, overview} = tv;
    const getItemId = props.viewDetail;

    let title = tv.hasOwnProperty('title') ? tv.title : tv.name;
    let release_date = tv.hasOwnProperty('release_date') ? tv.release_date : tv.first_air_date;

    const overviewTrim = overview.length > 200 ? overview.substring(0, 197) + '...' : overview;
    const titleRoute = title.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');

    let imageUrl = tv.poster_path == null ? image : `https://image.tmdb.org/t/p/w500${tv.poster_path}`;
    const imageStyle = {
        width: '185px',
        height: '278px'
    };

    return (
        <div className="ss_item ss_card">
            <div className="ss_image_content">
                <Link onClick={() => getItemId(id)}
                      to={`/tv/${id}-${titleRoute}`}>
                    <img style={imageStyle} src={imageUrl} alt={title}/>
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
                        <Link onClick={() => getItemId(id)}
                              to={`/tv/${id}-${titleRoute}`}
                              className="ss_title_result">{title}
                        </Link>
                        <span>{moment(release_date).format("MMM DD, YYYY")}</span>
                    </div>
                </div>
                <p className="ss_overview">
                    {overviewTrim}
                </p>
                <p className="ss_view_more">
                    <Link
                        onClick={() => getItemId(id)}
                        to={`/tv/${id}-${titleRoute}`}>
                        More Info
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Tv;