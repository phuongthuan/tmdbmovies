import React from 'react';
import image_detail_media from '../../images/detail_media1.jpg';
import image_detail_profile from '../../images/detail_profile_image.jpg';

const MediaPanel = () => {
    return (
        <section className="panel media_panel media scroller">
            <div className="menu_bar">
                <h3>Media</h3>
                <ul>
                    <li className="active" dir="auto"><a id="popular" className="media_panel" href="">Most Popular</a></li>
                    <li dir="auto"><a id="videos" className="media_panel" href="">Videos <span>7</span></a></li>
                    <li dir="auto"><a id="backdrops" className="media_panel" href="">Backdrops <span>21</span></a></li>
                    <li dir="auto"><a id="posters" className="media_panel" href="">Posters <span>81</span></a></li>
                    <li className="view_all" />
                </ul>
            </div>
            <div className="content">
                <div className="original_content">
                    <div className="video">
                    </div>
                    <div className="backdrop">
                        <img src={image_detail_media} alt="detail Media" />
                    </div>
                    <div className="backdrop">
                        <img src={image_detail_media} alt="detail Media" />
                    </div>
                    <div className="backdrop">
                        <img src={image_detail_profile} alt="detail Media" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaPanel;
