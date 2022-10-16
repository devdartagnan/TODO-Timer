import { tempoEmSegundos } from '../../common/utils/time'
import { iTarefa } from '../../types/iTarefa'
import Button from '../Button'
import styles from './Cronometro.module.scss'
import Relogio from './Relogio'
import { useState, useEffect } from 'react'
interface Props {
    selecionado: iTarefa | undefined;
    finalizaTarefa:() => void;
}

export default function Cronometro({ selecionado, finalizaTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        setTempo(tempoEmSegundos(String(selecionado?.tempo)))
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }finalizaTarefa();
        }, 1000);
    }

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo}/></div>
            <Button type='button' onClick={() => regressiva(tempo)}>
                Começar!
            </Button>
        </div>
    )
}
