import React from 'react';
import styled from 'styled-components';
import { fixed } from '../../styles/utils';

export default function Overlay() {
  return <Overlay isOpen={props.isOpen} onClick={props.toogleOpen} />;
}

const Overlay = styled.div`
  ${fixed()};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;
