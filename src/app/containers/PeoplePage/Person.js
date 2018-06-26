import React from 'react';
import image from '../../images/no-person.jpg';

const Person = (props) => {
    const person = props.person;
    let subsList = [];
    const { name } = person;
    let profileUrl = person.profile_path == null ? image : `https://image.tmdb.org/t/p/w235_and_h235_face/${person.profile_path}`;

    let knowsList = person.known_for;
    for (let i = 0; i < knowsList.length; i ++) {
        if (knowsList[i].hasOwnProperty('title') && !knowsList[i].hasOwnProperty('name')) {
            subsList.push(person.known_for[i].title);
        } else if (knowsList[i].hasOwnProperty('name')) {
            subsList.push(knowsList[i].name);
        } else {
            subsList.push('');
        }
    }

    function formatSubsList() {
        let sub = "";
        if (subsList.length === 1) {
            sub = subsList[0];
        } else if (subsList.length === 2) {
            sub = subsList.join(' , ');
        } else if (subsList.length >= 2) {
            sub = subsList.slice(0, -1).join(', ') + ', and ' + subsList.slice(-1);
        }
        return sub = sub.length > 33 ? sub.substring(0, 30) + '...' : sub;
    }

    return (
        <div className="pp_square">
            <div className="pp_item profile ss_card">
                <div className="pp_image_content">
                    <a href="" title={name}>
                        <div className="profile_image">
                            <img className="image" src={profileUrl} alt="{name}"/>
                        </div>
                    </a>
                </div>
                <div className="pp_meta">
                    <p className="name">
                        <a href="">{name}</a>
                    </p>
                    <p className="sub">
                        {formatSubsList()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Person;
