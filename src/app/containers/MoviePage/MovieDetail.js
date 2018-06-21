import React from 'react';
import './MovieDetail.scss';
import MenuDetail from '../../components/DetailComponent/MenuDetail';
import DetailHeader from '../../components/DetailComponent/DetailHeader';

import image_detail_profile from '../../images/detail_profile_image.jpg';
import image_detail_actor from '../../images/detail_actor.jpg';
import image_detail_recommendation from '../../images/detail_recommentation_image.jpg';
import image_detail_media from '../../images/detail_media1.jpg';
import flag from '../../images/flag.png';

const MovieDetail = (props) => {

    let { credits, revenue, budget, status, runtime } = props.data;

    console.log(props.data.keywords); // keyword Object
    console.log(props.data.genres); // genres Array => Done
    console.log(props.data.keywords.keywords); // Keywords Array => Error (Bug)

    function getGenres() {
        var genres = props.data.genres;
        if (genres) {
            return genres.map(genre => (<li key={genre.id}><a href="">{genre.name}</a></li>))
        }
    }

    // function getKeywords() {
    //     var keywords = props.data.keywords.keywords;
    //     if (keywords) {
    //         return keywords.keywords.map(keyword => (<li key={keyword.id}><a href="">{keyword.name}</a></li>))
    //     }
    // }

    return (
        <section className="inner_content">
            <DetailHeader data={props.data} />
            <div id="media_v4" className="media movie_v4 header_large">
                <MenuDetail />
                <div className="column_wrapper">
                    <div className="white_column">
                        <div>
                            <section className="panel top_billed scroller">
                                <h3>Top Billed Cast</h3>
                                <ol className="people scroller">
                                    <li className="ss_card">
                                        <a href="">
                                            <img src={image_detail_actor} alt="Profile" />
                                        </a>
                                        <p><a href="">Tim Robbins</a></p>
                                        <p className="character">Andy Dufresne</p>
                                    </li>
                                </ol>
                                <p className="new_button">
                                    <a href="">Full Cast &amp; Crew</a>
                                </p>
                            </section>
                            <section className="panel media_panel social_panel">
                                <section className="review">
                                    <div className="menu_bar">
                                        <h3 dir="auto">Social</h3>
                                        <ul>
                                            <li className="active"><a id="reviews" className="media_panel" href="">Reviews <span>4</span></a></li>
                                            <li><a id="discussions" className="media_panel" href="">Discussions <span>11</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <div className="original_content">
                                            <div className="review_container four">
                                                <div className="inner_content">
                                                    <div className="content">
                                                        <div className="ss_card">
                                                            <div className="grouped">
                                                                <div className="avatar">
                                                                </div>
                                                                <div className="info">
                                                                    <h4>Featured Review</h4>
                                                                    <div className="rating_wrapper">
                                                                        <h3>
                                                                            <a href="">A review by John Chard</a>
                                                                        </h3>
                                                                        <div className="rounded rating">
                                                                            <span><i /></span>
                                                                            10.0
                                                                        </div>
                                                                    </div>
                                                                    <h5>Written by <a href="">John Chard</a> on July 10, 2016</h5>
                                                                </div>
                                                            </div>
                                                            <div className="teaser">
                                                                <p>Some birds aren't meant to be caged.</p>
                                                                <p>The Shawshank Redemption is written and directed by Frank Darabont. It is an adaptation of the Stephen King novella Rita Hayworth and Shawshank Redemption. Starring Tim Robbins and Morgan Freeman, the film portrays the story of Andy Dufresne (Robbins), a banker who is sentenced to two life sentences at Shawshank State Prison for apparently murdering his wife and her lover. Andy finds it tough going but finds solace in the friendship he forms with fellow inmate, Ellis "Red" Redding (Freeman). While things start to pick up when the warden finds Andy a priso...
                                                                    <a href="">read the rest.</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="new_button"><a href="">Read All Reviews</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>
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
                            <section className="panel recommendations scroller">
                                <h3>Recommendations</h3>
                                <div className="scroller">
                                    <div className="item mini backdrop mini_card">
                                        <div className="image_content">
                                            <a href="/movie/238" title="The Godfather">
                                                <img src={image_detail_recommendation} alt="detail recommendation" />
                                                <div className="meta">
                                                    <span className="release_date"><span className="glyphicons glyphicons-calendar x1" /> 03/14/1972</span>
                                                </div>
                                            </a>
                                        </div>
                                        <p className="movie flex">
                                            <a className="title" href="/movie/238" title="The Godfather"><bdi>The Godfather</bdi></a>
                                            <span className="vote_average">8.6 <span id="rating_4bc88cd2017a3c122d0044c7" className="glyphicons glyphicons-star x1 right rating" /></span>
                                        </p>
                                    </div>
                                    <div className="item mini backdrop mini_card">
                                        <div className="image_content">
                                            <a href="/movie/238" title="The Godfather">
                                                <img src={image_detail_recommendation} alt="detail recommendation" />
                                                <div className="meta">
                                                    <span className="release_date"><span className="glyphicons glyphicons-calendar x1" /> 03/14/1972</span>
                                                </div>
                                            </a>
                                        </div>
                                        <p className="movie flex">
                                            <a className="title" href="/movie/238" title="The Godfather"><bdi>The Godfather</bdi></a>
                                            <span className="vote_average">8.6 <span id="rating_4bc88cd2017a3c122d0044c7" className="glyphicons glyphicons-star x1 right rating" /></span>
                                        </p>
                                    </div>
                                    <div className="item mini backdrop mini_card">
                                        <div className="image_content">
                                            <a href="/movie/238" title="The Godfather" alt="The Godfather">
                                                <img src={image_detail_recommendation} alt="detail recommendation" />
                                                <div className="meta">
                                                    <span className="release_date"><span className="glyphicons glyphicons-calendar x1" /> 03/14/1972</span>
                                                </div>
                                            </a>
                                        </div>
                                        <p className="movie flex">
                                            <a className="title" href="/movie/238" title="The Godfather"><bdi>The Godfather</bdi></a>
                                            <span className="vote_average">8.6 <span id="rating_4bc88cd2017a3c122d0044c7" className="glyphicons glyphicons-star x1 right rating" /></span>
                                        </p>
                                    </div>
                                    <div className="item mini backdrop mini_card">
                                        <div className="image_content">
                                            <a href="/movie/238" title="The Godfather">
                                                <img src={image_detail_recommendation} alt="detail recommendation" />
                                                <div className="meta">
                                                    <span className="release_date"><span className="glyphicons glyphicons-calendar x1" /> 03/14/1972</span>
                                                </div>
                                            </a>
                                        </div>
                                        <p className="movie flex">
                                            <a className="title" href="/movie/238" title="The Godfather"><bdi>The Godfather</bdi></a>
                                            <span className="vote_average">8.6 <span id="rating_4bc88cd2017a3c122d0044c7" className="glyphicons glyphicons-star x1 right rating" /></span>
                                        </p>
                                    </div>
                                    <div className="item mini backdrop mini_card">
                                        <div className="image_content">
                                            <a href="/movie/238" title="The Godfather">
                                                <img src={image_detail_recommendation} alt="detail recommendation" />
                                                <div className="meta">
                                                    <span className="release_date"><span className="glyphicons glyphicons-calendar x1" /> 03/14/1972</span>
                                                </div>
                                            </a>
                                        </div>
                                        <p className="movie flex">
                                            <a className="title" href="/movie/238" title="The Godfather"><bdi>The Godfather</bdi></a>
                                            <span className="vote_average">8.6 <span id="rating_4bc88cd2017a3c122d0044c7" className="glyphicons glyphicons-star x1 right rating" /></span>
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="grey_column">
                        <div>
                            <section className="split_column">
                                <div>
                                    <div className="column no_bottom_pad">
                                        <section className="facts left_column">
                                            <h4><bdi>Facts</bdi></h4>
                                            <p><strong>Status</strong>Released</p>
                                            <p><strong><bdi>Status</bdi></strong> Released</p>
                                            <p className="no_bottom_pad"><strong>Release Information</strong></p>
                                            <ul className="releases">
                                                <li>
                                                    <img src={flag} alt="" />September 22, 1994 <br />
                                                    <div className="certification"><div><span>R</span></div> Premiere</div>
                                                </li>
                                                <li>
                                                    <img src={flag} alt="" />September 22, 1994 <br />
                                                    <div className="certification"><div><span>R</span></div> Premiere</div>
                                                </li>
                                                <li>
                                                    <img src={flag} alt="" />September 22, 1994 <br />
                                                    <div className="certification"><div><span>R</span></div> Premiere</div>
                                                </li>
                                            </ul>
                                            <p><strong>Original Language</strong>English</p>
                                            <p><strong><bdi>Runtime</bdi></strong> {runtime}</p>
                                            <p><strong><bdi>Budget</bdi></strong> ${budget}</p>
                                            <p><strong><bdi>Revenue</bdi></strong> ${revenue}</p>
                                            <p><strong><bdi>Homepage</bdi></strong> -</p>
                                        </section>
                                        <section className="genres right_column">
                                            <h4><bdi>Genres</bdi></h4>
                                            <ul>
                                                {getGenres()}
                                            </ul>
                                        </section>
                                        <section className="keywords right_column">
                                            <h4><bdi>Keywords</bdi></h4>
                                            <ul>
                                                {/*{getKeywords()}*/}
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
                </div>
            </div>
        </section>
    );
};

export default MovieDetail;