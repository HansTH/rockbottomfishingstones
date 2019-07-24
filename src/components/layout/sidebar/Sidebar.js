import React from 'react';
import Scroll from '../../global/Scroll';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';
import {
	ThemeColors,
	ShadowColor,
	RegularButton,
	NavLinkButton,
	Notification
} from '../../../styles/elements';
import { minWidth, maxWidth, fixed } from '../../../styles/utils';

export default function Sidebar(props) {
	const { sidebarClose, show, navLinks, navBarFixed, value } = props;
	return (
		<SidebarContainer show={show}>
			<SidebarNavlinks>
				<Scrollspy
					items={['about', 'product', 'who', 'contact']}
					currentClassName='isActive'
				>
					{navLinks.map((navLink, index) => (
						<li key={index} onClick={sidebarClose}>
							<Scroll type='id' element={navLink.id} offset={1}>
								<RegularButton centerText={false} to='/'>
									{navLink.title}
									{navLink.value && navLink.value.length > 0 ? (
										<Notification>{navLink.value.length}</Notification>
									) : null}
								</RegularButton>
							</Scroll>
						</li>
					))}
					<li onClick={sidebarClose}>
						{!navBarFixed ? (
							<NavLinkButton activeClassName='isActiv' to='/order'>
								Bestellen
								{value && value.length > 0 ? (
									<Notification>{value.length}</Notification>
								) : null}
							</NavLinkButton>
						) : (
							<NavLinkButton activeClassName='isActiv' to='/'>
								Terug
							</NavLinkButton>
						)}
					</li>
				</Scrollspy>
			</SidebarNavlinks>
		</SidebarContainer>
	);
}

const SidebarContainer = styled.div`
  ${fixed({ x: '-10px', y: '60px' })};
  height: 100%;
  width: 40%;
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
    width: 55%;
  `}
`;

const SidebarNavlinks = styled.ul`
	padding: 1rem;

	li {
		padding: 0.25rem 0;
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
