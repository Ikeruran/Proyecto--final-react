import { redirect } from "react-router-dom";
import { getToken, getTeacherId } from "../../utils"

async function action({ request }) {

    const token = getToken()
    const id = await getTeacherId()
    const formData = await request.formData();
    const fields = Object.fromEntries(formData);
    const url = "https://localhost:1443/api/student";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,

        },
        body: JSON.stringify({
            dni: fields.dni,
            name: fields.name,
            last_name: fields.last_name,
            date_of_birth: fields.date_of_birth,
            teacher_id: id,
        })
    }
    let user = await fetch(url, options)
    if (user.statusText==="Bad Request"){
        alert("Fill all the fields with the correct data")
        return redirect("/students");
      }else{
      return redirect("/students");
      }
}
export { action }