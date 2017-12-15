import React, { Component } from 'react';

export default class HotlinkForm extends Component {
	handleSubmit(e) {
		e.preventDefault();
		this.props.onLinkSubmit(this.refs.hotlinkInput.value);
		this.refs.hotlinkInput.value ='';
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" name="href" placeholder="http://hotlinks.com" ref="hotlinkInput" />
				<button>+</button>
			</form>
		)
	}
}

