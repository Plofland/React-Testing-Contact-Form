import React from 'react';
import ContactForm from './ContactForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('inputs are valid and app renders without errors', () => {
  //!Arrange
  render(<ContactForm />);

  //!Act
  //1. Get the input fields

  const firstNameInput = screen.getByLabelText(/first name/i);
  // console.log(firstNameInput);

  const lastNameInput = screen.getByLabelText(/last name/i);
  // console.log(lastNameInput);

  const emailInput = screen.getByLabelText(/email/i);
  //2. Type values into the input fields
  userEvent.type(firstNameInput, 'Pal');
  userEvent.type(lastNameInput, 'Bond');
  userEvent.type(emailInput, 'something@gmail.com');

  //3. Push the Submit button
  const submitInput = screen.getByTestId(/submit/i);
  //inputs dont have a role
  //but inputs with the type of submit(type="submit"), then it counts as a button
  userEvent.click(submitInput);

  //!Assert
  //Checks to make sure that the pre runs. If true, then all inputs are valid
  const preRender = screen.findByLabelText(/data-display/i);
  expect(preRender).toBeTruthy();
});
