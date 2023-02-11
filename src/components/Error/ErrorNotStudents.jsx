import { useRouteError,Link  } from "react-router-dom";



export default function ErrorNotStudents() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Este profesor no tiene estudiantes asociados</h1>
      <Link to={"./students"}><button className= "botones" > Add Students</button></Link>

    </div>
  );
}