import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		const { user } = this.props.auth;
		return (
			<aside>
				<ul id="slide-out" className="sidenav sidenav-fixed">
					<li>
						<div className="user-view">
							<div className="background">
								<img src={process.env.PUBLIC_URL + '/images/office.jpg'} />
							</div>
							<a href="#user">
								<img className="circle" src={process.env.PUBLIC_URL + 'images/yuna.jpg'} />
							</a>
							<a href="#name">
								<span className="white-text name">{user.name}</span>
							</a>
						</div>
					</li>
					<li>
						<a href="#!">
							<i className="material-icons">cloud</i>First Link With Icon
						</a>
					</li>
					<li>
						<a href="#!">Second Link</a>
					</li>
					<li>
						<div className="divider" />
					</li>
					<li>
						<a className="subheader">Subheader</a>
					</li>
					<li>
						<a className="waves-effect" href="#!">
							Third Link With Waves
						</a>
					</li>
				</ul>
				<a href="#" data-target="slide-out" className="sidenav-trigger">
					<i className="material-icons">menu</i>
				</a>
			</aside>
		);
	}
}

export default Sidebar;
