import style from './logo.module.scss'
function LogoChange({ logo }: { logo: string }) {
    return (
        <a href="" className={style.logo}>
            {logo}
        </a>
    )
}
export default LogoChange