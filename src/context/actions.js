import axios from 'axios'
//import { FETCH_TABLES_DATA } from './actionTypes'

const URL = "https://stagingbackoffice.playlogiq.com/UpBet/get_slots/casino_live/ios?lang=en"

export const fetchTablesData = () => axios.get(URL)
    .then(res => res.data)
    .catch(err => console.error('Tables not Found ---- '+err))



  
