/* eslint-disable react/prop-types */
import TodoList from '../components/todo-list';
import { useState } from 'react';

export default function TodoListPages() {

    const [list, setList] = useState([
        {
            "num": 1,
            "name": "Сделать диплом",
            "date": "11:00:11",
            "description": "Подготовит дипломную работу",
            "tags": ["#учеба #frontend"],
            "priority": "Высокий", //низкий, средний, высокий
            "status": "Ожидание" //ожидание, в работе, выполнено
        },

        {
            "num": 2,
            "name": "Приготовить обед",
            "date": "12:00:11",
            "description": "Описание обеда",
            "tags": ["#еда #рецепты #суп"],
            "priority": "Средний", //низкий, средний, высокий
            "status": "Ожидание" //ожидание, в работе, выполнено
        },
        
    ]);

    function removeItem(index) {

        const newList = list.filter(filterCondition);

        setList(newList);

        function filterCondition(item, i) {
            return index !== i;
        }
    }

    function closeTask(index) {
       list[index].status = 'Завершено';

       setList([].concat(list));
    }

    
    return (   
        <TodoList 
            list={list}
            removeItem={removeItem}
        ></TodoList>
    );    
}