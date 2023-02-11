import { redirect } from "react-router-dom";
import { getToken, decodedToken } from "../../utils"



async function action({ request }) {

    const token = getToken()
    const decoded = await decodedToken(token)
    const id = decoded.user.id


    const formData = await request.formData();
    const fields = Object.fromEntries(formData);
    const url= "https://localhost:1443/api/student";
    const options= {
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
    let user = await fetch(url,options )
    console.log(user)
    // user = await user.json();
    return redirect("/students");

}
export { action }