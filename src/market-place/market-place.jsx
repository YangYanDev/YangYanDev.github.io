import Breadcrumbs from '../breadcrumb/breadcrumb'
import style from './market-place.module.css'
import { Button, DatePicker, Checkbox, Select, Input, Slider } from 'antd'
import {
    DownOutlined,
    UpOutlined
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { EventsAPI } from '../api/api'
import Card from '../events/card/card'
const MarketPlace = () =>{
    const params = useParams()
    let [types, setTypes] = useState([])
    let [cities,setCities] = useState([])


    let [days, setDays] = useState('')
    let [age, setAge] = useState('')
    let [date, setDate] = useState('')
    let [city, setCity] = useState('')
    let [type, setType] = useState('')
    let [sort, setSort] = useState(1)
    let [QR, setQR] = useState(false)
    let [priceStart, setPriceStart] = useState(0)
    let [priceEnd, setPriceEnd] = useState(100000)

    let [RadiusClass, setRadiusClass] = useState(0)
    let [TypeClass, setTypeClass] = useState(0)
    let [AgeClass, setAgeClass] = useState(0)
    let [PriceClass, setPriceClass] = useState(0)

    let [events, setEvents] = useState([])

    const onChange = (date, dateString) => {
        setDate(date)
        setDays('')
    }
    const RadiusClassChange = () =>{
        if(RadiusClass === 0) setRadiusClass(1)
        else setRadiusClass(0)
    }
    const TypeClassChange = () =>{
        if(TypeClass === 0) setTypeClass(1)
        else setTypeClass(0)
    }
    const AgeClassChange = () =>{
        if(AgeClass === 0) setAgeClass(1)
        else setAgeClass(0)
    }
    const PriceClassChange = () =>{
        if(PriceClass === 0) setPriceClass(1)
        else setPriceClass(0)
    }
    const sortFunction = (e) =>{
        setSort(e)
    }
    const QRChange = (e) =>{
        setQR(e.target.checked)
    }
    const RangeFunction = (e) => {
        setPriceStart(e[0])
        setPriceEnd(e[1])
        console.log(priceStart)
    }
    const PriceStartFunction = e =>{
        setPriceStart(e.currentTarget.value)
        console.log(priceStart)
    }
    const PriceEndFunction = e =>{
        setPriceEnd(e.currentTarget.value)
        console.log(priceEnd)
    }
    const typeFunction = (e)=>{
        setType(e.target.innerHTML)
    }
    const citiesFunction = (e)=>{
        setCity(e.target.innerHTML)
    }
    const AgeFunction = (e)=>{
        setAge(e.target.innerHTML)
    }

    const DaysFunction1 = () => {
        setDays(1)
        setDate('')
    }
    const DaysFunction2 = () => {
        setDays(2)
        setDate('')
    }
    const DaysFunction3 = () => {
        setDays(3)
        setDate('')
    }
    useEffect(()=>{
        EventsAPI.getEventTypes(params.eventType).then(data=>{
            setTypes(data.Types[0].types)
        })
        EventsAPI.getCities().then(data=>{
            setCities(data.Cities)
            // console.log(data.Cities)
        })
        
    },[])
    useEffect(()=>{
        EventsAPI.CreateFilters(params.eventType, age, date, city, type, QR, priceStart, priceEnd, days, sort).then(data=>{
        console.log(data)
        setEvents(data.Events)
    })
    },[params.eventType, age, date, city, type, QR, priceStart, priceEnd, days, sort])
    
    const Event = events.map(e=><NavLink><Card key={e.id} name={e.name}/></NavLink>
    
    )
    const EventTypes = types.map(e=><p onClick={typeFunction} style={e === type ? {backgroundColor : 'rgb(160, 160, 255)', color: 'white'} : undefined}>{e}</p>)
    const Cities = cities.map(e=><p onClick={citiesFunction} style={e.city === city ? {backgroundColor : 'rgb(160, 160, 255)', color: 'white'} : undefined}>{e.city}</p>)
    return(
    <>
        <Breadcrumbs/>
        <div className={style.section}>
            <div className={style.wrapper}>
                <div className={style.filter}>
                    <h1>{params.eventType}</h1>
                    <div className={style.dateSort}>
                        <DatePicker onChange={onChange} className={style.input} value={date ? date : undefined}/>
                        <Button className={style.input} onClick={DaysFunction1} 
                        style={days === 1 ? {border: '1px solid rgb(160, 160, 255)', color: 'rgb(160, 160, 255)'} : undefined}
                        >На этой неделе</Button>
                        <Button className={style.input} onClick={DaysFunction2}
                        style={days === 2 ? {border: '1px solid rgb(160, 160, 255)', color: 'rgb(160, 160, 255)'} : undefined}
                        > Эти выходные</Button>
                        <Button className={style.input} onClick={DaysFunction3}
                        style={days === 3 ? {border: '1px solid rgb(160, 160, 255)', color: 'rgb(160, 160, 255)'} : undefined}
                        >Следующая неделя</Button>
                    </div>
                    <div className={style.filterSort}>
                        <div className={style.ParamentSort}>
                            <div className={style.ParamentName} onClick={RadiusClassChange}>
                                <p>Радиус поиска</p>
                                <DownOutlined />
                            </div>
                            <div className={style.ParamentChoose} style={RadiusClass ? {display: 'none'}: {undefined}}>
                                {Cities}
                            </div>
                        </div>
                        <div  className={style.ParamentSort}>
                            <div className={style.ParamentName} onClick={TypeClassChange}>
                                <p>Жанр</p> 
                                <DownOutlined /> 
                            </div>
                            <div className={style.ParamentChoose} style={TypeClass ? {display: 'none'}: {undefined}}>
                                {EventTypes}
                            </div>
                        </div>
                        <div  className={style.ParamentSort}>  
                            <div className={style.ParamentName} onClick={AgeClassChange}>
                                <p>Возврастные ограничения</p> 
                                <DownOutlined />
                            </div> 
                            <div className={style.ParamentChoose} style={AgeClass ? {display: 'none'}: {undefined}}>
                                <p onClick={AgeFunction} style={age === '18+' ? {backgroundColor : 'rgb(160, 160, 255)', color: 'white'} : undefined}>18+</p>
                                <p onClick={AgeFunction} style={age === '16+' ? {backgroundColor : 'rgb(160, 160, 255)', color: 'white'} : undefined}>16+</p>
                                <p onClick={AgeFunction} style={age === '12+' ? {backgroundColor : 'rgb(160, 160, 255)', color: 'white'} : undefined}>12+</p>
                                <p onClick={AgeFunction} style={age === '6+' ? {backgroundColor : 'rgb(160, 160, 255)', color: 'white'} : undefined}>6+</p>
                                <p onClick={AgeFunction} style={age === '0+' ? {backgroundColor : 'rgb(160, 160, 255)', color: 'white'} : undefined}>0+</p>
                            </div>
                        </div>
                        <div  className={style.ParamentSort}>  
                            <div className={style.ParamentName} onClick={PriceClassChange}>
                                <p>Стоимость</p> 
                                <DownOutlined />
                            </div> 
                            <div className={style.ParamentChoose} style={PriceClass ? {display: 'none'}: {undefined}}>
                                <div>
                                   <Input placeholder='от' value={priceStart} onChange={PriceStartFunction}/> 
                                   <Input placeholder='до' value={priceEnd} onChange={PriceEndFunction}/> 
                                </div>
                                <div>
                                    <Slider range defaultValue={[priceStart, priceEnd]} min={0} max={100000} onChange={RangeFunction}/>
                                </div>
                            </div>
                        </div>
                               
                        <Checkbox onChange={QRChange} value={true} checked={QR}>Мероприятия без QR кода</Checkbox>
                        <div className={style.sort}>
                            Сортировать: 
                            <Select value={sort} onChange={sortFunction} style={{width: '200px'}}>
                                <Select.Option value={1}>По полярности</Select.Option>
                                <Select.Option value={2}>По дате</Select.Option>
                                <Select.Option value={3}>По стоимости<DownOutlined /></Select.Option>
                                <Select.Option value={4}>По стоимости<UpOutlined /></Select.Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className={style.events}>
                    {Event}
                    цйщьойшаьшщуктмшгфукмшгщиркфушгиешгршщфмтшгщекигщкетщштекшщткшщтумшгщийшгщмктшщтшщощзо
                    цйщьойшаьшщуктмшгфукмшгщиркфушгиешгршщфмтшгщекигщкетщштекшщткшщтумшгщийшгщмктшщтшщощзо
                    цйщьойшаьшщуктмшгфукмшгщиркфушгиешгршщфмтшгщекигщкетщштекшщткшщтумшгщийшгщмктшщтшщощзо
                    цйщьойшаьшщуктмшгфукмшгщиркфушгиешгршщфмтшгщекигщкетщштекшщткшщтумшгщийшгщмктшщтшщощзо
                    цйщьойшаьшщуктмшгфукмшгщиркфушгиешгршщфмтшгщекигщкетщштекшщткшщтумшгщийшгщмктшщтшщощзо
                    цйщьойшаьшщуктмшгфукмшгщиркфушгиешгршщфмтшгщекигщкетщштекшщткшщтумшгщийшгщмктшщтшщощзо
                </div>
            </div>
        </div>
    </>
    )
}

export default MarketPlace