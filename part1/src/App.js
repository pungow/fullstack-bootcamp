import './App.css';
import MensajeModule from './MensajeModule.js';

const Mensaje = () => {
  return <h1>HOLA MUNDO REACT</h1>
}

const Description = () => {
  return <p>App del curso de Full-Stack</p>
}

const App = () => {
  const message = 'Hello work in React'
  const a = 2
  const b = 3

  return (
    <div className="App">
      <h1>Title React</h1>
      <strong>trabajando</strong>
      <div>
        {message + ' JS evaluation en JSX: '}
        <p>el resultado es: </p>
        {a + b}
      </div>
      <Mensaje></Mensaje>
      <Mensaje />
      <Description />
      <MensajeModule message='Are you okey?'></MensajeModule>
      <MensajeModule message='Are you okey?' color='blue' />


    </div>
  );
}

export default App;
