import React, { useContext, useEffect } from 'react'
import OneSong from './OneSong'
import SongsContext from '../providers/SongsContext'
import SongPlayer from './SongPlayer'

function Homepage() {
    const {songs, currentSong} = useContext(SongsContext)
    // Commit message : Améliorer useEffect pour éviter un console.log inutile
    useEffect(() => {
      if (songs) {
          console.log(songs);
      }
  }, [songs]);
  return (
    <div className='home position-relative'>
      <section className='top-section p-3'>
            <h1 className='m-0'>MDS B2 2023-2024</h1>
            <p className='m-0 '>Ma playlist &nbsp;&nbsp;¤&nbsp;&nbsp; 12 sons &nbsp;&nbsp;¤&nbsp;&nbsp; 1 heure </p>
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
        <audio className='d-none' src={process.env.PUBLIC_URL+"/dossiers_chansons/"+currentSong?.song} controls autoPlay/>
        {
          // vérifier que le tableau de sons n'est pas vide avant d'afficher le player.
          Object.keys(currentSong).length !== 0 && <SongPlayer></SongPlayer>
        }
    </div>
  )
}

export default Homepage