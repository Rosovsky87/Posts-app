import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 0px 180px;
`;

const Input = styled.input`
margin: 15px;
border-radius:7px;
border: 3px solid PowderBlue;
:focus {
	border: 3px solid SkyBlue
};
outline: none;
`;


const SearchPanel = ({ onUpdateSearchNew }) => {

	const onUpdateSearch = (e) => {
		const newSearchLine = e.target.value;
		onUpdateSearchNew(newSearchLine)
	}

	return (
		<Wrapper>
			<Input
				type='text'
				placeholder='поиск сообщений'
				onChange={onUpdateSearch}
			/>
		</Wrapper>
	)
}

export default SearchPanel;