import { useDispatch, useSelector } from 'react-redux'
import { EventsAPI } from '../api/api'
import { AddingEvents, AddingSites, addEvents } from '../redux/eventReducer'
import Card from './card/card'
import style from './events.module.css'
import { getEvents, getSites } from '../redux/eventReducer-selector'
import React, { useEffect, useMemo } from 'react'
import { NavLink } from "react-router-dom";

const Events = () =>{
    const dispatch = useDispatch()
    const eventsDataBase = useSelector(getEvents)
    const sitesDataBase = useSelector(getSites)
    useEffect(()=>{
        dispatch(AddingEvents())
        dispatch(AddingSites())
    }, [])
    
    console.log(eventsDataBase)
    console.log(sitesDataBase)
    let events = eventsDataBase.map(el=>
        <NavLink to={`event/${el.id}`}><Card 
        key = {el.id} name = {el.name} information = {el.information} 
        priceStart = {el.priceStart} day = {el.day} month = {el.month} time = {el.time}/></NavLink>
    )
    let sites = sitesDataBase.map(el=>
        <NavLink to={`place/${el.id}`}><Card key={el.id} name={el.name} information={el.information} date={el.date} priceStart={el.priceStart}/></NavLink>
    )
    console.log(events)
    return(
        <section className={style.section}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <h1>
                        ПОПУЛЯРНЫЕ СОБЫТИЯ
                    </h1>
                </div>
                <div className={style.events}>
                    {events}
                    {sites}
                </div>
            </div>
        </section>
    )
    
}

export default React.memo(Events)
