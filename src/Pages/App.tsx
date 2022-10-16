import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Tarefas from '../components/Tarefas';
import './App.scss'
import { useState } from 'react';
import { iTarefa } from '../types/iTarefa';

function App() {
  const [tarefas, setTarefas] = useState<iTarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<iTarefa>()

  function selecionaTarefa(tarefaSelecionada: iTarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
  function finalizaTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado : true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas} />
      <Tarefas tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa}/>
    </div>
  );
}

export default App;
