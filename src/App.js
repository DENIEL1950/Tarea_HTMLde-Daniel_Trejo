//import logo from './logo.svg';
import './App.css';
import Ejercicio from './components/Ejercicio';
import Saludos from './components/Saludos';
import Tareas from './components/Tareas';

function App() {
  return (
    <div className="App">
      <h1>Primeros pasos con REACT</h1>
      <h2>Bienvenidos</h2>
      <Saludos nombre="Daniel" apellido="Trejo"/>
      <Ejercicio nombre="Julio" edad="23" pasatiempo="escuchar música" />
      <Tareas/>

    </div>
  );
}

export default App;
