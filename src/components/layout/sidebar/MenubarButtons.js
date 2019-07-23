import React from 'react';
import styled from 'styled-components';
import { minWidth } from '../../../styles/utils';
import { ThemeColors, Notification } from '../../../styles/elements';

export default function MenubarButton(props) {
	const { click, notification } = props;
	return (
		<MenubarContainer onClick={click}>
			{notification.map((item, index) =>
				item.value && item.value.length > 0 ? (
					<Notification key={index}>{item.value.length}</Notification>
				) : null
			)}
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
	position: relative;

	${minWidth.medium`
    display: none
  `}
`;

const MenubarLine = styled.div`
	height: 4px;
	width: 100%;
	background-color: ${ThemeColors.white};
`;
