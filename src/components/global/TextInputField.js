import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';
import { maxWidth } from '../../styles/utils';

export default class TextInputField extends Component {
  // state = {
  //   name: ''
  // };

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  render() {
    const {
      label,
      type,
      name,
      placeholder,
      isRequired,
      width,
      onChange,
      value
    } = this.props;
    return (
      <TextInput width={width}>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={isRequired}
          onChange={onChange}
          value={value}
        />
      </TextInput>
    );
  }
}

const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ label }) => (label ? '1rem 0' : '0.5rem 0')};
  width: ${({ width }) => width};

  label {
    color: ${ThemeColors.green};
    font-size: 1.1rem;
    display: ${({ label }) => (label ? 'block' : null)};
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  ${maxWidth.small`
    width: 100%
  `}
`;
