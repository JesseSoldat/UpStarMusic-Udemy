import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class ArtistEdit extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	componentWillMount() {
		this.props.findArtist(this.props.params.id);
	}

	componentWillReceiveProps({artist}) {
		if(artist) {
			const {name, age, yearsActive, genre} = artist;

			this.setState({name, age, yearsActive, genre});
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps.params.id !== this.props.params.id) {
			this.props.findArtist(nextProps.params.id);
		}
	}

	onSubmit(event) {
		console.log(event);
		event.preventDefault();
		this.props.editArtist(this.props.params.id, this.state);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<div className='input-field'>
					<input value={this.state.name}
						onChange={e => this.setState({name: e.target.value})}
						placeholder="Name"
					/>
					<input value={this.state.age}
						onChange={e => this.setState({age: e.target.value})}
						placeholder="Age"
					/>
					<input value={this.state.yearsActive}
						onChange={e => this.setState({yearsActive: e.target.value})}
						placeholder="Years Active"
					/>
					<input value={this.state.genre}
						onChange={e => this.setState({genre: e.target.value})}
						placeholder="Genre"
					/>
				</div>
				<div className="has-error">
				</div>
				<button className="btn">Submit</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.artists.artist
	};
};

export default connect(mapStateToProps, actions)(ArtistEdit);