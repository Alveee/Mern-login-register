import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './../layout/Navbar';
import Sidebar from './../layout/Sidebar';
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			auth.isAuthenticated === true ? (
				<React.Fragment>
					<header>
						<Navbar {...props} />
					</header>
					<div id="main">
						<div className="wrapper">
							<Sidebar auth={auth} />
							<Component {...props} />
						</div>
					</div>
				</React.Fragment>
			) : (
				<Redirect to="/login" />
			)}
	/>
);

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
