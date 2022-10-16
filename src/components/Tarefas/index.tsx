import styles from './Tarefas.module.scss'
import Item from './Item'
import { iTarefa } from '../../types/iTarefa'

interface Props {
    tarefas: iTarefa[],
    selecionaTarefa: (tarefaSelecionada : iTarefa) => void
}

export default function Tarefas({tarefas, selecionaTarefa}: Props) {
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul> {tarefas.map(tarefa =>
                <Item {...tarefa} 
                key={tarefa.id}
                selecionaTarefa={selecionaTarefa}/>
            )}
            </ul>
        </aside>
    )
}