import React, {Component} from 'react';
import Slider from 'react-input-range';

class Range extends Component {
	onChange() {
		console.log('changed');
	}

	render() {
		return (
			<div className="range-slider">
				<Slider
					onChange={this.onChange.bind(this)}
					minValue={1}
					maxValue={10}
					value={5}
				/>
			</div>
		);
	}
};

export {Range};