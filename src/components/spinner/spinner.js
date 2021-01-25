import React from 'react';
import styled from 'styled-components';


const Spin = styled.div`

@keyframes blinking {
	0% { opacity: 1 }
	100% { opacity: 0 }
 }
 {
	width: 100px;
	height: 100px;
	background-color: black;
	margin: auto;
	top: 150px;
	position: relative;
	animation: blinking linear 1s infinite;
 };
`;

const Spinner = () => {
	return (
		<Spin />
	)
}

export default Spinner
