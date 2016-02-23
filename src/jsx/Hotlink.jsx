import React from 'react';

const Hotlink = (props) =>
	<li><a className="hotlink" href={props.url}>{props.url}</a></li>;

export default Hotlink;