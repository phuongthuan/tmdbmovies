import React from 'react';
import isoConv from 'iso-language-converter';
import flag from '../../images/flag.png';
import moment from 'moment';


const SideBarPanel = (props) => {

    const { revenue, release_dates, production_countries, genres, keywords, budget, status, runtime, original_title, original_language } = props.data;

    function moneyFormat(money) {
        if (money && money > 0) {
            return new Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD'
            }).format(money);
        }
        return '-';
    }

    function getOriginalLanguage(language) {
        if (language) {
            return isoConv(language);
        }
    }

    function getReleaseDate() {
        if (props.data.release_dates && props.data.production_countries) {

            const dates = release_dates.results;

            // console.log('Default', dates);
            // console.log('After filter', dates.filter(release_date => production_countries.some(x => release_date.iso_3166_1 === x.iso_3166_1)));

            return dates.filter(release_date => production_countries.some(country => release_date.iso_3166_1 === country.iso_3166_1))
                .map(date => date.release_dates.map((d, id) => (
                    <li key={id}>
                        <img src={flag} alt="" />{moment(d.release_date).format("MMMM DD, YYYY")} <br />
                        <div className="certification">
                            <div><span>{d.certification}</span>
                            </div> Premiere</div>
                    </li>
                )));

        }
    }

    function getGenres(genres) {
        if (genres) {
            return genres.map(genre => (<li key={genre.id}><a href="">{genre.name}</a></li>))
        }
    }

    function getKeywords(keywords) {
        if (keywords) {
            return keywords.keywords.map(keyword => (<li key={keyword.id}><a href="">{keyword.name}</a></li>))
        }
    }

    function getRuntime() {
        let h = runtime / 60 | 0,
            m = runtime % 60 | 0;
        return ( h + "h "
            +  m + "m ");
    }

    return (
        <div className="grey_column">
            <div>
                <section className="split_column">
                    <div>
                        <div className="column no_bottom_pad">
                            <section className="facts left_column">
                                <h4><bdi>Facts</bdi></h4>
                                <p><strong>Original Title</strong>{original_title}</p>
                                <p><strong><bdi>Status</bdi></strong>{status}</p>
                                <p className="no_bottom_pad"><strong>Release Information</strong></p>

                                <ul className="releases">
                                    {getReleaseDate()}
                                </ul>

                                <p><strong>Original Language</strong>{getOriginalLanguage(original_language)}</p>
                                <p><strong><bdi>Runtime</bdi></strong> {getRuntime()}</p>
                                <p><strong><bdi>Budget</bdi></strong>{moneyFormat(budget)}</p>
                                <p><strong><bdi>Revenue</bdi></strong>{moneyFormat(revenue)}</p>
                                <p><strong><bdi>Homepage</bdi></strong> -</p>
                            </section>
                            <section className="genres right_column">
                                <h4><bdi>Genres</bdi></h4>
                                <ul>
                                    {getGenres(genres)}
                                </ul>
                            </section>
                            <section className="keywords right_column">
                                <h4><bdi>Keywords</bdi></h4>
                                <ul>
                                    {getKeywords(keywords)}
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div>
                        <section className="content_score">
                            <h4 dir="auto">Content Score</h4>
                            <div className="content_score">
                                <div className="false" style={{width: '100%'}}>
                                    <p>100</p>
                                </div>
                            </div>
                            <p dir="auto">Yes! Looking good!</p>
                        </section>
                        <section className="leaderboard">
                            <h4>Top Contributors</h4>
                            <div className="leaders">
                                <div className="edit_leader">
                                    <div className="avatar">
                                        <a href="/u/cyrax_36">
                                            <span className="round initials background_color blue">c</span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <p className="edit_count">90</p>
                                        <p><a href="/u/cyrax_36">cyrax_36</a></p>
                                    </div>
                                </div>
                                <div className="edit_leader">
                                    <div className="avatar">
                                        <a href="/u/erikraul31">
                                            <img className="avatar" src="https://image.tmdb.org/t/p/w45_and_h45_face/xM2mcNOFSk3L40ARv94QPu9qVp4.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <p className="edit_count">63</p>
                                        <p><a href="/u/erikraul31">erikraul31</a></p>
                                    </div>
                                </div>
                                <div className="edit_leader">
                                    <div className="avatar">
                                        <a href="/u/FilipeManuelNeto">
                                            <img className="avatar" src="https://secure.gravatar.com/avatar/6abb015b3ac6f32148a1d9527447b77d.jpg?s=45" alt=""/>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <p className="edit_count">40</p>
                                        <p><a href="/u/FilipeManuelNeto">Filipe Manuel Dias Neto</a></p>
                                    </div>
                                </div>
                                <div className="edit_leader">
                                    <div className="avatar">
                                        <a href="/u/sirk">
                                            <span className="round initials background_color blue">s</span>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <p className="edit_count">37</p>
                                        <p><a href="/u/sirk">sirk</a></p>
                                    </div>
                                </div>
                                <p><a href="/movie/278-the-shawshank-redemption/changes"><span className="glyphicons glyphicons-chevron-right x1" /> View Edit History</a></p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SideBarPanel;
