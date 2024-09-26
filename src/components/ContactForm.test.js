import React from 'react';
import ContactForm from './ContactForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('inputs are valid and app renders without errors', () => {
  //!Arrange
  render(<ContactForm />);

  //!Act
  //1._Get the input fields_

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  //We can bundle up all these inputs into one array and loop over them for the sake of efficiency ⬇
  //const allInputs = [firstNameInput, lastNameInput, emailInput, messageInput]

  //2._Type values into the input fields_
  userEvent.type(firstNameInput, 'Pal');
  userEvent.type(lastNameInput, 'Bond');
  userEvent.type(emailInput, 'something@gmail.com');
  userEvent.type(messageInput, 'Here is a message!');

  //Or instead of typing them out one by one, we can iterate over the allInputs array ⬇
  //allInputs.forEach((input) => {
  //userEvent.type(input, "TYPE TEST");
  //expect(input.value).toBe("TYPE TEST");
  // })

  //3._Push the Submit button_
  const submitInput = screen.getByTestId(/submit/i);
  //inputs dont have a role
  //but inputs with the type of submit(type="submit"), then it counts as a button
  //so this next line will work for that case -> const submitInput = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submitInput);

  //!Assert
  //Checks to make sure that the pre runs. If true, then all inputs are valid
  const preRender = screen.findByLabelText(/data-display/i);
  expect(preRender).toBeTruthy();
});
