
import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";

export default function SingIn() {

  const navigate = useNavigate()

  return (
    <Form method="post" id="contact-form">

      {/* <span>Email</span> */}
      <p>
        <input
          className="casillas"
          placeholder="Email"
          aria-label="First name"
          type="text"
          name="email"
          defaultValue={""}
        />

        <input
          className="casillas"
          placeholder="Password"
          aria-label="Last name"
          type="text"
          name="password"
          defaultValue={""}
        />
      </p>
      <p>
        <input
          className="casillas"
          placeholder="Name"
          aria-label="Last name"
          type="text"
          name="name"
          defaultValue={""}
        />

        <input
          className="casillas"
          placeholder="Last Name"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={""}
        />
      </p>

      <input
        className="casillas"
        placeholder="Date of Birth"
        aria-label="Last name"
        type="date"
        name="date"
        defaultValue={""}
      />






      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => {
          navigate(-1);
        }}>Cancel</button>
      </p>
    </Form>
  )

}