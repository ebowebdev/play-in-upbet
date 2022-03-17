import React, { createContext, useState, useEffect} from "react";
import axios from 'axios'

export const Context = createContext();

const URL = "https://stagingbackoffice.playlogiq.com/UpBet/get_slots/casino_live/ios?lang=en"

export const Provider = ({ children }) => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setLoading(false)
        return res.data
      })
      .then(response => {
        setData(response)
        setLoading(false)
      })
      .catch(err => setError(err.message))
  },[])



  return (
    <Context.Provider value={{data,loading,error}}>
      {children}
    </Context.Provider>
  );
};
