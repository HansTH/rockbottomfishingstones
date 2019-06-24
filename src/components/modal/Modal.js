import React from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';
import { fixed } from '../../styles/utils';

export default function Modal(props) {
	const { isModalOpen, response, message, info } = props;
	return (
		<ModalContainer isOpen={isModalOpen}>
			<ModalHeader>
				{response.status === 200 ? (
					<>
						<h3>{message}</h3>
						<p>{info}</p>
					</>
				) : (
					<>
						<h3>Email niet verzonden</h3>
						<p>{response.text}</p>
					</>
				)}
			</ModalHeader>
		</ModalContainer>
	);
}

const ModalContainer = styled.div`
	${fixed({ y: '50%' })};
	left: calc(50% - 100px);
	width: 250px;

	display: ${props => (props.isOpen ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	padding: 1rem;
	background-color: ${ThemeColors.black};
	opacity: 0.9;
	color: #eee;
	border-radius: 5px;
	z-index: 200;
`;

const ModalHeader = styled.div`
	text-align: center;
`;
