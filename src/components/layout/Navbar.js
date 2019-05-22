import React, { Component } from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';
import Scroll from '../global/Scroll';
import {
	RegularButton,
	ThemeColors,
	NavLinkButton
} from '../../styles/elements';
import { maxWidth } from '../../styles/utils';
import navbarLogo from '../../assets/navbar-logo.png';
import MenubarButton from './sidebar/MenubarButtons';

export default class Navbar extends Component {
	state = {
		hasScrolled: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = e => {
		e.preventDefault();
		const scrollTop = window.pageYOffset;
		if (scrollTop < 10 && !this.props.sideBarOpen) {
			this.setState({ hasScrolled: false });
		} else {
			this.setState({ hasScrolled: true });
		}
	};

	navTo = to => {
		console.log(to);
	};

	render() {
		const { toogleSidebarOpen } = this.props;
		return (
			<NavbarContainer id='navbar' hasScrolled={this.state.hasScrolled}>
				<NavbarWrapper>
					<NavbarBrand>
						<NavbarLogo src={navbarLogo} alt='logo' />
						<Scroll type='id' element='showcase'>
							<NavbarTitle hasScrolled={this.state.hasScrolled}>
								rockbottom<span>fishingstones</span>.com
							</NavbarTitle>
						</Scroll>
					</NavbarBrand>
					<NavbarLinks>
						<Scrollspy
							items={['about', 'product', 'who', 'contact']}
							currentClassName='isActive'
						>
							<li>
								<Scroll type='id' element='about'>
									<RegularButton to='/'>Wat we doen</RegularButton>
								</Scroll>
							</li>
							<li>
								<Scroll type='id' element='product'>
									<RegularButton to='/'>Product</RegularButton>
								</Scroll>
							</li>
							<li>
								<Scroll type='id' element='who'>
									<RegularButton to='/'>Wie we zijn</RegularButton>
								</Scroll>
							</li>
							<li>
								<Scroll type='id' element='contact' offset={1}>
									<RegularButton to='/#contact'>Contact</RegularButton>
								</Scroll>
							</li>
							<li>
								<NavLinkButton activeClassName='isActive' to='/order'>
									Bestellen
								</NavLinkButton>
							</li>
						</Scrollspy>
					</NavbarLinks>
					<MenubarButton click={toogleSidebarOpen} />
				</NavbarWrapper>
			</NavbarContainer>
		);
	}
}

const NavbarContainer = styled.nav`
	position: fixed;
	width: 100%;
	background-color: ${props =>
		props.hasScrolled ? 'rgba(51, 51, 51, 0.98)' : 'rgba(0, 0, 0, 0)'};
	color: ${ThemeColors.white};
	z-index: 100;
	padding: 1rem;

	${maxWidth.medium`
		background-color: ${props =>
			props.hasScrolled ? 'rgba(51, 51, 51, 0.98)' : 'rgba(51, 51, 51, 0.98)'};
	`}
`;

const NavbarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1140px;
	margin: 0 auto;
	padding: 0 1rem;
`;

const NavbarBrand = styled.div`
	display: flex;
	align-items: center;
`;

const NavbarLogo = styled.img`
	padding-right: 0.5rem;
	height: 46px;

	${maxWidth.small`
    height: 20px;
  `}
`;

const NavbarTitle = styled.a`
	color: ${ThemeColors.white};
	font-size: 1.5rem;
	cursor: pointer;
	font-weight: 600;

	span {
		color: ${ThemeColors.green};
	}

	${maxWidth.small`
    font-size: 1rem;
  `}
`;

const NavbarLinks = styled.div`
	display: flex;
	align-items: center;

	ul {
		display: flex;
	}

	a {
		margin: 0 0.25rem;
	}

	${maxWidth.medium`
    display: none;
  `}

	.isActive, .isActive a {
		background-color: ${ThemeColors.green};
		color: ${ThemeColors.white};
		border-radius: 5px;
	}
`;
