// Import des dépendances nécessaires depuis React et le contexte des chansons
import React, { useContext, useEffect } from 'react';
import SongsContext from '../providers/SongsContext'; // Contexte global pour les données des chansons
import ServerAddressContext from '../providers/ServerAddressContext';


// Définition du composant OneSong
function OneSong(song) {
    // Utilisation du contexte pour accéder aux fonctions et données liées aux chansons
    const { changeCurrentSong, currentSong, setPlay } = useContext(SongsContext);

    // Utilisation de useEffect pour afficher la chanson actuelle dans la console à chaque rendu
    useEffect(() => {
        console.log(currentSong);
    });

    const { serverAddress } = useContext(ServerAddressContext);

    // Rendu du composant
    return (
        // Div représentant une chanson individuelle, avec gestion du clic pour changer la chanson actuelle
        <div className='one-music py-3 gap-4' onClick={() => { changeCurrentSong(song.song); setPlay(true) }}>
            {/* Image de la pochette de la chanson */}
            <img className='' alt='music' src={serverAddress + song.song.cover}></img>

            {/* Informations sur la chanson (titre et artiste) */}
            <div>
                <h4 className={(currentSong.title === song.song.title) ? 'text-info' : ''}>{song.song.title}</h4>
                <h6 className=''>{song.song.artist}</h6>
            </div>

            {/* Bouton pour indiquer si la chanson est en cours de lecture */}
            <button className='btn border-0 ms-auto p-0'>
                {
                    (currentSong.title === song.song.title) ? (
                        <i className="fa-solid fa-chart-simple fa-beat text-info"></i>
                    ) : (
                        <i className="fa-solid fa-circle-play"></i>
                    )
                }
            </button>
        </div>
    );
}

// Export du composant OneSong
export default OneSong;
