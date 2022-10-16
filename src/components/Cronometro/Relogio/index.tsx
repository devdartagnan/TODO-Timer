import styles from './Reologio.module.scss'

interface Props{
    tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0")
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0")

    return (
        <>
            <span className={styles.relogioNumero}>{0 | Number(minutoDezena)}</span>
            <span className={styles.relogioNumero}>{0 | Number(minutoUnidade)}</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>{0 | Number(segundoDezena)}</span>
            <span className={styles.relogioNumero}>{0 | Number(segundoUnidade)}</span>
        </>
    )
}
