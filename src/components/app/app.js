import React, { useState, useEffect } from 'react';
import PostsList from '../posts-list/posts-list';
import SearchPanel from '../search-panel/search-panel';
import fetchData from '../../data/data';



const App = () => {

	const [usersMap, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);
	const [searchLine, setSearchLine] = useState('');

	useEffect(() => {
		fetchData('users').then(usersArray => {
			const usersMap = new Map();
			for (const user of usersArray) {
				usersMap.set(user.id, user);
			}
			return usersMap;
		}).then(setUsers);

		fetchData('posts').then(setPosts);
	}, []);

	const filteredPosts = posts ?
		posts.filter(({ body }) => body.match(searchLine)) :
		null;

	return (
		<>
			<SearchPanel
				onUpdateSearchNew={setSearchLine}
			/>
			<PostsList
				usersMap={usersMap}
				posts={filteredPosts}
			/>
		</>
	);
}

export default App;
