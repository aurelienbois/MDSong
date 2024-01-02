import React, { useContext, useEffect } from 'react'
import OneSong from './OneSong'
import SongsContext from '../providers/SongsContext'

function Homepage() {
    const {songs, currentSong} = useContext(SongsContext)
    useEffect(()=>{
        console.log(songs);
    })
  return (
    <div className='home position-relative'>
        <section className='top-section p-3'>
            <h1 className='m-0'>Nom de la classe</h1>
            <p className='m-0 '>My playlist &nbsp;&nbsp;¤&nbsp;&nbsp; 240 songs &nbsp;&nbsp;¤&nbsp;&nbsp; 32 hours </p>
        </section>
        <section className='bottom-section p-3 pt-4'>
            <button className='shuffle rounded shadow p-2'><i class="fa-solid fa-shuffle"></i>&nbsp;&nbsp; Aléatoire</button>
            <div className='liste-music pt-3 pb-5'>
                {
                  songs?.map((song)=>(
                    <OneSong song={song}></OneSong>
                  ))
                }
            </div>
        </section>
        
    </div>
  )
}

export default Homepage