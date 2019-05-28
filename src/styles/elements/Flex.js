import styled from 'styled-components';
import { maxWidth } from '../utils';

export const Direction = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  ${maxWidth.small`
    flex-direction: column
    align-items: flex-start;
  `}
`;

export const Gab = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
