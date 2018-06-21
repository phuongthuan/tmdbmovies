import React from 'react';
import moment from 'moment';

const DetailHeader = (props) => {

    const { poster_path, title, release_date, overview } = props.data;
    const imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;



    return (
        <div className="detail_header large border first">
            <div className="custom_bg">
                <div className="single_column">
                    <section className="images">
                        <div className="poster">
                            <div className="image_content">
                                <img src={imageUrl} alt={title} />
                            </div>
                            <div className="zoom">
                                <a href=""><span><i className="fas fa-search-plus" /></span>Expand</a>
                            </div>
                        </div>
                        <div className="header_poster_wrapper">
                            <section className="header poster">
                                <div className="title">
                                          <span>
                                            <a href=""><h2>{title}</h2></a><span className="release_date">({moment(release_date).format("YYYY")})</span>
                                          </span>
                                </div>
                                {/* <ul class="auto actions">
                                                <li class="chart">
                                                    <div class="consensus">
                                                        <div class="outer_ring">
                                                            <div class="outer_ring">
                                                              <div class="user_score_chart" data-percent="86.0" data-track-color="#204529" data-bar-color="#21d07a">
                                                                <div class="percent">
                                                                    <span class="icon icon-r86"></span>
                                                                </div>
                                                              <canvas height="60" width="60"></canvas></div>
                                                            </div>
                                                        </div>
                                                    <div class="text">
                                                        User <br> Score
                                                    </div>
                                                </li>
                                                <li>20</li>
                                                <li>30</li>
                                                <li>40</li>
                                                <li>50</li>
                                                <li>60</li>
                                            </ul> */}
                                <div className="header_info">
                                    <h3>Overview</h3>
                                    <div className="overview">
                                        <p>{overview}</p>
                                    </div>
                                    <h3 className="featured">Featured Crew</h3>
                                    <ol className="people no_image">
                                        <li className="profile">
                                            <p><a href="">Frank Darabont</a></p>
                                            <p className="character">Director, Writer</p>
                                        </li>
                                        <li className="profile">
                                            <p><a href="">Stephen King</a></p>
                                            <p className="character">Novel</p>
                                        </li>
                                    </ol>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DetailHeader;
