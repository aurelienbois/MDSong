// Import des dépendances nécessaires depuis React et le contexte des chansons
import React, { useContext, useState, useRef } from 'react';
import SongsContext from '../providers/SongsContext'; // Contexte global pour les données des chansons
import ServerAddressContext from '../providers/ServerAddressContext';


// Définition du composant SongPlayer
function SongPlayer() {
    // Utilisation du contexte pour accéder aux fonctions et données liées aux chansons
    const { currentSong, play, pauseOrPlay, goForward, goBackward } = useContext(SongsContext);
    const [full, setFull] = useState(false); // État pour gérer le mode plein écran
    const audioRef = useRef(null); // Référence au lecteur audio

    // Fonction pour mettre le lecteur en plein écran
    const fullSize = (e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') {
            setFull(true);
        }
    }

    // Fonction pour minimiser le lecteur
    const minSize = () => {
        setFull(false);
    }

    // Fonction pour relancer la musique
    const restartAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Réinitialiser le temps de lecture à 0
            audioRef.current.play(); // Relancer la musique
            goForward(); // Utilisation de goForward
            goBackward(); // Utilisation de goBackward
        }
    };

    const { serverAddress } = useContext(ServerAddressContext);

    // Rendu du composant
    return (
        <div className={'song-player rounded shadow p-2 ' + (full ? 'full' : '')} onClick={(e) => fullSize(e)}>
            {
                !full ?
                    // Quand le lecteur est en mode minsize
                    <div className='contain'>
                        {/* Pochette, titre, artiste et bouton de lecture/pause */}
                        <img className='' alt='music' src={serverAddress + currentSong?.cover}></img>
                        <div>
                            <h4 className=''>{currentSong.title}</h4>
                            <h6 className=''>{currentSong.artist}</h6>
                        </div>
                        <button className='btn border-0 ms-auto p-3' onClick={() => pauseOrPlay()}>
                            {
                                (play) ?
                                    <i className="fa-solid fa-pause"></i>
                                    : <i className="fa-solid fa-play"></i>
                            }
                        </button>
                    </div>
                    :
                    // Quand le lecteur est en mode fullsize
                    <div className='p-2 contain-full'>
                        {/* En-tête avec boutons pour minimiser et autres options */}
                        <div className='head d-flex align-items-center justify-content-between mb-3'>
                            <button className='btn border-0 p-3' onClick={() => minSize()}>
                                <i class="fa-solid fa-angle-down"></i>
                            </button>
                            <h6 className='fw-bold'>MDS B2</h6>
                            <button className='btn border-0 p-3'>
                                <i class="fa-solid fa-ellipsis"></i>
                            </button>
                        </div>

                        {/* Corps du lecteur en mode plein écran avec pochette, boutons de contrôle, etc. */}
                        <div className='body'>
                            <div>
                                <img className='rounded w-100 mb-4' alt='music' src={serverAddress + currentSong?.cover}></img>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h4 className='fw-bold'>{currentSong.title}</h4>
                                        <h6 className=''>{currentSong.artist}</h6>
                                    </div>
                                    <i class="fa-solid fa-circle-check "></i>
                                </div>
                            </div>
                            <div className='mb-5'>
                                {/* Boutons de contrôle du lecteur en mode plein écran */}
                                <div className='buttons-player-full'>
                                    <button className='btn border-0'><i class="fa-solid fa-shuffle"></i></button>
                                    <button className='btn border-0' onClick={() => goBackward()}><i class="fa-solid fa-backward-step display-5"></i></button>
                                    <button className='btn border-0' onClick={() => pauseOrPlay()}>
                                        {
                                            (play) ?
                                                <i className="fa-solid fa-pause display-1"></i>
                                                : <i className="fa-solid fa-play display-1"></i>
                                        }
                                    </button>
                                    <button className='btn border-0' onClick={() => goForward()}><i class="fa-solid fa-forward-step display-5"></i></button>
                                    <button className='btn border-0' onClick={() => restartAudio()}><i class="fa-solid fa-arrow-rotate-left"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

// Export du composant SongPlayer
export default SongPlayer;
