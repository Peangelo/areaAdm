import Container from './components/Container';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './components/Grafico';
import useDadosProfissional from './useDadosProfissional';
import Avaliacao from './components/Avaliacao';

function App() {

  const {dados: consultas, erro: consultasErro} = useDadosConsulta()
  const {dados: profissionais, erro: profissionaisErro} = useDadosProfissional()

  if(consultasErro || profissionaisErro) {
    console.log("erro na requisição")
  }
  return (
    <>
      <Cabecalho/>
      <Container>
        <Titulo>Area Administrativa</Titulo>
        <Tabela consultas={consultas}/>
        <Grafico consultas={consultas} profissionais={profissionais}/>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape/>
    </>
  );
}

export default App;
