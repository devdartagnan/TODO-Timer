import Button from '../Button';
import styles from './Formulario.module.scss';
import { useState } from 'react';
import React from 'react'
import { iTarefa } from '../../types/iTarefa';
import { v4 as uuidv4 } from 'uuid'

export default function Formulario({ setTarefas }: {
  setTarefas: React.Dispatch<React.SetStateAction<iTarefa[]>>
}) {

  const [valoresItem, setValoresItem] = useState(
    {
      tarefa: '',
      tempo: '00:00:00',
    }
  )
  const adicionaItem = (evento: React.FormEvent) => {
    evento.preventDefault();
    setTarefas(tareafasOld => [...tareafasOld, {
      ...valoresItem,
      completado: false,
      selecionado: false,
      id: uuidv4()
    }
    ]
    );
    setValoresItem(
      {
        tarefa: '',
        tempo: '00:00:00'
      })
  }
  return (
    <form className={styles.novaTarefa} onSubmit={adicionaItem}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">
          Adicione seu estudo
        </label>
        <input
          type="text"
          name='tarefa'
          id='tarefa'
          value={valoresItem.tarefa}
          onChange={(e) => setValoresItem({ ...valoresItem, tarefa: e.target.value })}
          placeholder='O que voçê quer estudar?'
          required />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">
          Adicione o tempo desejado
        </label>
        <input
          type="time"
          id='tempo'
          value={valoresItem.tempo}
          onChange={(e) => setValoresItem({ ...valoresItem, tempo: e.target.value })}
          name='tempo'
          min='00:00:00'
          max='01:30:00'
          step="2"
          required />
      </div>
      <Button>
        Adicionar
      </Button>
    </form>
  )
}