import React from 'react'
import { ITodo } from '../interfaces'
import styled from 'styled-components'


const Wrapper = styled.label `
display: flex;


button {
    position: relative;
}
`

const ListItem = styled.ul `
list-style: none;
font-size: 18px;
`

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
}


export const TodoList: React.FC<TodoListProps> = ({
     todos = [],
     onRemove,
     onToggle,
    }) => {
        
    return (
        <ListItem>
            {todos.map(todo => {
                // const classes = ['todo']
                return (
                    <Wrapper key={todo.id}>
                    <li>
                            <input type="checkbox" onChange={onToggle.bind(null, todo.id)}/>
                                {todo.title}
                    </li>
                    <button onClick={() => onRemove(todo.id)}>delete</button>
                    </Wrapper>
                )
            })}
        </ListItem>
    )
}

