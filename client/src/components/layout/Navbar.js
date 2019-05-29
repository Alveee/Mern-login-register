import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
	render() {
		return (
			<div className="navbar-fixed">
				<nav className="z-depth-0">
					<div className="nav-wrapper">
						<Link
							to="/"
							style={{ fontFamily: 'monospace' }}
							className="col s5 brand-logo center black-text">
							<i className="material-icons">code</i>
							Blog
						</Link>
						<ul className="right hide-on-med-and-down">
							<li>
								<a className="dropdown-trigger" href="#!" data-target="dropdown1">
									Dropdown<i className="material-icons right">arrow_drop_down</i>
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<ul id="dropdown1" className="dropdown-content">
					<li>
						<a href="#!">Profile</a>
					</li>
					<li className="divider" />
					<li>
						<a href="#!">Logout</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
