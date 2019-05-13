import React from 'react';
import styled from 'styled-components';

export default function Backdrop() {
  return <Backdrop isOpen={props.isOpen} onClick={props.toogleOpen} />;
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;
