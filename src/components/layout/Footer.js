import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Scroll from '../global/Scroll';
import { ThemeColors } from '../../styles/elements';

export default function Footer() {
  return (
    <FooterContainer id='footer'>
      <>
        <Scroll type='id' element='showcase'>
          <FooterTitle to='/'>
            rockbottom<span>fishingstones</span>.com
          </FooterTitle>
        </Scroll>
      </>
      <>
        <FooterLink href='http://www.hansterhorst.com/'>
          Website gemaakt door hansterhorst.com • {new Date().getFullYear()}{' '}
        </FooterLink>
      </>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ThemeColors.black};
  padding: 1rem;
`;

const FooterTitle = styled(Link)`
  font-size: 1.5rem;
  color: ${ThemeColors.white};
  span {
    color: ${ThemeColors.green};
  }
`;

const FooterLink = styled.a`
  color: ${ThemeColors.white};
  font-size: 0.75rem;
`;
