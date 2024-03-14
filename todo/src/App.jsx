import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import TodoList from './component/TodoList';
import TodoApp from './component/TodoApp';


function App() {
  return (
    <div>
      <Routes>
        <Route path='todo-list' element={<TodoList/>} />
        <Route path='todo-app' element={<TodoApp/>} />
      </Routes>
      
    </div>
  );
}

export default App;
