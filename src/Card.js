import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='card-wrapper'>
                <h1 className='card-heading'>
                    {this.props.heading}
                </h1>

                <div className='card-body'>
                    {this.props.body}
                </div>
            </div>
        )
    }
}


export default Card;