/* eslint-disable react/prop-types */
import TodoList from '../components/todo-list';

export default function TodoListPages() {

    const list = [
        {
            "num": 1,
            "name": "Сделать диплом",
            "date": "11:00:11",
            "description": "Подготовит дипломную работу",
            "tags": ["#учеба #frontend"],
            "priority": "Высокий"
        },

        {
            "num": 2,
            "name": "Приготовить обед",
            "date": "12:00:11",
            "description": "Описание обеда",
            "tags": ["#еда #рецепты #суп"],
            "priority": "Средний"
        },
        
    ];
    
    return (   
        <TodoList list={list}></TodoList>
    );
}