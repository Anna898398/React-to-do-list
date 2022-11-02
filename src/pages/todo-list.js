import Table from 'react-bootstrap/Table';

export default function TodoList() {

    const list = [
        {
            "num": 1,
            "name": "Сделать диплом",
            "date": "28.11.2022",
            "description": "Подготовит дипломную работу",
            "tags": ["#учеба #frontend"],
            "priority": "Высокий"
        },
        
    ];

    return (
        <div>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название дела</th>
                        <th>Дата/время исполнения</th>
                        <th>Описание дела</th>
                        <th>Теги</th>
                        <th>Приоритет дела</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{list[0].num}</td>
                        <td>{list[0].name}</td>
                        <td>{list[0].date}</td>
                        <td>{list[0].description}</td>
                        <td>{list[0].tags}</td>
                        <td>{list[0].priority}</td>
                    </tr>
                </tbody>

            </Table>
        </div>
    );
}