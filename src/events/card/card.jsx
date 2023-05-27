import { EventsAPI } from '../../api/api';
import style from './card.module.css'
import { 
    ClockCircleOutlined,
    WalletOutlined
} from '@ant-design/icons';



const Card = (props) =>{
    let month = props.month
    if (month === 1) month = 'Января'
    if (month === 2) month = 'Февраля'
    if (month === 3) month = 'Марта'
    if (month === 4) month = 'Апреля'
    if (month === 5) month = 'Мая'
    if (month === 6) month = 'Июня'
    if (month === 7) month = 'Июля'
    if (month === 8) month = 'Августа'
    if (month === 9) month = 'Сентяря'
    if (month === 10) month = 'Октября'
    if (month === 11) month = 'Ноября'
    if (month === 12) month = 'Декабря'
    return(
        <div className={style.card}>
            <div className={style.wrapper}>

                <img src={props.file}/>
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.information}
                </p>
                <div className={style.dataprice}>
                    <div  className={style.data}>
                        <ClockCircleOutlined />
                        <h2>{props.day}{month}{props.time}</h2>
                        
                    </div>
                    <div className={style.price}>
                        <WalletOutlined />
                        <h2>
                            от {props.priceStart} rub
                        </h2>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card