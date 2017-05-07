import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Range} from '../filters';
import * as actions from '../../actions';

const TEXT_FIELDS = [
	{ label: 'Name', prop: 'name'}
];

class ArtistFilter extends Component {
	componentWillMount() {
		if(this.props.filters) {
			this.props.searchArtists({
				name: '',
				...this.props.filters
			});
		} else {
			this.props.searchArtists({
				name: '', 
				sort: 'name'
			});
		}
	}

	componentDidMount() {
	
	}

	render() {
		return (
			<div className="card blue-grey darken-1 row">
				<div className="card-content white-text">
					<form>
						<div className="center-align card-title">
							Search
						</div>

						<div className="input-field">
							<Field id="age" label="Age" 
							  type="text" name="age" component={Range} 
								range={this.props.ageRange}
							/>
						</div>

						<div className="input-field">
							<Field id="years-active" label="Years Active"
								type="text" name="yearsActive" component={Range}
								range={this.props.yearsActive}
							/>
						</div>
						
						<div>
							<label className="select" htmlFor="sort">Sort By</label>
							<Field id="sort" name="sort" component="select">
								<option value="name">Name</option>
								<option value="age">Age</option>
								<option value="albums">Albums Released</option>
							</Field>
						</div>

						<div className="center-align">
							<button className="btn">Submit</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	const {filterCriteria} = state;

	return {
    yearsActive: filterCriteria.yearsActive,
		ageRange: filterCriteria.age,
		filters: state.form.filters && state.form.filters.values

	}
}

export default connect(mapStateToProps, actions)(reduxForm({
	destroyOnUnmount: false,
	form: 'filters',
	initialValues: {sort: 'name'}
	})(ArtistFilter));

