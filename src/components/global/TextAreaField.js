import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';

export default class TextAreaField extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { label, name, cols, rows, placeholder, isRequired } = this.props;
    return (
      <TextArea>
        <label htmlFor='name'>{label}</label>
        <textarea
          name={name}
          value={this.state.name}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          required={isRequired}
          onChange={this.handleChange}
        />
      </TextArea>
    );
  }
}

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  label {
    color: ${ThemeColors.green};
    font-size: 1.1rem;
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    outline: none;
  }
`;
