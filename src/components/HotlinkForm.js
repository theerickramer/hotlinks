import React from 'react';

export default class HotlinkForm extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		this.props.onLinkSubmit(this.refs.hotlink.value);
		this.refs.hotlink.value ='';
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" name="href" placeholder="http://hotlinks.com" ref="hotlink" />
				<button>Save</button>
			</form>
		)
	}
}

