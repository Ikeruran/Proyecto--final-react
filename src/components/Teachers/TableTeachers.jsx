import React from "react"
import { convertDate } from "../../utils"

function TableHeader () {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>DNI</th>
                <th>Name</th>
                <th>Last name</th>
                <th>Date of birth</th>
                <th>Creation date</th>
                <th>Delete</th>

            </tr>
        </thead>
    )
};

function TableBody(props){

    const rows = props.teacherData.map((row, index) => {
        return (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.dni}</td>
                <td>{row.name}</td>
                <td>{row.last_name}</td>
                <td>{convertDate(row.date_of_birth)}</td>
                <td>{convertDate(row.createdAt)}</td>
                <td><button onClick={()=>props.removePeople(index)} >Delete</button></td>
            </tr >   
        )
})
return <tbody>{rows}</tbody>

}


function UsersTable(props){
    return(
        <table>
        <TableHeader/>
        <TableBody teacherData={props.teacherData}/>
        </table>
        
    )
}

export default UsersTable