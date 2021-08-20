import React from 'react';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

const App: React.FC = () => {
  return <Provider store={store}>
  <h1>TodoList</h1>
  <Navbar />
  <div className='container'>
  </div>
  </Provider>
}

export default App;
