import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import TodoList from './component/TodoList';


function App() {
  return (
    <div>
      <Routes>
        <Route path='todo-list' element={<TodoList/>} />
      </Routes>
      
    </div>
  );
}

export default App;
