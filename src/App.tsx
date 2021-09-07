import React, {useState} from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { TodoForm } from './components/TodoForm';
import ListItem from './components/ListItem';
import {TodoList} from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }



  return <Provider store={store}>
  <h1>TodoList</h1>
  <div className='container'>
    <TodoForm onAdd={addHandler}/>
    <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    <ListItem />
  </div>
  </Provider>
}

export default App;
