import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class ArtistDetails extends Component {
	componentWillMount() {
		this.props.findArtist(this.props.params.id)
	}

	onDeleteClick() {
		this.props.deleteArtist(this.props.params.id);
	}

	render() {
		if(!this.props.artist) { return <div><strong>Todo:</strong> implement "FindArtist" query</div> }
			const { artist: {name, age, genre, image, yearsActive, netWorth, labelName, _id}} = this.props;
		return (
			<div>
				<div className="spacer">
					<Link to="/">Back</Link>
					<Link to={`/artists/${_id}/edit`}>Edit</Link>
					<a onClick={this.onDeleteClick.bind(this)}>Delete</a>
				</div>
				<ul className="collection artist-detail">
					<li className="collection-item header">
						<div>
							<h3>{name}</h3>
							<h5>Master of {genre}</h5>
						</div>
						<image src={image} className="right" />
					</li>
					<li className="collection-item">
						<h5>{yearsActive}</h5>
						<p><i>Years Active</i></p>
					</li>
					<li className="collection-item">
            <h5>{age}</h5>
            <p><i>Years Old</i></p>
          </li>
          <li className="collection-item">
            <h5>${netWorth}</h5>
            <p><i>Net Worth</i></p>
          </li>
					<li className="collection-item">
						<h5>{labelName}</h5>
						<p><i>Label</i></p>
					</li>
				</ul>
			</div>

				
		);
	}
};

const mapStateToProps = ({artists}) => {
	return {artist: artists.artist};
}

export default connect(mapStateToProps, actions)(ArtistDetails);