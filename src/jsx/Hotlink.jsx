import React from 'react';

const Hotlink = (props) =>
	<li><a key={props.key} className="hotlink" href={props.url}>{props.url}</a></li>;

export default Hotlink;