import React, { useState, useEffect } from 'react';
import PostsList from '../posts-list/posts-list';
import SearchPanel from '../search-panel/search-panel';


function App() {

	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);
	const [searchLine, setSearchLine] = useState('');

	useEffect(() => {
		const allUsers = () => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => res.json())
				.then(data => setUsers(data));
		}
		allUsers()

		const allPosts = () => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then(res => res.json())
				.then(data => setPosts(data));
		}
		allPosts()
	}, [])

	const onUpdateSearchNew = (newSearchLine) => {
		setSearchLine(newSearchLine)
	}

	return (
		<>
			<SearchPanel
				onUpdateSearchNew={(newSearchLine) => onUpdateSearchNew(newSearchLine)}
			/>
			<PostsList
				users={users}
				posts={posts}
				searchLine={searchLine}
			/>
		</>
	)
}

export default App;
