import React from 'react';

const TodoItem = ({item, onDelete}) => {
    return (
        <div>
            <span>{item}</span>
            <button onClick={ () => onDelete(item)}>x</button>
        </div>
    )
};

export default TodoItem;