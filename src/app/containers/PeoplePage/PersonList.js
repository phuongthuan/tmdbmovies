import React from 'react';
import Person from './Person.js';
import Pagination from "../../components/Pagination/Pagination";

const PersonList = (props) => {
    const persons = props.personsList.results;
    return (
        <div className="ss_results">
            {persons.map(person => (<Person person={person} key={person.id} />) )}
            <Pagination
                routeProps={props.routeProps}
                prevPaginate={props.prevPaginate}
                nextPaginate={props.nextPaginate}
                dataPaginate={props.personsList} />
        </div>
    );
};

export default PersonList;
