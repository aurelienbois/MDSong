import React, { useEffect, useState } from 'react'
import SongsContext from './SongsContext'
import sons from '../sons'


function SongContextProvider({children}) {
    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState({})
    const [play, setPlay] = useState(true)
    
    useEffect(()=>{
        setSongs(sons)
        // console.log(songs);
    },[songs])

    const changeCurrentSong = (song) =>{
        setCurrentSong(song)
    }


  return (
    <SongsContext.Provider value={{songs, currentSong, changeCurrentSong, play, setPlay}}>
        {children}
    </SongsContext.Provider>
  )
}

export default SongContextProvider