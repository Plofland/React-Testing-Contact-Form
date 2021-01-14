import React from 'react';
import ContactForm from './ContactForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders without errors', async () => {
  //Arrange
  render(<ContactForm />);

  //Act
  //1. Get the input fields
  const firstNameInput = screen.queryByLabelText(/first name/i);
  console.log(firstNameInput);
  // const lastNameInput = screen.getByLabelText(/last name/i);
  // const emailInput = screen.getByLabelText(/email/i);
  //2. Type values into the input fields
  // userEvent.type(firstNameInput, 'Pal');
  // userEvent.type(lastNameInput, 'Bond');
  // userEvent.type(emailInput, 'something@gmail.com');

  //3. Push the Submit button
  // const submitInput = screen.getByRole();//inputs dont have a role
  // userEvent.click(submitInput)

  //Assert
  //1. First name on screen
  // const newFirstName = await screen.findByText('Pal');
  // expect(newFirstName).toBeInTheDocument();
  //2. Last name on screen
  // const newLastname = await screen.findByText('Bond');
  // expect(newLastname).toBeInTheDocument();
  //3. Email on screen
  // const newEmail = await screen.findByText('something@gmail.com');
  // expect(newEmail).toBeInTheDocument();
});
