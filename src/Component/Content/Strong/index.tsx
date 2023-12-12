import styles from './strong.module.scss'

function Strong({icon, name, className}:{name:string, icon?:React.ReactNode, className?:string}){
    const style = className ? `${styles.strong} ${styles.strong_organ}` : styles.strong;
    return(
        <strong className={style}>{icon} {name}</strong>
    )
}
export default Strong