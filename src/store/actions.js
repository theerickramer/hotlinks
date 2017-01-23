import fetch from 'isomorphic-fetch';
export const REQUEST_HOTLINKS = 'REQUEST_HOTLINKS';
export const RECEIVE_HOTLINKS = 'RECEIVE_HOTLINKS';
export const ADD_HOTLINK = 'ADD_HOTLINK';
export const REMOVE_HOTLINK = 'REMOVE_HOTLINK';

export function requestHotlinks() {
	return {
		type: REQUEST_HOTLINKS
	}
}

export function receiveHotlinks(json) {
	return {
		type: RECEIVE_HOTLINKS,
		hotlinks: json
	}
}

export function addHotlink(hotlink) {
	return {
		type: ADD_HOTLINK,
		hotlink: hotlink
	}
}

export function removeHotlink(hotlink) {
	return {
		type: REMOVE_HOTLINK,
		hotlink: hotlink
	}
}

export function getHotlinks() {
	return dispatch => {
		dispatch(requestHotlinks());
		return fetch('http://localhost:8000/hotlinks')
			.then(response => response.json())
			.then(json => dispatch(receiveHotlinks(json)))
			.catch(error => console.error(error))
	}
}

export function postHotlink(hotlink) {
	return dispatch => {
		dispatch(addHotlink(hotlink))
		return fetch('http://localhost:8000/hotlinks', {
			method: 'POST',
			body: JSON.stringify({ hotlink: hotlink }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.catch(error => console.error(error))
			.then(() => { dispatch(getHotlinks()) })
	}
}

export function deleteHotlink(id, hotlink) {
	return dispatch => {
		dispatch(removeHotlink(hotlink))
		return fetch('http://localhost:8000/hotlinks', {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.catch(error => console.error(error))
			.then(() => { dispatch(getHotlinks()) })
	}
}
