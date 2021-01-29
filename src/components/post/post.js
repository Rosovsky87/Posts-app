import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
background-color:MistyRose;
margin: 15px;
border-radius:7px;
padding: 15px;
font-size: 1.55rem;
font-family: BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
background: linear-gradient(90deg,#ff8a00,#e52e71);
`;

const Author = styled.div`
font-size: 1.15rem;
margin: 7px;
border-radius:7px;
`;

const Title = styled.div`
color: white;
font-size: 1.15rem;
display: inline-block;
font-style: italic;
margin: 7px;
border-radius:5px;
`;

const Body = styled.div`
font-size: 1.55rem;
font-weight: bold;
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