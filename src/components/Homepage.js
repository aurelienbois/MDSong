import React, { useContext, useEffect } from 'react'
import OneSong from './OneSong'
import SongsContext from '../providers/SongsContext'
import SongPlayer from './SongPlayer'

function Homepage() {
    const {songs, currentSong} = useContext(SongsContext)
    useEffect(()=>{
        console.log(songs);
    })
  return (
    <div className='home position-relative'>
        <audio className='d-none' src={process.env.PUBLIC_URL+"/dossiers_chansons/"+currentSong?.song} controls autoPlay/>
        {
          // vérifier que le tableau de sons n'est pas vide avant d'afficher le player.
          Object.keys(currentSong).length !== 0 && <SongPlayer></SongPlayer>
        }
    </div>
  )
}

export default Homepage