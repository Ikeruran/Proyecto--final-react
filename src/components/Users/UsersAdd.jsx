import { redirect } from "react-router-dom";



 async function action({ request }) {
  
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);
  let user = await fetch("https://localhost:1443/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json",
 
  },
    body: JSON.stringify({
      email: fields.email,
      password: fields.password,
      dni: fields.dni,
      name: fields.name,
      last_name: fields.last_name,
      date_of_birth: fields.date_of_birth,
     
    })
  })
  console.log(user)
  // user = await user.json();
  return redirect("/users");
  
}
export{action}