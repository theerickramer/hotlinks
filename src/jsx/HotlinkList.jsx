import React from 'react';
import Hotlink from './Hotlink.jsx';

export default class HotlinkList extends React.Component {
	render() {
		var hotlinks = this.props.data.map((data) => {
	    		return(
	    			<Hotlink key={data._id} url={data.hotlink} />
    			)
	    	});
		return (
			<ul className="hotlinksList">
				{hotlinks}
			</ul>
		)
	}
}