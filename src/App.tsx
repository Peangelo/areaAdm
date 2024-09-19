import Container from './components/Container';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';

function App() {
  return (
    <>
      <Cabecalho/>
      <Container>
        <Titulo>Area Administrativa</Titulo>
      </Container>
    </>
  );
}

export default App;
