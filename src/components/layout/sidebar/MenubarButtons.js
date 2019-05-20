import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../../../styles/utils';
import { ThemeColors } from '../../../styles/elements';

export default function MenubarButton(props) {
	const { click } = props;
	return (
		<MenubarContainer onClick={click}>
			<MenubarLine />
			<MenubarLine />
			<MenubarLine />
		</MenubarContainer>
	);
}

const MenubarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 30px;
	width: 25px;
	cursor: pointer;

	${minWidth.medium`
    display: none
  `}
`;

const MenubarLine = styled.div`
	height: 4px;
	width: 100%;
	background-color: ${ThemeColors.white};
`;
