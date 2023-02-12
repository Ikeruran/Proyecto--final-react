import React from "react"
import { convertDate } from "../../utils"

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>DNI</th>
                <th>Date of birth</th>
                <th>Created date</th>
                <th>Delete</th>
            </tr>
        </thead>
    )
};

function TableBody(props) {
    const rows = props.studentsData.map((row, index) => {

        return (
            <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.last_name}</td>
                <td>{row.dni}</td>
                <td>{convertDate(row.date_of_birth)}</td>
                <td>{convertDate(row.createdAt)}</td>
                <td><button onClick={() => props.deleteStudent(row.id)} >Delete</button></td>
            </tr >
        )
    })
    return <tbody>{rows}</tbody>
}

function UsersTable(props) {
    return (
        <table>
            <TableHeader />
            <TableBody studentsData={props.studentsData} deleteStudent={props.deleteStudent} />
        </table>
    )
}
export default UsersTable