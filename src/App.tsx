import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Map from './components/Map'
import { LatLngTuple } from 'leaflet' 
import SearchBox from './components/SearchBox'
import dataService from './services/getData'



const App = () => {
  const [coordinates, setCoordinates] = useState<LatLngTuple>([0,0])
  const [data, setData] = useState<any>({})

  useEffect(()=>{
    dataService.getLocation('8.8.8.8')
    .then(data => setCoordinates([data.location.lat, data.location.lng]))
    
  },[])
  
  return (
    <div className="App">
      <SearchBox setCoordinates={setCoordinates} setData={setData}></SearchBox>
      <Map coordinates={coordinates} data={data}></Map>
    </div>
  )
}

export default App
 