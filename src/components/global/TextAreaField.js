import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';

export default function TextAreaField(props) {
	const {
		label,
		name,
		cols,
		rows,
		placeholder,
		isRequired,
		onChange,
		value
	} = props;

	return (
		<TextArea>
			<label htmlFor='name'>{label}</label>
			<textarea
				name={name}
				value={value}
				cols={cols}
				rows={rows}
				placeholder={placeholder}
				required={isRequired}
				onChange={onChange}
			/>
		</TextArea>
	);
}

const TextArea = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;

	label {
		color: ${ThemeColors.green};
		font-size: 1.1rem;
	}

	input,
	textarea {
		font-size: 1rem;
		padding: 0.5rem;
		border: none;
		border-radius: 5px;
		outline: none;
	}
`;
