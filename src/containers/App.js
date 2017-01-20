import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import HotlinkList from '../components/HotlinkList';
import HotlinkForm from '../components/HotLinkForm';
import { getHotlinks, postHotlink } from '../store/actions'
// require('../scss/style.scss');

class App extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getHotlinks());
	}

	saveLink(hotlink) {
		const { dispatch } = this.props;
		
		if (hotlink !== '') {
			dispatch(postHotlink(hotlink));
		}
	}

	render(){
		return(
			<div>
				<h1>Hotlinks</h1>
				<HotlinkForm onLinkSubmit={this.saveLink.bind(this)} />
				<HotlinkList data={this.props.hotlinks} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps)(App)