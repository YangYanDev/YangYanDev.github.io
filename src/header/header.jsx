import { useEffect, useState } from 'react';
import style from './header.module.css'
import { 
    EnvironmentOutlined,
    StarOutlined,
    BellOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { EventsAPI } from '../api/api';

const Header = () =>{
    let [search, setSearch] = useState('')
    let [isSearch, setIsSearch] = useState(0)
    let [events, setEvents] = useState([])

    const SearchItemsOn = () =>{
        setIsSearch(1)
        if (events.length < 0) {
            setIsSearch(0)
        }
    }
    const SearchItemsOff = () =>{
        setIsSearch(0)
    }

    const EventsCard = events.map(e => 
    <div key={e.id} className={style.search_items_card }>
        <div className={style.search_items_card_img}>
            <img src='#'/>
        </div>
        <div className={style.search_items_card_information}>
            <h2>
                {e.name}
            </h2>
            <p>
                {e.place}
            </p>
            <div className={style.search_items_card_date}>
                <p>{e.date}</p>
                <p>{e.time}</p>
            </div>
        </div>
    </div>)
    const SearchChange = (e) =>{
        setSearch(e.currentTarget.value)
        console.log('SearcheChange')
    }
    useEffect(()=>{
        if (search !== '') {
            EventsAPI.getEventSearch(search).then(data=>{
            setEvents(data.events)
            console.log(data)
        })   
        }
        console.log('getEventSearch')
        // console.log(events)
    },[search])
    return(
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.img}>
                    <img src='#'/>
                </div>
                <div className={style.search}>
                    <input 
                        placeholder='Поиск' 
                        onChange={SearchChange} 
                        value={search}
                        onClick={SearchItemsOn}
                        onBlur={SearchItemsOff}
                    />
                    <div className={style.search_items} style={isSearch === 0 ? {display: 'none'} : undefined}>
                        <div className={style.search_items_category}>
                            <h3>
                                Мероприятия
                            </h3>
                            <div className={style.search_items_cards}>
                                {EventsCard}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.user_setting}> 
                    <div className={style.location}>
                        <EnvironmentOutlined /> 
                        <p>Санкт-Петербург</p>
                    </div>
                    <div className={style.location}>
                        <StarOutlined /> 
                        <p>Избраное</p>
                    </div>
                    <div className={style.location}>
                        <BellOutlined />  
                        <p>Уведомления</p>
                    </div>
                    <div className={style.location}>
                        <SettingOutlined />
                        <p>Настройки</p> 
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header