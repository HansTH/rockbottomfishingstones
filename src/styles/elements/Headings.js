import styled from 'styled-components';
import { maxWidth, minWidth } from '../utils';

export const H1 = styled.h1`
  color: ${({ color }) => color};
  font-size: 2.5rem;
  margin: ${({ withMargin }) => (withMargin ? '0.5rem 0' : '')};
  text-align: ${({ centerText }) => (centerText ? 'center' : 'left')};

  ${maxWidth.small`
    padding-top: 1rem
    font-size: 1.75rem
  `}
`;

export const H2 = styled(H1)`
  font-size: 2rem;
  margin: 0.5rem 0;
`;

export const H3 = styled(H1)`
  font-size: 1.5rem;

  ${maxWidth.small`
    font-size: 1.1rem
  `}
`;

export const P = styled.p`
  color: ${({ color }) => color};
  padding: 0.75rem 0;
  line-height: 1.4;

  ${maxWidth.small`
    font-size: 1rem
  `}
`;
