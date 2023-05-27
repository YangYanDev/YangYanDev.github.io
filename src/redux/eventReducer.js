import { EventsAPI } from "../api/api"

const READEVENTS = 'READEVENTS'
const ADDEVENTS ='ADDEVENTS'
const ADDSITES = 'ADDSITES'

const initialState = {
    events: [

    ],
    sites: [
        {hello: 'keof'}
    ]
}
const eventReducer = (state = initialState, action ) =>{
    switch (action.type) {
        case READEVENTS:
        {
            const copystate = {...state}
            copystate.events = [...state.events]
            return copystate
        }
        case ADDEVENTS:
        {
            const copystate = {...state}
            copystate.events = [...state.events]
            copystate.events = action.events
            return copystate
        }
        case ADDSITES:
        {
            const copystate = {...state}
            copystate.sites = [...state.sites]
            copystate.sites = action.sites
            return copystate
        }


        default: return state
    }
}

export const readEvents = () => ({type: READEVENTS})
export const addEvents = (events) =>({type: ADDEVENTS, events})
export const addSites = (sites) =>({type: ADDSITES, sites})

export const AddingEvents = () => (dispatch) =>
{
    EventsAPI.getEvents().then(data =>{
        dispatch(addEvents(data.events))
        console.log('thunkCreatore AddingEvents was called')
    })
}
export const AddingSites = () => (dispatch) =>
{
    EventsAPI.getSites().then(data =>{
        dispatch(addSites(data.sites))
        console.log('thunkCreatore AddingSites was called')
    })
}


export default eventReducer


