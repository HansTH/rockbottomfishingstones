import React from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from '../../global/Scroll';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';
import {
	ThemeColors,
	ShadowColor,
	RegularButton
} from '../../../styles/elements';
import { minWidth, maxWidth } from '../../../styles/utils';

export default function Sidebar(props) {
	const { sidebarClose, show } = props;

	return (
		<SidebarContainer show={show}>
			<SidebarNavlinks>
				<Scrollspy
					items={['about', 'product', 'who', 'contact']}
					currentClassName='isActive'
					offset={-100}
				>
					<li onClick={sidebarClose}>
						<Scroll type='id' element='about'>
							<RegularButton href='#about'>Wat we doen</RegularButton>
						</Scroll>
					</li>
					<li onClick={sidebarClose}>
						<Scroll type='id' element='product'>
							<RegularButton href='#product'>Product</RegularButton>
						</Scroll>
					</li>
					<li onClick={sidebarClose}>
						<Scroll type='id' element='who'>
							<RegularButton href='#who'>Wie we zijn</RegularButton>
						</Scroll>
					</li>
					<li onClick={sidebarClose}>
						<Scroll type='id' element='contact'>
							<RegularButton href='#contact'>Contact</RegularButton>
						</Scroll>
					</li>
					<li>
						<NavLink to='/order'>Bestellen</NavLink>
					</li>
				</Scrollspy>
			</SidebarNavlinks>
		</SidebarContainer>
	);
}

const SidebarContainer = styled.div`
  position: fixed;
  height: 100%;
  max-width: 400px;
  width: 50%;
  top: 60px;
  left: -10px;
  z-index: 300;
  box-shadow: ${ShadowColor};
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  ${({ show }) =>
		show &&
		`
    background-color: rgba(51, 51, 51, 0.6);
    transform: translateX(10px);
    backdrop-filter: blur(5px);

  `}

  ${minWidth.medium`
    display: none
  `}

${maxWidth.small`
    width: 50%;
  `}
`;

const SidebarNavlinks = styled.ul`
	padding: 1rem;

	li {
		padding: 1rem 0;
	}

	a {
		color: ${ThemeColors.white};
		padding: 0.75rem;
		margin: 0 0.25rem;
		text-decoration: none;
		border-radius: 5px;
		font-weight: 400;
		text-transform: uppercase;

		${maxWidth.small`
      font-size: 0.95rem;
    `}
	}

	.isActive a {
		background-color: ${ThemeColors.green};
		color: ${ThemeColors.white};
	}
`;
