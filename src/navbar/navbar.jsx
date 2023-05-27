import style from './navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = () =>{
    return(
        <section className={style.section}>
            <div className={style.wrapper}>
                <ul>
                    <li>Кино</li>
                    <li>Театры</li>
                    <li><NavLink to={'/events/музеи?category=музеи'}>Музеи</NavLink></li>
                    <li><NavLink to={'/events/музыка?category=музыка'}>Музыка</NavLink></li>
                    <li>Клубы</li>
                    <li>Юмор</li>
                    <li>Детские</li>
                    <li>Парки</li>
                    <li>Спорт</li>
                    <li>Кафе и рестораны</li>
                    <li>Активный отдых</li>
                    <li>Ещё</li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar