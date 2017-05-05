import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions';

class ArtistCreate extends Component {
	render() {
		return (
			<form>
				<div className="input-field">
					 <Field name="name" component="input" placeholder="Name" />
				</div>
				<div className="input-field">
					<Field name="age" component="input" placeholder="Age" />
				</div>
				<div className="input-field">
					<Field name="yearsActive" component="input" placeholder="Years Active" />
				</div>
				<div className="input-field">
					<Field name="genre" component="input" placeholder="Genre" />
				</div>
				<div className="has-error">
				</div>
				<button className="btn">Submit</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
}

export default connect(mapStateToProps, actions)(reduxForm({
	form: 'create'
})(ArtistCreate));