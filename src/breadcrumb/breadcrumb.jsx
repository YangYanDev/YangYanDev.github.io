import style from './breadcrumbs.module.css'
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom'

const Breadcrumbs = () =>{
    return(
        <div className={style.breadcrumb}>
            <div className={style.wrapper}>
                <Breadcrumb>
                    <Breadcrumb.Item><NavLink to={'/'}>Главная</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item>Музыка</Breadcrumb.Item>
                    <Breadcrumb.Item>Концерт групы КняZz</Breadcrumb.Item>
                </Breadcrumb>
                
            </div>
        </div>
    )
}


export default Breadcrumbs