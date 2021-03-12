import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {}); {
render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/)
}

test("form shows success message on submit with form details", () => {}); {
    const firstNameInput = screen.getByLabelText(/First Name/)
    const lastNameInput = screen.getByLabelText(/Last Name/)
    const addressInput = screen.getByLabelText(/Address/)
    const cityInput = screen.getByLabelText(/City/)
    const stateInput = screen.getByLabelText(/State/)
    const zipInput = screen.getByLabelText(/Zip/)

    userEvent.type(firstNameInput, "pat")
    userEvent.type(lastNameInput, "pat")
    userEvent.type(addressInput, "pat")
    userEvent.type(cityInput, "pat")
    userEvent.type(stateInput, "pat")
    userEvent.type(zipInput, "pat")


    const button = screen.getByRole("button")
    userEvent.click(button);

    expect(addressInput).toBeInTheDocument();
}
