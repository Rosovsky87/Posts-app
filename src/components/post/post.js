import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
background-color:MistyRose;
margin: 15px;
border-radius:7px;
`;

const Author = styled.div`
margin: 7px;
border-radius:7px;
`;

const Title = styled.div`
display: inline-block;
font-style: italic;
margin: 7px;
background-color: PowderBlue;
border-radius:5px;
`;

const Body = styled.div`
vertical-align: top;
margin: 7px;
border-radius:5px;
background-color: SkyBlue;
`;


const Post = ({ post, user }) => {

	const { title, body, id } = post;
	const { name, username } = user;

	return (
		<Wrapper>
			<Author>сообщение № {id} от {`${name} (${username})`}</Author>
			<Title>{title}</Title>
			<Body>{body}</Body>
		</Wrapper>
	)
}


export default Post