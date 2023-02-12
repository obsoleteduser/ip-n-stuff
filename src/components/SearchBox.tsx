import { LatLngTuple } from 'leaflet'
import React, { useEffect, FC, Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import './SearchBox.css'
import dataService from '../services/getData'


interface IProps{
    setCoordinates: Dispatch<SetStateAction<LatLngTuple>>,
    setData: any
}

const SearchBox: FC<IProps> = ({setCoordinates, setData})=> {
    const [ip, setIp] = useState('')
    const [switcher, setSwitcher] = useState(false)

    useEffect(()=>{
        dataService.getLocation(ip)
        .then(data => setCoordinates([data.location.lat, data.location.lng]))
        
      },[switcher])

 

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setIp(event.target.value)
    }
  
    const swicthHandler = () =>{
        setSwitcher(!switcher)
    }

    return (
        <div className='search'>
        <p>Get Location</p>
         <div className="search-container">
            <input onChange={handleInput} type="text" className="search-box" placeholder='Enter the IP address'/>
            <button onClick={swicthHandler} className='get'>Get</button>
        </div>
        </div>
    )
}

export default SearchBox
