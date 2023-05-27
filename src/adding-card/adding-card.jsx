import TextArea from 'antd/es/input/TextArea';
import Breadcrumbs from '../breadcrumb/breadcrumb'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import style from './adding-card.module.css'
import { Checkbox, Input, Option, Select } from 'antd';
import { useEffect, useState } from 'react';
import { EventsAPI } from '../api/api';
import { DatePicker, TimePicker } from 'antd';

const AddingCard = () =>{
    const [photo, setPhoto] = useState(null)
    const [types, setTypes] = useState([])

    let [name, setName] = useState('')
    let [date, setDate] = useState()
    let [time, setTime] = useState()
    let [place, setPlace] = useState('')
    let [category, setCategory] = useState('')
    let [type, setType] = useState('')
    let [information, setInformation] = useState('')
    let [age, setAge] = useState('')
    let [isQR, SetIsQR] = useState(false)
    let [priceStart, setPriceStart] = useState('')
    let [priceEnd, setPriceEnd] = useState('')
    let [link, setLink] = useState('')
    let [accept, setAccept] = useState(false)
    let [isDisabled, setIsDisabled] = useState(true)
   
    const nameChangeFunction = (e) =>{
        setName(e.currentTarget.value)
    }
    const dateChangeFunction = (date, dateString) => {
        console.log(date, dateString)
        setDate(date)
    }
    const timeChangeFunction = (time, timeString) => {
        console.log(time, timeString)
        setTime(time)
    }
    const placeChangeFunction = (e) =>{
        setPlace(e)
    }
    const categoryChangeFunction = (e) =>{
        if (e === '1') setCategory('музыка')
        if (e === '2') setCategory('театры')
        if (e === '3') setCategory('музеи')
        console.log(category)
    }
    useEffect(()=>{
        EventsAPI.getEventTypes(category).then(
            data =>{ setTypes(data.Types[0].types) }
        )
    }, [category])
    const typeFunction = (e) =>{
        setType(e)
    }
    const informationChangeFunction = (e) =>{
        setInformation(e.currentTarget.value)
    }
    const ageChangeFunction = (e) =>{
        setAge(e)
    }
    const isQRChange = (e) =>{
        SetIsQR(e.target.checked)
    }
    const acceptChange = (e) =>{
        setAccept(e.target.checked)
    }
    const priceStartChangeFunction = (e) =>{
        setPriceStart(e.currentTarget.value)
    }
    const priceEndChangeFunction = (e) =>{
        setPriceEnd(e.currentTarget.value)
    }
    const linkChangeFunction = (e) =>{
        setLink(e.currentTarget.value)
    }
    const handlePhotoChange = (event) => {
        setPhoto(event.target.files[0]);
    }
    const formData = new FormData()
    const handleSubmit = (event) => {
        event.preventDefault()
        formData.append('photo', photo)
    }

    const buttonAccept = () =>{
        if(name) setIsDisabled(false)
        else setIsDisabled(true)
        if(date) setIsDisabled(false)
        else setIsDisabled(true)
        if(time) setIsDisabled(false)
        else setIsDisabled(true)
        if(place) setIsDisabled(false)
        else setIsDisabled(true)
        if(category) setIsDisabled(false)
        else setIsDisabled(true)
        if(type) setIsDisabled(false)
        else setIsDisabled(true)
        if(information) setIsDisabled(false)
        else setIsDisabled(true)
        if(age) setIsDisabled(false)
        else setIsDisabled(true)
        if(priceStart) setIsDisabled(false)
        else setIsDisabled(true)
        if(link) setIsDisabled(false)
        else setIsDisabled(true)
        if(accept) setIsDisabled(false)
        else setIsDisabled(true)
    }
    
    useEffect(()=>{
        buttonAccept()
    },[name, priceStart, date, time, place, category, type, information, age, link, accept, isQR])


    // request function
    const complete = () =>{
        alert('hello мир. Манера крутит мир')

        
        EventsAPI.CreateEvent(name, date, time, place, category, type, information, age, isQR, priceStart, priceEnd, link, formData)
    }
    
    let EventTypes = types.map(e=><Select.Option onClick={typeFunction} value={e}>{e}</Select.Option>)

    return( 
    <>
        <Breadcrumbs/>
        <section className={style.section}>
            <div className={style.wrapper}>
                <h1 className={style.h1}>
                    Добавить событие
                </h1>
                <label for="avatar" className={style.label}>
                    <div className={style.addiing_picture}>
                        <img src={photo}/>
                        <p>Загрузить фотографию</p>
                    </div>
                </label>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handlePhotoChange} />
                    <button type="submit">Upload</button>
                </form>
                <div className={style.input_wrapper}>
                    <p>Название события</p>
                    <Input placeholder="Название" onChange={nameChangeFunction} value={name}/>
                </div>
                <div className={style.input_wrapper_duo}>
                    <div className={style.div}>
                        <p>Дата события</p>
                        <DatePicker placeholder="01.01.2023" onChange={dateChangeFunction} value={date} type='date'/>
                    </div>
                    <div className={style.div}>
                        <p>Время события</p>
                        <TimePicker placeholder="18:00" onChange={timeChangeFunction} value={time}/>
                    </div>
                </div>
                <div className={style.input_wrapper}>
                    <p>Место проведения</p>
                    <Select value={place ? place : undefined} onChange={placeChangeFunction}>
                        <Select.Option value='1'>Москва</Select.Option>
                        <Select.Option value='2'>Санкт-Петербург</Select.Option>
                        <Select.Option value='3'>Ростов</Select.Option>
                    </Select>
                </div>
                <div className={style.input_wrapper_duo}>
                    <div className={style.div}>
                        <p>Категория</p>
                        <Select value={category ? category : undefined} onChange={categoryChangeFunction}>
                            <Select.Option value='1'>Музыка</Select.Option>
                            <Select.Option value='2'>Театр</Select.Option>
                            <Select.Option value='3'>Музей</Select.Option>
                        </Select>
                    </div>
                    <div className={style.div}>
                        <p>Жанр</p>
                        <Select disabled={category ? false : true} value={type ? type : undefined} onChange={typeFunction}>
                            { EventTypes }
                        </Select>
                    </div>
                </div>
                <div className={style.input_wrapper}>
                    <p>Информация о мероприятии</p>
                    <TextArea value={information} onChange={informationChangeFunction}/>
                </div>
                <div className={style.input_wrapper_duo}>
                    <div className={style.div}>
                        <p>Возрастные ограничения</p>
                        <Select onChange={ageChangeFunction} value={age ? age :  undefined}>
                            <Select.Option value='1'>14+</Select.Option>
                            <Select.Option value='2'>16+</Select.Option>
                            <Select.Option value='3'>18+</Select.Option>
                        </Select>
                    </div>
                    <div className={style.div2}>
                        <Checkbox onChange={isQRChange} value={true} checked={isQR}/> Вход на мероприятие только по QR коду
                    </div>
                </div>
                <div className={style.input_wrapper_duo3}>
                    <p>Цена</p>
                    <div className={style.div3}>
                        <Input type='number' placeholder='от' className={style.input} value={priceStart} onChange={priceStartChangeFunction}/>
                        <Input type='number' placeholder='до' className={style.input} value={priceEnd} onChange={priceEndChangeFunction}/>
                    </div>
                </div>
                <div className={style.input_wrapper}>
                    <p>Ссылка на сайт или соц-сеть</p>
                    <Input value={link} onChange={linkChangeFunction}/>
                </div>
                <div className={style.input_wrapper2}>
                    <Checkbox onChange={acceptChange} value={true} checked={accept}/> Я принимаю публичную оферу и правила использования
                </div>
                <button disabled={isDisabled ? true : false} onClick={complete}>Зарегистрироваться</button>
            </div>
        </section>
    </>
    )
}

export default AddingCard