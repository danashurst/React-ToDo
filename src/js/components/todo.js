import React, {useState} from 'react';
import TodoItem from './todo-item';

const mockList = [
 'feed the cat',
 'take the rubbish out',
 'pay the milk bill'
]

const Todo = () => {
    const [list, setList] = useState(mockList);
    const [newItemText, setNewItemText] = useState('');

    const updateNewItemText = e => {
        setNewItemText(e.target.value);
    }

    const addItemToList = () => {
        setList([
            ...list,
            newItemText
        ]);
        setNewItemText('');
    }

    const removeItemFromList = (item) => {
        setList(list.filter( l => l !== item));
    }

    return (
        <div>
            {
                list.map( l => {
                    return (
                        <TodoItem 
                            item={l}
                            onDelete={removeItemFromList}
                        />
                    )
                })
            }
            <input 
                value={newItemText}
                onChange={updateNewItemText}
                />
            <button 
            onClick={addItemToList}>Add Item</button>
        </div> 
    );
}

export default Todo;