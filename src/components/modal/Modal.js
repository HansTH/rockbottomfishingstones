import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';

export class Modal extends Component {
  render() {
    return (
      <ModalContainer isOpen={this.props.isModalOpen}>
        <div className='ModalHeader'>
          {this.props.response.status === 200 ? (
            <h1>Email is verzonden</h1>
          ) : (
            <div>
              <h1>Email niet verzonden</h1>
              <p>{this.props.response.text}</p>
            </div>
          )}
        </div>
      </ModalContainer>
    );
  }
}

const ModalContainer = styled.div`
  position: absolute;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${ThemeColors.green};
  color: #eee;
  border-radius: 5px;
  z-index: 200;
  margin: 10% 25%;
`;
