import React, { Component } from 'react'

export class MovieTitle extends Component {
    render() {
        return (
          <div className='title'>
            <p>Title:{this.props.thisMovie.title}</p>
          </div>
        );
    }
}

export default MovieTitle
