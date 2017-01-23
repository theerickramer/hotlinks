import React, { Component } from 'react';
import Hotlink from './Hotlink';

export default class HotlinkList extends Component {
	render() {
		var hotlinks = this.props.data.map((data, index) => {
			return(
				<li key={index}>
					<a className="hotlink" href={data.hotlink}>{data.hotlink}</a>
					<button onClick={() => { this.props.onLinkDelete(data._id, data.hotlink) }}>X</button>
				</li>
			)
		});
		return (
			<ul className="hotlinksList">
				{hotlinks}
			</ul>
		)
	}
}