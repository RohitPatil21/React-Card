import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';

class App extends Component {
	constructor() {
		super()

		this.state = {
			image1: "https://sportnewspedia.files.wordpress.com/2022/02/123187883_gettyimages-13694112811.jpg",
			image2 : "https://cdn.ghanasoccernet.com/2022/02/6202efdc6e184.jpg",
			image3 : "https://static.independent.co.uk/2022/02/08/16/newFile-20.jpg?quality=75&width=990&auto=webp&crop=982:726,smart"
		}
	}

	render() {
		return (
			<div className='container'>
				<h2 className='title'>Sport</h2>
				<div className='card-wrapper'>
					<Card imageUrl={this.state.image1} heading={"Rodriguez strike denies Man Utd"} news={"On that occasion, they were denied two goals in the first half, while Nick Pope made some excellent saves to deny."} game_name={"Football"} />

					<Card imageUrl={this.state.image2} heading={"Newcastle beat fellow strugglers Everton "} news={"Heitz added: As one of the most accomplished Swiss athletes of his generation, Xherdan joins us at a very important time for the club."} game_name={"Football"} />

					<Card imageUrl={this.state.image3} heading={"Anderson & Broad left out by England"} news={"Fast bowlers Anderson and Broad have taken a combined 1,177 wickets in Test cricket but were left out of the 16-man squad by a selection panel comprising of interim."} game_name={"Cricket"} />
				</div>
			</div>
		)
	}
}

export default App;