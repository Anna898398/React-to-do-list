import TodoList from './pages/todo-list-pages';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
