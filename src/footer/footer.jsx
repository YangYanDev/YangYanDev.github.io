import { NavLink } from 'react-router-dom'
import style from './footer.module.css'


const Footer = () =>{
    return(
        <section className={style.section}>
            <div className={style.wrapper}>
                <div className={style.nav}>
                    <ul>
                        <li>О нас</li>
                        <li>Политика кондифициальности</li>
                        <li>Правила размещения</li>
                    </ul>
                </div>
                <div className={style.nav}>
                    <ul>
                        <li><NavLink to={'/add'}>Добавить мероприятие</NavLink></li>
                        <li>Добавить заведение</li>
                        <li>По вопросам рекламы</li>
                    </ul>
                </div>
                <div className={style.img}>
                    <img src='#'/>
                </div>
            </div>
            <div className={style.rights}>
                © 2023 «VIGEST». Все права защищены.
            </div>
        </section>
    )
}

export default Footer