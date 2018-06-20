import React from 'react';
import image_detail_profile from '../../images/detail_profile_image.jpg';


const DetailHeader = () => {
    return (
        <div className="detail_header large border first">
            <div className="custom_bg">
                <div className="single_column">
                    <section className="images">
                        <div className="poster">
                            <div className="image_content">
                                <img src={image_detail_profile} alt="Example" />
                            </div>
                            <div className="zoom">
                                <a href=""><span><i className="fas fa-search-plus" /></span>Expand</a>
                            </div>
                        </div>
                        <div className="header_poster_wrapper">
                            <section className="header poster">
                                <div className="title">
                                          <span>
                                            <a href=""><h2>The Shawshank Redemption</h2></a><span className="release_date">(1994)</span>
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
                                        <p>Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.</p>
                                    </div>
                                    <h3 className="featured">Featured Crew</h3>
                                    <ol className="people no_image">
                                        <li className="profile">
                                            <p><a href="">Frank Darabont</a></p>
                                            <p className="character">Stephen King</p>
                                        </li>
                                        <li className="profile">
                                            <p><a href="">Director, Writer</a></p>
                                            <p className="character">Stephen King</p>
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
