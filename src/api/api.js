import axios from 'axios'

const instanse = axios.create({
    baseURL: 'https://powerful-inlet-06027.herokuapp.com/',
    headers: {
        'content-type': 'application/json',
        // credentials: "include",
        // 'Access-Control-Allow-Origin': '*'
    }
})
export const EventsAPI = {
    CreateEvent(name, date, time, place, category, type, information,  age, isQR, priceStart, priceEnd, link, file)
    {
        return instanse.post('/createEvent', {name, date, time, place, category, type, information,  age, isQR, priceStart, priceEnd, link, file}).then(Response => {
        return Response.data})
    },
    getEvents()
    {
        return instanse.get('/getEvents').then(Response =>{
        return Response.data})
    },
    getEvent(id)
    {
        return instanse.get(`/getEvent/${id}`).then(Response =>{
        return Response.data})
    },
    getEventSearch(name)
    {
        return instanse.get(`/getEventsSearch/?name=${name}`).then(Response =>{
        return Response.data})
    },
    CreateSites(name, date, time, place, category, type, information,  age, isQR, priceStart, priceEnd, link)
    {
        return instanse.post('/createSites', {name, date, time, place, category, type, information,  age, isQR, priceStart, priceEnd, link}).then(Response => {
        return Response.data})
    },
    getSites()
    {
        return instanse.get('/getSites').then(Response =>{
        return Response.data})
    },
    getSite(id)
    {
        return instanse.get(`/getSite/${id}`).then(Response =>{
        return Response.data})
    },
    getEventTypes(category)
    {
        return instanse.get(`/getEventType/?category=${category}`).then(Response =>{
        return Response.data})
    },
    getCities()
    {
        return instanse.get(`/getCities`).then(Response =>{
        return Response.data})
    },
    CreateFilters(category, age, date, city, type, QR, priceStart, priceEnd, days, sort){
        return instanse.post('/createFilter', {category, age, date, city, type, QR, priceStart, priceEnd, days, sort}).then(Response => {
        return Response.data})
    }, 

}
