import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
	render() {
		return (
			<div className='row'>
				<nav>
					<div className='nav-wrapper'>
						<div className='col s12'>
							<a href="#" className='brand-logo'>UpStar Music</a>
							<ul id="nav-mobile" className='right hide-on-med-and-down'>
								<li>
									<Link>Random Artist</Link>
								</li>
								<li>
									<Link to={'/artists/new'}>Create Artist</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
};

export default Header;