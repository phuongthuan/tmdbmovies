import React from 'react';

const SocialPanel = (props) => {

    function getReviews() {
        if (props.data.reviews) {
            const reviews = props.data.reviews.results;
            if (reviews.length > 0) {
                const reviewer = reviews[1] || reviews[0];
                const { author, content, url } = reviewer;
                const overviewTrim = content.length > 560 ? content.substring(0, 557) + '...' : content;
                return (
                    <div className="ss_card">
                        <div className="grouped">
                            <div className="avatar">
                            </div>
                            <div className="info">
                                <h4>Featured Review</h4>
                                <div className="rating_wrapper">
                                    <h3>
                                        <a href="">A review by {author}</a>
                                    </h3>
                                    {/*<div className="rounded rating">*/}
                                    {/*<span><i /></span>*/}
                                    {/*{vote_average}*/}
                                    {/*</div>*/}
                                </div>
                                <h5>Written by <a href="">{author}</a> on July 10, 2016</h5>
                            </div>
                        </div>

                        <div className="teaser">
                            <p>{overviewTrim}<a href={url}>read the rest.</a></p>
                        </div>
                    </div>
                );
            }
            return <p>We don't have any reviews for Neon Genesis Evangelion: The End of Evangelion. Would you like to write one?</p>;
        }
    }


    return (
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
                                    {getReviews()}
                                </div>
                                <p className="new_button"><a href="">Read All Reviews</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SocialPanel;
