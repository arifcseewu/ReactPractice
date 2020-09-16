import React from 'react';

const TableBody = ({characterData, removeCharacter,addCharacter}) => {
    const rows = characterData.map((row, index) => {
        return (
            <tr key= {index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className ="button-space" onClick={() => removeCharacter(index)}>Delete</button>
                    <button onClick={() => addCharacter("name")}>Add</button>
                </td>
            </tr>
        )
    })
    return (
    <tbody>{rows}</tbody>
           
    )
}
export const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

export default TableBody;
