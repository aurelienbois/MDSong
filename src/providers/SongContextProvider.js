import React, { useEffect, useState } from 'react'
import SongsContext from './SongsContext'
import sons from '../dossiers_chansons/sons'


function SongContextProvider({children}) {
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        setSongs(sons)
        console.log(songs);
    },[])


  return (
    <SongsContext.Provider value={{songs}}>
        {children}
    </SongsContext.Provider>
  )
}

export default SongContextProvider