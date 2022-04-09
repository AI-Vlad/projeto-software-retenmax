import style from '../../styles/Home.module.css'

export default function Layout(props){
    return (
        <div className={style.base}>
            <div className= {style.menu}>
                <ul className={style.listaMenu}>
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                </ul>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}