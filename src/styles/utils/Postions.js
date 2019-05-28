import { css } from 'styled-components';

export const fixed = ({
  x = 0,
  y = 0,
  xPos = 'left',
  yPos = 'top'
} = {}) => css`
  position: fixed;
  ${yPos}: ${y};
  ${xPos}: ${x};
`;

export const absolute = ({
  x = 0,
  y = 0,
  xPos = 'left',
  yPos = 'top'
} = {}) => css`
  position: absolute;
  ${yPos}: ${y};
  ${xPos}: ${x};
`;
