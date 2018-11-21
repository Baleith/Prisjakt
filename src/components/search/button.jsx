import React from 'react'
import { func } from 'prop-types'

export const Button = ({ handleSubmit }) => (
  <button
    onClick={handleSubmit}
    type="submit" 
    value="Submit"
  >
    Search
  </button>
)

Button.propTypes = {
  handleSubmit: func.isRequired,
};

