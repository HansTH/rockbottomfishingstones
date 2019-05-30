import React, { Component } from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';
import Scroll from '../global/Scroll';
import {
  RegularButton,
  ThemeColors,
  NavLinkButton
} from '../../styles/elements';
import { maxWidth, fixed, absolute } from '../../styles/utils';
import navbarLogo from '../../assets/navbar-logo.png';
import MenubarButton from './sidebar/MenubarButtons';
import { HomeIcon, ShoppingIcon } from '../../assets/svg';

export default class Navbar extends Component {
  state = {
    hasScrolled: false,
    navBarFixed: this.props.navBarFixed
  };

  componentDidMount() {
    if (!this.state.navBarFixed) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (!this.state.navBarFixed) {
      window.removeEventListener('scroll', this.handleScroll);
    }
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

  render() {
    const { toogleSidebarOpen, navLinks } = this.props;
    const { hasScrolled, navBarFixed } = this.state;
    return (
      <NavbarContainer
        id='navbar'
        hasScrolled={hasScrolled}
        navBarFixed={navBarFixed}>
        <NavbarWrapper>
          <NavbarBrand>
            <NavbarLogo src={navbarLogo} alt='logo' />
            <Scroll type='id' element='showcase'>
              <NavbarTitle hasScrolled={hasScrolled}>
                rockbottom<span>fishingstones</span>.com
              </NavbarTitle>
            </Scroll>
          </NavbarBrand>
          <NavbarLinks>
            <Scrollspy
              items={navLinks.map(link => link.id)}
              currentClassName='isActive'>
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <Scroll type='id' element={navLink.id} offset={1}>
                    <RegularButton centerText to='/'>
                      {navLink.title}
                    </RegularButton>
                  </Scroll>
                </li>
              ))}
              <li>
                {!navBarFixed ? (
                  <NavLinkButton activeClassName='isActiv' to='/order'>
                    <ShoppingIcon />
                  </NavLinkButton>
                ) : (
                  <NavLinkButton activeClassName='isActiv' to='/'>
                    <HomeIcon />
                  </NavLinkButton>
                )}
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
  ${fixed()};
  width: 100%;
  background-color: ${({ navBarFixed, hasScrolled }) =>
    !navBarFixed
      ? hasScrolled
        ? 'rgba(51, 51, 51, 0.98)'
        : 'rgba(0, 0, 0, 0)'
      : 'rgba(51, 51, 51, 0.98)'};
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
`;

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLogo = styled.img`
  padding-right: 0.5rem;
  height: 46px;

  ${maxWidth.small`
	padding-right: 0.2rem;
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
