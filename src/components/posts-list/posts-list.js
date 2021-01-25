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


const PostsList = ({ usersMap, posts }) => {

	if (!usersMap || !posts) {
		return (
			<ListBlock>
				<Spinner />
			</ListBlock>
		);
	}

	return (
		<ListBlock>
			{
				posts.map(post => {
					return (
						<Post key={post.id} post={post} user={usersMap.get(post.userId)} />
					)
				})
			}
		</ListBlock>
	)
}


export default PostsList;