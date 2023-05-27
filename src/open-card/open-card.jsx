import style from './open-card.module.css'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import { 
    EnvironmentOutlined,
    ClockCircleOutlined,
    WalletOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Breadcrumbs from '../breadcrumb/breadcrumb';
import { useParams } from 'react-router-dom';
import { EventsAPI } from '../api/api';
import { useEffect, useState } from 'react';
const OpenCard = () =>{
    const params = useParams()
    console.log(params.eventID)
    let [event, eventChange] = useState([])
    useEffect(()=>{
        EventsAPI.getEvent(params.eventID).then(data=>{
            eventChange(data.events[0])
        })
    }, [])
    console.log(event.name)
    return(
        <>
            <Breadcrumbs/>
            <div className={style.breadcrumb}>
                <div className={style.wrapper2}>
                    <ArrowLeftOutlined className={style.arrow}/>
                    <p>Назад</p>
                </div>
            </div>
            <section className={style.section}>        
                <div className={style.wrapper}>
                    <div className={style.img}>
                        <div className={style.img_wrapper}>
                            <img src='#'/>
                        </div>
                        
                        <h3>Описание</h3>
                        <p className={style.desk}>
                            {event.information}
                        </p>
                        <p className={style.organisation}>
                            <span className={style.name}>Организатор</span>
                            <span className={style.org}>Рога и копыта</span>
                        </p>
                    </div>
                    <div className={style.menu}>
                        <div className={style.age}>
                            18+
                        </div>
                        <h1>  	
                            {event.name}
                        </h1>
                        <div className={style.location}>
                            {event.place}
                        </div>
                        <div className={style.location}>
                            начало в {event.time}
                        </div>
                        <div className={style.location}>
                            от {event.priceStart}
                        </div>
                        <button>
                            Купить билет
                        </button>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default OpenCard