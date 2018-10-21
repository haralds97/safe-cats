import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './TwoButtons.css';

const TwoButtons = () => {
	return(
		<div className="f3">
			<p> two buttons will be near </p>
			<div className="two-buttons">
				<Tilt className="Tilt br2 shadow-2 gradient ma2 pointer" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
					 <div className="Tilt-inner pa3 ma3"> 
					 	<img alt='left-button' src=""/>
					 </div>
				</Tilt>
				<Tilt className="Tilt br2 shadow-2 gradient ma2 pointer" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
					 <div className="Tilt-inner pa3 ma3"> 
					 	<img alt='right-button' src=""/>
					 </div>
				</Tilt>
			</div>
		</div>
	);
}

export default TwoButtons;