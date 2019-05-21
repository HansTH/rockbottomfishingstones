import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';

export class Modal extends Component {
  render() {
    return (
      <ModalContainer isOpen={this.props.isModalOpen}>
        <ModalHeader>
          {this.props.response.status === 200 ? (
            <h3>Email is verzonden</h3>
          ) : (
            <div>
              <h3>Email niet verzonden</h3>
              <p>{this.props.response.text}</p>
            </div>
          )}
        </ModalHeader>
      </ModalContainer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 100px;
  top: 50%;
  left: calc(50% - 100px);
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${ThemeColors.black};
  opacity: 0.9;
  color: #eee;
  border-radius: 5px;
  z-index: 200;
  /* margin: auto; */
  /* transform: translateX(20%); */
`;

const ModalHeader = styled.div`
  text-align: center;
`;
