/* eslint-disable react/prop-types */

import Button from 'react-bootstrap/Button';

export default function TodoListItem(props) {

    const buttonCloseStyle = {
        display: props.item.status !== 'Завершено' ? 'display' : 'none',
        color: 'green'
    };

    return (   
        <tr>
            <td className="num">{props.index}</td>       
            <td>{props.item.name}</td>
            <td>{props.item.description}</td>
            <td>{props.item.date}</td>
            <td>{props.item.tags}</td>
            <td>{props.item.priority}</td>
            <td>{props.item.status}</td>

            {/* <td className='com'>
                <Button className='btn-com' onClick={() => props.closeTask(props.index - 1)}>&#10004;</Button>
            </td> */}

           {/*  <td className='com'>
                { props.item.status !== 'Завершено' ? <Button className='btn-com' onClick={() => props.closeTask(props.index - 1)}>&#10004;</Button> : null }
            </td>
            */}

            <td className='com'>
                <Button 
                className='btn-com' 
                onClick={() => props.closeTask(props.index - 1)}
                style={buttonCloseStyle}
                >&#10004;</Button>
            </td>
y
            {/* <td className='com'>
                <Button 
                //className='btn-com'
                className={
                    {
                        hide:  props.item.status === 'Завершено'
                    }
                }
                onClick={() => props.closeTask(props.index - 1)}
                >&#10004;</Button>
            </td> */}

            <td className='del'>
                <Button className='btn-del' onClick={() => props.removeItem(props.index - 1)}>&#128465;</Button>
            </td>
        </tr>
    );
}