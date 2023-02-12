
import { Form } from "react-router-dom";
import React from 'react';
export default function SingUp() {
  return (
    <Form method="post" id="contact-form" action="usersadd">
      <p>
        <input
          className="casillas"
          placeholder="Email"
          aria-label="First name"
          type="text"
          name="email"
        />
        <input
          className="casillas"
          placeholder="Password"
          aria-label="Last name"
          type="text"
          name="password"
        />
        <input
          className="casillas"
          placeholder="DNI"
          aria-label="Last name"
          type="text"
          name="dni"
        />
      </p>
      <p>
        <input
          className="casillas"
          placeholder="Name"
          aria-label="Last name"
          type="text"
          name="name"
        />
        <input
          className="casillas"
          placeholder="Last Name"
          aria-label="Last name"
          type="text"
          name="last_name"
        />
      </p>
      <span>Date of Birth</span>
      <input
        className="casillas"
        placeholder="Date of Birth"
        aria-label="Last name"
        type="date"
        name="date_of_birth"
      />
      <p>
        <button type="submit" >Save</button>
        <button type="button" onClick={() => window.history.back()}>Cancel</button>
      </p>
    </Form>
  )

}