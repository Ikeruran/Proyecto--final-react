import { Form, redirect} from "react-router-dom";

import React from 'react';



export default function StudentsForm() {

  
  return (
    <Form method="post" id="contact-form" action="studentsform">

      
      <p>
        <input
          className="casillas"
          placeholder="DNI"
          aria-label="First name"
          type="text"
          name="dni"
          
        />

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

      <input
        className="casillas"
        placeholder="Date of Birth"
        aria-label="Last name"
        type="date"
        name="date_of_birth"
        
      />

      <p>
        <button type="submit" >Save</button>
        <button type="button" onClick={() => {
          redirect(-1);
        }}>Cancel</button>
      </p>
    </Form>
  )

}