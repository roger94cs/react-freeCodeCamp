import './App.css';
import Logo from './components/Logo';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="app-tareas">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
};

// npm i react-icons --save

export default App;
