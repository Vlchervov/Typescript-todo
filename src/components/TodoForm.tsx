import React, {useState} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const [title, setTitle] = useState<string>('')

    return (
        <div className="input-field">
            <input 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
             type='text'
              id="title"
               />
               <button onClick={() => {
                   if (title.trim() === '') {
                   } else {
                    props.onAdd(title);
                    setTitle('')
                   }
               }}>добавить</button>
            <label htmlFor="title" className='active'>
            </label>
        </div>
    )
}