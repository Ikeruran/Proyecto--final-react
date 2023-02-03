import React from "react"

function TableHeader () {
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

function TableBody(props){

    const rows = props.userData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.email}</td>
                <td>{row.type}</td>
                <td>{row.active? "active": "inactive"}</td>
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
        <TableBody userData={props.userData}/>
        </table>
        
    )
}

export default UsersTable
