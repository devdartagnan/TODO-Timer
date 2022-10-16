import { iTarefa } from '../../../types/iTarefa'
import styles from './Item.module.scss'

interface Props extends iTarefa {
  selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}

export default function item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
  }: Props) {
  return (
    <li
      className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} 
    ${completado ? styles.itemCompletado : ''}`}
      onClick={() => !completado &&
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={styles.concluido} aria-label={'Tarefa completada'}></span>}
    </li>
  )
}
