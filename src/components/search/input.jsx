import React from 'react';
import { string, func } from 'prop-types';
import styles from './input.module.css';

export const Input = ({ value, handleChange }) => (
    <input 
      type="text" 
      value={value} 
      onChange={handleChange} 
      className={styles.inputText}
      placeholder="What are you looking for?"
    />
);

Input.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};
