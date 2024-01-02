import React, { useContext, useEffect, useState } from 'react'
import SongsContext from '../providers/SongsContext'

function SongPlayer() {
    const {currentSong, play, setPlay, pauseOrPlay, goForward, goBackward} = useContext(SongsContext)
    const [full, setFull] = useState(false)

    const audio = document.querySelector('audio')

    useEffect(()=>{
        audio.addEventListener("timeupdate", timeupdate);
        //la fonction timeupdate est en dessous
    },[setPlay])

    const timeupdate = () =>{
        
        var currentTime = audio.currentTime; // Temps actuel en secondes
        var duration = audio.duration; // Durée totale de la piste en secondes
        
        if (document.querySelector('.barre-small')) {
            document.querySelector('.barre-small').style.width = `${(currentTime / duration) * 100}%`
        }

        if (document.querySelector('.barre-full')) {
            document.querySelector('.barre-full').style.width = `${(currentTime / duration) * 100}%`
            
        }
    }

    //fonction pour mettre le lecteur en fullScreen
    const fullSize = (e) =>{
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') {
            setFull(true)
            setTimeout(() => {
                timeupdate()
            }, 1);
        }

    }

    //fonction pour minifier le lecteur
    const minSize = () =>{
        setFull(false)
        setTimeout(() => {
            timeupdate()
        }, 1);
    }

  return (
    <div className={'song-player rounded shadow p-2 ' + (full ? 'full': '')} onClick={(e)=>fullSize(e)}>
        {
            !full ?
            //Quand le player est en minsize
            <div className='contain'>
                <img className='' alt='music' src={process.env.PUBLIC_URL+"/dossiers_chansons/"+currentSong?.cover}></img>
                <div>
                    <h4 className=''>{currentSong.title}</h4>
                    <h6 className=''>{currentSong.artist}</h6>
                </div>
                <button className='btn border-0 ms-auto p-3' onClick={()=>pauseOrPlay()}>
                    {
                        (play)?
                        <i className="fa-solid fa-pause"></i>
                        :<i className="fa-solid fa-play"></i>
                    }
                </button>
                <div className='barre-small'></div>
            </div>
            :
            //Quand le player est en fullsize
            <div className='p-2 contain-full'>
                <div className='head d-flex align-items-center justify-content-between mb-3'>
                    <button className='btn border-0 p-3' onClick={()=>minSize()}>
                        <i class="fa-solid fa-angle-down"></i>
                    </button>

                    <h6 className='fw-bold'>MDS B2</h6>

                    <button className='btn border-0 p-3'>
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                </div>
                <div className='body'>
                    <div>
                        <img className='rounded w-100 mb-4' alt='music' src={process.env.PUBLIC_URL+"/dossiers_chansons/"+currentSong?.cover}></img>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <h4 className='fw-bold'>{currentSong.title}</h4>
                                <h6 className=''>{currentSong.artist}</h6>
                            </div>
                            <i class="fa-solid fa-circle-check "></i>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div className='barre-full-container mt-4 mb-4'>
                            <div className='barre-full'></div>
                        </div>
                        <div className='buttons-player-full'>
                            <button className='btn border-0'><i class="fa-solid fa-shuffle"></i></button>
                            <button className='btn border-0' onClick={goBackward}><i class="fa-solid fa-backward-step display-5"></i></button>
                            <button className='btn border-0' onClick={()=>pauseOrPlay()}>
                                {
                                    (play)?
                                    <i className="fa-solid fa-pause display-1"></i>
                                    :<i className="fa-solid fa-play display-1"></i>
                                }
                            </button>
                            <button className='btn border-0' onClick={goForward}><i class="fa-solid fa-forward-step display-5"></i></button>
                            <button className='btn border-0'><i class="fa-solid fa-arrow-rotate-left"></i></button>
                        </div>
                    </div>
                </div>
                
            </div>
        }
        
    </div>
  )
}

export default SongPlayer