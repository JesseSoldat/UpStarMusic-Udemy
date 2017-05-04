import React from 'react';

const Home = ({children}) => {
	return (
		<div className='container'>
			Router
			{children}
		</div>
	);
};

export default Home;