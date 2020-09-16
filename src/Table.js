import React from 'react';
import TableBody, {TableHeader} from "./TableBody"
const Table = ({characterData, removeCharacter,addCharacter}) => {

    return (
        <table>
            <TableHeader />
            <TableBody characterData ={characterData} removeCharacter = {removeCharacter} addCharacter={addCharacter} />
        </table>
    )
}

// class Table extends Component {
//     render() {
//         const {characterData} = this.props;
//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody characterData={characterData} />
//             </table>

//         )
//     }
// }

export default Table;