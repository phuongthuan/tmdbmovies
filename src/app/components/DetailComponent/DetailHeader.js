import React from 'react';
import moment from 'moment';
import image from '../../images/NoImage_Available.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import glamorous from 'glamorous';
import * as Vibrant from 'node-vibrant'

class DetailHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            vibrantRgb: []
        }
    }

    getVibrant = (imageUrl) => {
        if (imageUrl) {
            Vibrant.from(imageUrl).getPalette().then((palette) => {
                if ((palette.Vibrant) !== null) {
                    rgb = zpalette.Vibrant.getRgb();
                    this.setState({vibrantRgb:palette.Vibrant.getRgb()});
                }
            });
        }
    };

    randomRGBA = () => {
        const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const randomByte = () => randomNumber(0, 255);
        const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2);
        const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`;
        return {
            backgroundImage: `radial-gradient(circle at 20% 50%, ${randomCssRgba()} 0%, ${randomCssRgba()} 100%)`,
        };
    };

    render() {

        const { first_air_date, backdrop_path, poster_path, title, name,  release_date, overview } = this.props.data;

        let imageUrl = poster_path == null ? image : `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;

        let backGroundImageUrl = backdrop_path == null ? 'null' : `url('https://image.tmdb.org/t/p/w1400_and_h450_face${backdrop_path}')`;

        const DetailHeader = glamorous.div({
            '&::before': { backgroundImage: backGroundImageUrl }
        });

        return (
            <DetailHeader className="detail_header large border first">
                <div className="custom_bg" style={this.randomRGBA()}>
                    <div className="single_column">
                        <section className="images">
                            <div className="poster">
                                <div className="image_content">
                                    <img src={imageUrl} alt={title || name}/>
                                </div>
                                <div className="zoom">
                                    <a href=""><span><FontAwesomeIcon icon="search-plus"/></span>Expand</a>
                                </div>
                            </div>
                            <div className="header_poster_wrapper">
                                <section className="header poster">
                                    <div className="title">
                                      <span>
                                        <a href=""><h2>{title || name}</h2></a><span
                                          className="release_date">({moment(release_date || first_air_date).format("YYYY")})</span>
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
            </DetailHeader>
        );
    }
}

export default DetailHeader;
