import React from 'react';
import isoConv from 'iso-language-converter';
import flag from '../../images/flag.png';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SidePanel.scss';

const SideBarPanel = (props) => {

    const {
            homepage,
            networks,
            revenue,
            type,
            episode_run_time,
            release_dates,
            production_countries,
            genres,
            keywords,
            budget,
            status,
            runtime,
            original_title,
            original_language } = props.data;

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
        if (release_dates && production_countries) {

            const dates = release_dates.results;

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

    function getNetworks() {
        if (networks) {
            return networks.map(network => (
                <li key={network.id}>
                    <a href="/network/89"><img alt={network.name} src={`https://image.tmdb.org/t/p/h30${network.logo_path}`} /></a>
                </li>
            ))
        }
    }

    function getGenres(genres) {
        if (genres) {
            return genres.map(genre => (<li key={genre.id}><a href="">{genre.name}</a></li>))
        }
    }

    function getKeywords(keywords) {
        if (keywords) {
            return (keywords.keywords || keywords.results).map(keyword => (<li key={keyword.id}><a href="">{keyword.name}</a></li>))
        }
    }

    function getRuntime(runtime) {
        if (runtime) {
            if (runtime instanceof Array) {
                var time = [];
                for (let i =0; i < runtime.length; i++) {
                    let h = runtime[i] / 60 | 0,
                        m = runtime[i] % 60 | 0;

                    if (h <= 0) time.push(m + "m ");
                    else if (h === 1) time.push("60m");
                    else if (h > 0 && m === 0) time.push(h + "h ");
                    else (time.push(h + "h " + m + "m "));
                }
                return time.slice(0, time.length).join(', ');
            }

            let h = runtime / 60 | 0,
                m = runtime % 60 | 0;
            if (h <= 0) return m + "m ";
            else if (h === 1) return "60m";
            else if (h > 0 && m === 0) return h + "h ";
            return ( h + "h "
                +  m + "m ");
        }
    }

    return (
        <div className="grey_column">
            <div>
                <section className="split_column">
                    <div>
                        <div className="column no_bottom_pad">
                            <section className="facts left_column">
                                <span className="social_links">
                                  <a className="social_link" href="https://www.facebook.com/TheBigBangTheory" target="_blank" rel="noopener"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                                  <a className="social_link" href="https://twitter.com/bigbangtheory" target="_blank" rel="noopener"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                                  <a className="social_link" href="https://instagram.com/bigbangtheory_cbs/" target="_blank" rel="noopener"><FontAwesomeIcon icon={['fab', 'twitter-square']} /></a>
                                </span>
                                <h4><bdi>Facts</bdi></h4>

                                {original_title &&
                                    <p><strong>Original Title</strong>{original_title}</p>
                                }

                                <p><strong><bdi>Status</bdi></strong>{status}</p>

                                {release_dates &&
                                    <div>
                                        <p className="no_bottom_pad"><strong>Release Information</strong></p>
                                        <ul className="releases">
                                            {getReleaseDate()}
                                        </ul>
                                    </div>
                                }

                                {networks &&
                                    <div>
                                        <p className="no_bottom_pad"><strong><bdi>Network</bdi></strong></p>
                                        <ul className="networks">
                                            {getNetworks()}
                                        </ul>
                                    </div>
                                }

                                {type &&
                                    <p><strong>Type</strong>{type}</p>
                                }

                                <p><strong>Original Language</strong>{getOriginalLanguage(original_language)}</p>

                                <p><strong><bdi>Runtime</bdi></strong>
                                    {getRuntime((runtime || episode_run_time))}
                                </p>

                                {(budget || revenue) &&
                                    <div>
                                        <p><strong><bdi>Budget</bdi></strong>{moneyFormat(budget)}</p>
                                        <p><strong><bdi>Revenue</bdi></strong>{moneyFormat(revenue)}</p>
                                    </div>
                                }

                                <p>
                                    <strong><bdi>Homepage</bdi></strong>
                                    {homepage == null ? ' -' : (<a href={homepage} target="_blank">{homepage}</a>) }
                                </p>
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

                        {/*Content Score*/}
                        <section className="content_score">
                            <h4 dir="auto">Content Score</h4>
                            <div className="content_score">
                                <div className="false" style={{width: '100%'}}>
                                    <p>100</p>
                                </div>
                            </div>
                            <p dir="auto">Yes! Looking good!</p>
                        </section>

                        {/*Leader Board*/}
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
