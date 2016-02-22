import React from 'react';

const Hotlink = (props) =>
	<a className="hotlink" href={props.url}>{props.url}</a>;

export default Hotlink;