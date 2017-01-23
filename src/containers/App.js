import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import HotlinkList from '../components/HotlinkList';
import HotlinkForm from '../components/HotLinkForm';
import { getHotlinks, postHotlink, deleteHotlink } from '../store/actions'
// require('../scss/style.scss');

class App extends Component {
	constructor(props) {
		super(props)
		this.dispatch = props.dispatch;
		
	}

	componentDidMount() {
		this.dispatch(getHotlinks());
	}

	saveLink(hotlink) {
		if (hotlink !== '') {
			this.dispatch(postHotlink(hotlink));
		}
	}

	deleteLink(id, hotlink) {
		this.dispatch(deleteHotlink(id, hotlink));
	}

	render(){
		return(
			<div>
				<h1>Hotlinks</h1>
				<HotlinkForm onLinkSubmit={this.saveLink.bind(this)} />
				<HotlinkList onLinkDelete={this.deleteLink.bind(this)} data={this.props.hotlinks} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps)(App)