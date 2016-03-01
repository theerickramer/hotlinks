import React from 'react';
import ReactDOM from 'react-dom';
import HotlinkList from './HotlinkList.jsx';
import HotlinkForm from './HotLinkForm.jsx';
import $ from 'jquery';
require('../scss/style.scss');

class HotlinksApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {data: []}
	}

	componentDidMount() {
    $.ajax({
    	url: '/hotlinks',
    	type: 'GET',
    	dataType: 'JSON',
    	success: function(response) {
	    	this.setState({ data: JSON.parse(response) });
	    }.bind(this),
	    error: function(){
	    	console.log('fail');
	    }
	  })
	}

	saveLink(hotlink) {
		if (hotlink !== '') {
			$.ajax({
				url: '/hotlinks',
				type: 'POST',
				dataType: 'json',
				data: {hotlink: hotlink},
				success: function(response) {
					console.log(response)
					var hotlinks = this.state.data;
					hotlinks.push({hotlink: hotlink});
					this.setState({data: hotlinks});
				}.bind(this),
				error: function() {
					console.log('Server Error')
				}.bind(this)
			})
		}
	}

	render(){
		return(
			<div>
				<h1>Hotlinks</h1>
				<HotlinkForm onLinkSubmit={this.saveLink.bind(this)} />
				<HotlinkList data={this.state.data} />
			</div>
		);
	}
}

ReactDOM.render(<HotlinksApp/>, document.getElementById('content'))