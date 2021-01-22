import React from 'react';
import Post from '../post/post';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';


const ListBlock = styled.div`
display: flex;
flex-direction: column;
padding: 10px 180px;
border-radius:7px;
`;


const PostsList = ({ users, posts, searchLine }) => {

	for (let i = 0; i < users.length; i++) {
		posts.reduce((prev, el) => {
			if (el.userId === users[i].id) {
				return el.author = `${users[i].name} (${users[i].username})`
			}
			return null
		}, [-1])
	}

	const view = users && posts
		? posts.filter(item => item.body.indexOf(searchLine) > -1).map(el => <Post key={el.id} el={el} />)
		: <Spinner />

	return (
		<>
			<ListBlock>
				{view}
			</ListBlock>
		</>
	)
}

export default PostsList;