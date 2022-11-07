/* eslint-disable react/prop-types */

export default function TodoListItem(props) {
    return (   
        <tr>
            <td className="num">{props.index}</td>       
            <td>{props.item.name}</td>
            <td>{props.item.description}</td>
            <td>{props.item.date}</td>
            <td>{props.item.tags}</td>
            <td>{props.item.priority}</td>
        </tr>
    );
}