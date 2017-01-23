import React from 'react';

const Hotlink = ({ url, id, deleteLink }) =>
	<li><a className="hotlink" href={url}>{url}</a><button onClick={deleteLink}>X</button></li>;

export default Hotlink;