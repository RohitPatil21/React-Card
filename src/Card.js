import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='card'>
                <img ref="image" src={this.props.imageUrl} className="image" />
                <h2 className='heading'> {this.props.heading} </h2>
                <p className='news'> {this.props.news} </p>
                <p className='game_name'> {this.props.game_name} </p>
            </div>
        )
    }
}


export default Card;