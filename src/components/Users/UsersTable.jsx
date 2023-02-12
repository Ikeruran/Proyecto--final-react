import React from "react"

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Type</th>
                <th>Active</th>
                <th>Delete</th>
            </tr>
        </thead>
    )
};

function TableBody(props) {

    const rows = props.peopleData.map((row, index) => {
        return (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.email}</td>
                <td>{row.type}</td>
                <td>{row.active ? "active" : "inactive"}</td>
                <td><button onClick={() => props.deleteUser(row.id)} >Delete</button></td>
            </tr >
        )
    })
    return <tbody>{rows}</tbody>
}

function UsersTable(props) {
    return (
        <table>
            <TableHeader />
            <TableBody peopleData={props.peopleData} deleteUser={props.deleteUser} />
        </table>
    )
}

export default UsersTable
