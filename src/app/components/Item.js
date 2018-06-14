import React, { Component } from 'react';

class Item extends Component {
    render() {
        const movie = this.props.movie;
        const { title, overview, release_date } = movie;
        const overviewTrim = overview.length > 200 ? overview.substring(0, 197) + '...' : overview;
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const imageStyle = {
            width: '185px',
            height: '278px'
        };


        return (
            <div className="ss_item ss_card">
                <div className="ss_image_content">
                    <a href="">
                        <img style={imageStyle} src={imageUrl} alt="The Shawshank Redemption" />
                        <div className="ss_meta">
                        </div>
                    </a>
                </div>
                <div className="ss_info">
                    <div className="ss_wrapper">
                        <div className="ss_consencus">
                            <div className="ss_outer_ring">
                            </div>
                        </div>
                        <div className="ss_wrapper_title">
                            <a href="" className="ss_title_result">{title}</a>
                            <span>{release_date}</span>
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
    }
}

export default Item;