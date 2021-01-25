import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.h1`
color: red;
margin: 150px;
`;


const Error = () => {
	return (
		<ErrorMessage>Произошла ошибка,пожалуйста обновите страницу!</ErrorMessage>
	)
}

export default Error;