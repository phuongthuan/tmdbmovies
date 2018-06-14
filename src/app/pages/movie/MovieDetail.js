import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        console.log(this.props.match);
        return (
            <div>
                <h2 className="title">Movie Detail Component</h2>
            </div>
        );
    }
}

export default MovieDetail;