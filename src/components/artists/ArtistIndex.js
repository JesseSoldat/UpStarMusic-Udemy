import _ from 'lodash';
import React, {Component} from 'React';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class ArtistIndex extends Component {
	renderList(artist) {
		return (
			<li className={classes} key={_id}>
				<div>
					<input id={_id} type="checkbox"/>
					<label htmlFor={_id} />
				</div>
				<img src={artist.image} className="circle" />
				<div>
					<span className="title">
						<strong>{artist.name}</strong>
					</span>
					<p>
						<b>{artist.age}</b> years old
						<br/>
						{artist.albums ? artist.albums.length : 0} albums released
					</p>
				</div>
				<Link to={`artist/${artist._id}`} className="secondary-content">
					<i className="material-icons">play_arrow</i>
				</Link>
			</li>
		);
	}

	renderEmptyCollection() {
		if(this.props.artists.all.length) {return;}

		return (
			<div className="center-align">
				<h5>No records found!</h5>
				<div>Try searching again</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				<ul className="collection">
					{this.props.artists.all.map(this.renderList.bind(this))}
					{this.renderEmptyCollection()}
				</ul>
			</div>
		);
	}
};

const mapStateToProps = ({artists, selection}) => ({artists, selection});

export default connect(mapStateToProps, actions)(ArtistIndex);

