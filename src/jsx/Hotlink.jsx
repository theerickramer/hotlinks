import React from 'react';

const Hotlink = (props) =>
	<li><a key={props._id} className="hotlink" href={props.url}>{props.url}</a></li>;

export default Hotlink;