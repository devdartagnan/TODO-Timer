import styles from './Button.module.scss'

export default function Button({children, type, onClick}:{
    children:string,
    type?: "button" |"submit" | "reset" | undefined,
    onClick?: ()=> void
})
{
        return ( 
            <button type={type} onClick={onClick} className={styles.botao}>
                {children}
            </button>
        )
    }