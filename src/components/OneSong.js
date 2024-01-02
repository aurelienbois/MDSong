import React, { useContext, useEffect } from 'react'
import SongsContext from '../providers/SongsContext'

function OneSong(song) {
    const {changeCurrentSong, currentSong, setPlay} = useContext(SongsContext)
    useEffect(()=>{
        console.log(song);
    })
  return (
    <div className='one-music py-3 gap-4' onClick={()=>{changeCurrentSong(song.song); setPlay(true)}}>
        <img className='' alt='music' src={process.env.PUBLIC_URL+"/dossiers_chansons/"+song.song.cover}></img>
        
    </div>
  )
}

export default OneSong