import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ThemeColors } from './ThemeColors';

export const RegularButton = styled.a`
	display: ${({ block }) => (block ? 'block' : 'inline-block')};
	font-weight: ${({ bold }) => (bold ? '900' : '400')};
	color: ${ThemeColors.white};
	border-radius: 5px;
	padding: 0.75rem;
	border: none;
	font-size: 1rem;
	text-align: ${({ centerText }) => (centerText ? 'center' : 'left')};
	background-color: transparent;
	outline: none;

	:hover {
		background-color: ${ThemeColors.green};
	}
`;

export const PrimaryButton = styled(RegularButton)`
	background-color: ${ThemeColors.green};

	:hover {
		background-color: ${ThemeColors.black};
	}
`;

export const DarkButton = styled(RegularButton)`
	background-color: ${ThemeColors.black};
`;

export const BlockButton = styled(RegularButton)`
	display: block;
`;

export const NavLinkButton = styled(NavLink)`
	display: ${({ block }) => (block ? 'block' : 'inline-block')};
	color: ${ThemeColors.white};
	border-radius: 5px;
	padding: 0.5rem;
	border: none;
	font-size: 1rem;
	text-align: center;
	background-color: ${({ color }) => color};
	outline: none;

	:hover {
		background-color: ${ThemeColors.green};
	}
`;
