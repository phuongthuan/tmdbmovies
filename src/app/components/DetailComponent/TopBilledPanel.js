import React from 'react';
import imageNa from '../../images/no_image_profile.png';

const TopBilledPanel = (props) => {

    const { credits } = props.data;

    function checkImage(imagePath) {
        if (imagePath == null) {
            return imageNa;
        }
        return `https://image.tmdb.org/t/p/w138_and_h175_face${imagePath}`
    }

    function getActors(actors) {
        if (actors) {
            var actorsList = actors.cast;
            var size = Object.keys(actorsList).length;

            if (actorsList.length >= 5) {
                actorsList = actors.cast.slice(0, 5);
            } else {
                actorsList = actors.cast.slice(0, size);
            }

            return actorsList.map(actor => (
                <li key={actor.id} className="ss_card">
                    <a href="">
                        <img src={checkImage(actor.profile_path)} alt={actor.name} />
                    </a>
                    <p><a href="">{actor.name}</a></p>
                    <p className="character">{actor.character}</p>
                </li>
            ));
        }
    }

    return (
        <section className="panel top_billed scroller">
            <h3>Top Billed Cast</h3>
            <ol className="people scroller">
                {getActors(credits)}
            </ol>
            <p className="new_button">
                <a href="">Full Cast &amp; Crew</a>
            </p>
        </section>
    );
};

export default TopBilledPanel;
