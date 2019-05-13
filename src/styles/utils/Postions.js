import { css } from 'styled-components';

export const PostionFixed = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`;
