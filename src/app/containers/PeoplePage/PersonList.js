import React from 'react';
import Person from './Person.js';

const PersonList = (props) => {
    const persons = props.personsList.results;
    return (
        <div className="ss_results">
            {persons.map(person => (<Person person={person} key={person.id} />) )}

        </div>
    );
};

export default PersonList;
