import React, { Component } from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';
import Scroll from './global/Scroll';
import { RegularButton, ThemeColors } from '../styles/elements';
import { maxWidth } from '../styles/utils';
import navbarLogo from '../assets/navbar-logo.png';
import MenubarButton from './sidebar/MenubarButtons';

export default class Navbar extends Component {
  state = {
    hasScrolled: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    e.preventDefault();
    const scrollTop = window.pageYOffset;
    if (scrollTop < 50 && !this.props.sideBarOpen) {
      this.setState({ hasScrolled: false });
    } else {
      this.setState({ hasScrolled: true });
    }
  };

  render() {
    const { toogleSidebarOpen } = this.props;
    return (
      <NavbarContainer id='navbar' hasScrolled={this.state.hasScrolled}>
        <NavbarWrapper>
          <NavbarBrand>
            <NavbarLogo src={navbarLogo} alt='logo' />
            <Scroll type='id' element='showcase'>
              <NavbarTitle href='#showcase'>
                rockbottom<span>fishingstones</span>.com
              </NavbarTitle>
            </Scroll>
          </NavbarBrand>
          <NavbarLinks>
            <Scrollspy
              items={['about', 'product', 'who', 'contact']}
              currentClassName='isActive'>
              <li>
                <Scroll type='id' element='about'>
                  <RegularButton href='#about'>Wat we doen</RegularButton>
                </Scroll>
              </li>
              <li>
                <Scroll type='id' element='product'>
                  <RegularButton href='#product'>Product</RegularButton>
                </Scroll>
              </li>
              <li>
                <Scroll type='id' element='who'>
                  <RegularButton href='#who'>Wie we zijn</RegularButton>
                </Scroll>
              </li>
              <li>
                <Scroll type='id' element='contact'>
                  <RegularButton href='#contact'>Contact</RegularButton>
                </Scroll>
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
  top: ${props => (props.hasScrolled ? '0px' : '-80px')};
  left: 0;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.98);
  color: ${ThemeColors.white};
  z-index: 100;
  padding: 1rem;
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

  .isActive a {
    background-color: ${ThemeColors.green};
    color: ${ThemeColors.white};
  }
`;

// const Menu = styled.div`
//   display: none;
//   flex-direction: column;
//   align-items: center;
//   margin: auto 0;
//   width: 44px;
//   cursor: pointer;

//   ${maxWidth.medium`
//     display: flex;
//   `}
// `;

// const Menubar = styled.div`
//   width: 30px;
//   height: 4px;
//   background-color: #7ab436;
//   border-radius: 2px;
//   margin: 3px 0;
// `;
